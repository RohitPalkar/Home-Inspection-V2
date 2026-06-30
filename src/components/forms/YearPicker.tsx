import { useState, useCallback, useMemo, useRef } from "react";
import { Calendar } from "lucide-react";
import { cn } from "@/utils/cn";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

const CURRENT_YEAR = new Date().getFullYear();
const DEFAULT_MIN_YEAR = 1800;

interface YearPickerProps {
  value?: string;
  onChange?: (year: string) => void;
  minYear?: number;
  maxYear?: number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  required?: boolean;
  name?: string;
  onBlur?: () => void;
}

function YearPickerContent({
  value,
  onChange,
  minYear,
  maxYear,
  onClose,
  inputRef,
}: {
  value?: string;
  onChange?: (year: string) => void;
  minYear: number;
  maxYear: number;
  onClose: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const parsedValue = value ? parseInt(value, 10) : null;
  const initialDecade = parsedValue
    ? Math.floor(parsedValue / 10) * 10
    : Math.floor(CURRENT_YEAR / 10) * 10;
  const [decade, setDecade] = useState(initialDecade);

  const years = useMemo(() => {
    const arr: number[] = [];
    const start = Math.max(minYear, decade);
    const end = Math.min(maxYear, decade + 9);
    for (let y = start; y <= end; y++) arr.push(y);
    return arr;
  }, [decade, minYear, maxYear]);

  const canGoPrev = decade - 10 >= minYear;
  const canGoNext = decade + 10 <= maxYear;

  const selectYear = useCallback(
    (year: number) => {
      onChange?.(String(year));
      onClose();
      inputRef.current?.focus();
    },
    [onChange, onClose, inputRef],
  );

  const decadeLabel = `${decade}–${Math.min(decade + 9, maxYear)}`;

  return (
    <>
      <div className="flex items-center justify-between px-3 py-2 border-b border-border">
        <button
          type="button"
          onClick={() => setDecade((d) => d - 10)}
          disabled={!canGoPrev}
          className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-sm font-medium text-foreground disabled:opacity-30 hover:bg-accent rounded-lg"
          aria-label="Previous decade"
        >
          ◀
        </button>
        <span className="text-sm font-semibold text-foreground">{decadeLabel}</span>
        <button
          type="button"
          onClick={() => setDecade((d) => d + 10)}
          disabled={!canGoNext}
          className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-sm font-medium text-foreground disabled:opacity-30 hover:bg-accent rounded-lg"
          aria-label="Next decade"
        >
          ▶
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {years.map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => selectYear(year)}
            className={cn(
              "min-h-[44px] rounded-lg text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              parsedValue === year
                ? "bg-primary text-primary-foreground"
                : year === CURRENT_YEAR
                  ? "bg-accent text-accent-foreground ring-1 ring-border"
                  : "bg-surface text-foreground hover:bg-accent",
            )}
            aria-label={`${year}${year === CURRENT_YEAR ? ", current year" : ""}`}
            aria-current={parsedValue === year ? "true" : undefined}
          >
            {year}
          </button>
        ))}
      </div>
    </>
  );
}

export function YearPicker({
  value,
  onChange,
  minYear = DEFAULT_MIN_YEAR,
  maxYear = CURRENT_YEAR,
  placeholder = "e.g. 1985",
  disabled = false,
  readOnly = false,
  error,
  name,
  onBlur,
}: YearPickerProps) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const triggerClick = () => {
    if (!disabled && !readOnly) setOpen((p) => !p);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerClick();
    }
  };

  const input = (
    <div className="relative">
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        name={name}
        value={value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        onClick={triggerClick}
        onKeyDown={handleKeyDown}
        onBlur={onBlur}
        aria-label={placeholder}
        aria-invalid={!!error}
        aria-describedby={error && name ? `${name}-error` : undefined}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          "w-full min-h-[44px] px-3 rounded-lg border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent cursor-pointer pr-10",
          error ? "border-destructive focus:ring-destructive/30" : "border-input",
          (disabled || readOnly) && "opacity-50 cursor-not-allowed",
        )}
      />
      <button
        type="button"
        onClick={triggerClick}
        disabled={disabled || readOnly}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 inline-flex items-center justify-center rounded-md",
          "hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          (disabled || readOnly) && "opacity-50 cursor-not-allowed",
        )}
        aria-label="Open year picker"
      >
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );

  const closePopover = useCallback(() => {
    setOpen(false);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      {isMobile ? (
        <>
          {input}
          {open && (
            <div className="fixed inset-0 z-50 flex items-end">
              <div className="fixed inset-0 bg-black/40" onClick={() => { setOpen(false); inputRef.current?.focus(); }} />
              <div
                role="dialog"
                aria-label="Select a year"
                className="relative z-10 w-full bg-card rounded-t-2xl shadow-elevated border border-border pb-[env(safe-area-inset-bottom,16px)] max-h-[60vh] overflow-y-auto"
              >
                <YearPickerContent
                  value={value}
                  onChange={onChange}
                  minYear={minYear}
                  maxYear={maxYear}
                  onClose={closePopover}
                  inputRef={inputRef}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            {input}
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="end"
            sideOffset={8}
            collisionPadding={16}
            className="w-[320px]"
          >
            <YearPickerContent
              value={value}
              onChange={onChange}
              minYear={minYear}
              maxYear={maxYear}
              onClose={closePopover}
              inputRef={inputRef}
            />
          </PopoverContent>
        </Popover>
      )}

      {error && name && (
        <p id={`${name}-error`} className="mt-1 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
