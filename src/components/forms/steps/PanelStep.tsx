import { StepCard } from "@/components/forms/StepCard";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface PanelStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

export function PanelStep({ data, update, onNext, onBack, onHelp }: PanelStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Please select the electrical panel type in the home:
        </h2>

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

        <div className="mt-5 flex flex-wrap gap-4 sm:gap-8 justify-center">
          <HelpLink
            label="What is a breaker panel?"
            onClick={() =>
              onHelp({
                title: "Breaker Panels",
                body: (
                  <div className="space-y-3">
                    <p>
                      Breaker panel could be located inside or outside your home and looks like
                      this:
                    </p>
                    <div className="aspect-video rounded-lg bg-muted grid place-items-center text-xs text-muted-foreground">
                      /placeholder-breaker-panel.jpg
                    </div>
                  </div>
                ),
              })
            }
          />
          <HelpLink
            label="What is a fuse panel?"
            onClick={() =>
              onHelp({
                title: "Fuse Panels",
                body: (
                  <div className="space-y-3">
                    <p>
                      Fuse panel could be located inside or outside your home, and looks like this:
                    </p>
                    <div className="aspect-video rounded-lg bg-muted grid place-items-center text-xs text-muted-foreground">
                      /placeholder-fuse-panel.jpg
                    </div>
                  </div>
                ),
              })
            }
          />
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.panel} />
      </StepCard>
    </div>
  );
}
