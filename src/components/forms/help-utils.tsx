import { HELP } from "@/config/help";
import { HelpImage } from "@/components/forms/HelpImage";
import type { HelpContent } from "@/types/survey";
import type { HelpSection } from "@/config/help";

function HelpSectionCard({ section }: { section: HelpSection }) {
  return (
    <div className="border border-border rounded-xl p-4 space-y-3">
      <h4 className="font-semibold text-foreground text-base">{section.title}</h4>
      {section.image && (
        <HelpImage src={section.image.src} alt={section.image.alt} fallbackSrc={section.image.fallbackSrc} />
      )}
      <p className="text-sm text-muted-foreground">{section.description}</p>
      {section.characteristics && section.characteristics.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">Typical Characteristics</p>
          <ul className="space-y-0.5">
            {section.characteristics.map((c, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {section.identification && section.identification.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">How to Identify</p>
          <ul className="space-y-0.5">
            {section.identification.map((c, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary shrink-0">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function toHelpContent(entryKey: string): HelpContent {
  const entry = HELP[entryKey];
  if (!entry) {
    return { title: entryKey, body: <p>Help content not found.</p> };
  }
  return {
    title: entry.title,
    body: (
      <div className="space-y-5">
        {entry.image && (
          <HelpImage src={entry.image.src} alt={entry.image.alt} fallbackSrc={entry.image.fallbackSrc} />
        )}
        <p className="text-sm text-muted-foreground">{entry.description}</p>
        {entry.sections && entry.sections.length > 0 && (
          <div className="space-y-4">
            {entry.sections.map((s, i) => (
              <HelpSectionCard key={i} section={s} />
            ))}
          </div>
        )}
        {entry.tips && entry.tips.length > 0 && (
          <div className="bg-muted/50 rounded-xl p-4">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Helpful Tip{entry.tips.length > 1 ? "s" : ""}</p>
            <ul className="space-y-1">
              {entry.tips.map((t, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ),
  };
}

export function openHelp(entryKey: string, onHelp?: (c: HelpContent) => void) {
  if (!onHelp) return;
  const content = toHelpContent(entryKey);
  if (content) onHelp(content);
}
