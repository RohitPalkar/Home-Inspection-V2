import { useState, useRef, useEffect, useCallback, useId } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  options: DropdownOption[];
  disabled?: boolean;
  error?: boolean | string;
  required?: boolean;
  className?: string;
  name?: string;
  onBlur?: () => void;
}

/**
 * Custom dropdown component that completely replaces the native `<select>`.
 *
 * Features:
 * - Placeholder, default value, controlled component
 * - Disabled state, error state, required field
 * - Keyboard navigation (Arrow keys, Enter, Escape, Tab)
 * - Mouse and touch selection
 * - React Hook Form compatible
 * - WCAG 2.2 AA with full ARIA support
 * - Consistent cross-browser appearance
 */
export function Dropdown({
  value,
  onChange,
  placeholder = "Select...",
  options,
  disabled = false,
  error = false,
  required = false,
  className,
  name,
  onBlur,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const id = useId();
  const listId = `${id}-list`;
  const labelId = `${id}-label`;

  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption?.label ?? "";

  // Reset active index when options change or dropdown opens
  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((opt) => opt.value === value);
      setActiveIndex(idx >= 0 ? idx : 0);
    } else {
      setActiveIndex(-1);
    }
  }, [isOpen, options, value]);

  // Scroll active item into view
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [isOpen, activeIndex]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Outside click handler
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, close]);

  const selectOption = useCallback(
    (opt: DropdownOption) => {
      onChange?.(opt.value);
      close();
      triggerRef.current?.focus();
    },
    [onChange, close],
  );

  const handleTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % options.length);
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      }
      case "Enter":
      case " ": {
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options.length) {
          selectOption(options[activeIndex]);
        }
        break;
      }
      case "Escape": {
        e.preventDefault();
        close();
        triggerRef.current?.focus();
        break;
      }
      case "Tab": {
        close();
        break;
      }
    }
  };

  const handleItemKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    opt: DropdownOption,
    idx: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      selectOption(opt);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (idx + 1) % options.length;
      setActiveIndex(nextIdx);
      itemRefs.current[nextIdx]?.focus();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (idx - 1 + options.length) % options.length;
      setActiveIndex(prevIdx);
      itemRefs.current[prevIdx]?.focus();
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      close();
      triggerRef.current?.focus();
      return;
    }

    if (e.key === "Tab") {
      close();
    }
  };

  const handleTriggerBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
    if (listRef.current && listRef.current.contains(e.relatedTarget as Node)) {
      return;
    }
    close();
    onBlur?.();
  };

  const errorMessage = typeof error === "string" ? error : undefined;
  const hasError = !!error;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        ref={triggerRef}
        type="button"
        id={labelId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-label={placeholder}
        aria-invalid={hasError}
        aria-required={required}
        aria-disabled={disabled}
        name={name}
        tabIndex={0}
        onClick={() => {
          if (!disabled) setIsOpen((prev) => !prev);
        }}
        onKeyDown={handleTriggerKeyDown}
        onBlur={handleTriggerBlur}
        disabled={disabled}
        className={cn(
          "w-full h-12 min-h-[44px] pl-3 pr-5 rounded-lg border bg-card text-left",
          "flex items-center justify-between gap-2",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          hasError && "border-destructive",
          !hasError && "border-input",
          !selectedLabel && "text-muted-foreground",
          selectedLabel && "text-foreground",
        )}
      >
        <span className="truncate">{selectedLabel || placeholder}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>

      {isOpen && !disabled && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-label={placeholder}
          tabIndex={-1}
          className={cn(
            "absolute z-50 mt-1 w-full bg-card rounded-lg border border-border shadow-elevated",
            "max-h-60 overflow-y-auto",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-100",
          )}
        >
          {options.length === 0 ? (
            <li className="px-3 py-2.5 text-sm text-muted-foreground min-h-[44px] flex items-center">
              No options available
            </li>
          ) : (
            options.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isActive = idx === activeIndex;

              return (
                <li
                  key={opt.value}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  role="option"
                  id={`${listId}-${idx}`}
                  aria-selected={isSelected}
                  tabIndex={-1}
                  onClick={() => selectOption(opt)}
                  onKeyDown={(e) => handleItemKeyDown(e, opt, idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={cn(
                    "px-3 py-2.5 text-sm cursor-pointer transition-colors",
                    "min-h-[44px] flex items-center",
                    isActive && "bg-accent",
                    isSelected && "bg-primary/10 font-medium text-foreground",
                    !isSelected && "text-foreground hover:bg-accent",
                  )}
                >
                  {opt.label}
                </li>
              );
            })
          )}
        </ul>
      )}

      {errorMessage && (
        <p
          id={name ? `${name}-error` : undefined}
          className="mt-1 text-xs text-destructive"
          role="alert"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
