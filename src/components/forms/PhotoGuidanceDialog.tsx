import { Check, TriangleAlert } from "lucide-react";
import type { PhotoGuidanceEntry } from "@/types/survey";
import { HelpImage } from "@/components/forms/HelpImage";

interface PhotoGuidanceDialogProps {
  entry: PhotoGuidanceEntry;
}

function Checklist({ items, icon }: { items: string[]; icon: "check" | "warning" }) {
  const Icon = icon === "check" ? Check : TriangleAlert;
  const cls = icon === "check" ? "text-success" : "text-warning";
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-sm text-foreground">
          <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${cls}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PhotoGuidanceDialog({ entry }: PhotoGuidanceDialogProps) {
  return (
    <div className="space-y-6">
      <section>
        <h4 className="font-semibold text-foreground mb-1">Purpose</h4>
        <p className="text-sm text-muted-foreground">{entry.purpose}</p>
      </section>

      <section>
        <h4 className="font-semibold text-foreground mb-2">How to Take the Photo</h4>
        <Checklist items={entry.steps} icon="check" />
      </section>

      <section>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-success mb-2 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> Good Example
            </h4>
            <HelpImage
              src={entry.goodExample.src}
              alt={entry.goodExample.alt}
              fallbackSrc={entry.goodExample.fallbackSrc}
            />
            <p className="mt-1 text-xs text-muted-foreground">{entry.goodExample.caption}</p>
          </div>
          <div>
            <h4 className="font-semibold text-warning mb-2 flex items-center gap-1.5">
              <TriangleAlert className="w-4 h-4" /> Avoid This
            </h4>
            <HelpImage
              src={entry.badExample.src}
              alt={entry.badExample.alt}
              fallbackSrc={entry.badExample.fallbackSrc}
            />
            <p className="mt-1 text-xs text-muted-foreground">{entry.badExample.caption}</p>
          </div>
        </div>
      </section>

      <section>
        <h4 className="font-semibold text-foreground mb-2">Quick Tips</h4>
        <Checklist items={entry.tips} icon="check" />
      </section>

      <section>
        <h4 className="font-semibold text-foreground mb-2">Common Mistakes</h4>
        <Checklist items={entry.commonMistakes} icon="warning" />
      </section>
    </div>
  );
}
