import type { SectionConfig } from "@/config/survey";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  section: SectionConfig;
  className?: string;
}

export function SectionHeader({ section, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{section.title}</h2>
      {section.subtitle && (
        <p className="mt-1.5 text-sm sm:text-base text-muted-foreground max-w-prose">
          {section.subtitle}
        </p>
      )}
    </div>
  );
}
