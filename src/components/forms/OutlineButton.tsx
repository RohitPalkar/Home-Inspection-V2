type OutlineButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function OutlineButton({ children, className = "", ...rest }: OutlineButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition ${className}`}
    >
      {children}
    </button>
  );
}
