type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, className = "", ...rest }: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className={`inline-flex items-center justify-center gap-2 min-h-[48px] sm:min-h-[44px] px-5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
