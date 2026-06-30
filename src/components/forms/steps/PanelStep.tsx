import { StepCard } from "@/components/forms/StepCard";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { HelpImage } from "@/components/forms/HelpImage";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import { HELP } from "@/config/help";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";
import type { HelpLinkConfig } from "@/config/help";

interface PanelStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

const HELP_LINKS: HelpLinkConfig[] = [
  {
    id: "breaker-panel",
    label: "What is a breaker panel?",
    entry: HELP["panel-breaker"],
  },
  {
    id: "fuse-panel",
    label: "What is a fuse panel?",
    entry: HELP["panel-fuse"],
  },
];

export function PanelStep({ data, update, onNext, onBack, onHelp }: PanelStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <SectionHeader section={SURVEY_SECTIONS.panel} />

        <div className="mt-6 space-y-3">
          <RadioRow
            label="Breaker panel"
            checked={data.panel === "breaker"}
            onClick={() => update("panel", "breaker")}
          />
          <RadioRow
            label="Fuse panel"
            checked={data.panel === "fuse"}
            onClick={() => update("panel", "fuse")}
          />
          <RadioRow
            label="Both"
            checked={data.panel === "both"}
            onClick={() => update("panel", "both")}
          />
          <RadioRow
            label="Unknown"
            checked={data.panel === "unknown"}
            onClick={() => update("panel", "unknown")}
          />
        </div>

        <div className="mt-4 space-y-2">
          {HELP_LINKS.map((link) => (
            <div key={link.id} className="flex justify-center">
              <HelpLink
                label={link.label}
                onClick={() =>
                  onHelp({
                    title: link.entry.title,
                    body: (
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{link.entry.description}</p>
                        {link.entry.image && (
                          <HelpImage
                            src={link.entry.image.src}
                            alt={link.entry.image.alt}
                            fallbackSrc={link.entry.image.fallbackSrc}
                          />
                        )}
                      </div>
                    ),
                  })
                }
              />
            </div>
          ))}
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.panel} />
      </StepCard>
    </div>
  );
}
