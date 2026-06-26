import { Check } from "lucide-react";

interface CheckRowProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export function CheckRow({ label, checked, onClick }: CheckRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 min-h-[56px] px-4 rounded-lg border text-left transition ${
        checked ? "bg-selected border-primary" : "bg-card border-border hover:border-primary/40"
      }`}
    >
      <span
        className={`w-5 h-5 rounded border-2 grid place-items-center shrink-0 ${
          checked ? "bg-primary border-primary" : "border-muted-foreground/50"
        }`}
      >
        {checked && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
      </span>
      <span className="font-medium text-foreground">{label}</span>
    </button>
  );
}
