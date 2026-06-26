interface RadioRowProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export function RadioRow({ label, checked, onClick }: RadioRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 min-h-[56px] px-4 rounded-lg border text-left transition ${
        checked ? "bg-selected border-primary" : "bg-card border-border hover:border-primary/40"
      }`}
    >
      <span
        className={`w-5 h-5 rounded-full border-2 grid place-items-center shrink-0 ${
          checked ? "border-primary" : "border-muted-foreground/50"
        }`}
      >
        {checked && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
      </span>
      <span className="font-medium text-foreground">{label}</span>
    </button>
  );
}
