import type { ReactNode } from "react";

export function StepCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-card rounded-2xl shadow-card border border-border ${className}`}>
      {children}
    </div>
  );
}
