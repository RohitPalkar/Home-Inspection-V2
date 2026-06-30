import { Cable } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface PanelStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

export function PanelStep({ data, update, onNext, onBack, onHelp }: PanelStepProps) {
  const openDefs = () =>
    onHelp({
      title: "Panel Examples",
      wide: true,
      body: (
        <div className="space-y-5">
          <p className="text-muted-foreground">
            Electrical panels are typically located in a utility area of the home such as a garage,
            basement, or utility closet. They may also be located outside the home.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Breaker panel</h4>
            <img
              className="aspect-video rounded-lg object-cover w-full"
              src="/images/breaker-panel.webp"
              alt="Breaker panel example"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.endsWith(".webp")) {
                  img.src = img.src.replace(".webp", ".jpg");
                } else if (img.src.endsWith(".jpg")) {
                  img.src = img.src.replace(".jpg", ".jpeg");
                }
              }}
            />
            <p className="text-sm text-muted-foreground">
              Breaker panel could be located inside or outside your home. It uses circuit breakers
              to protect electrical circuits from overcurrent.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground">Fuse panel</h4>
            <img
              className="aspect-video rounded-lg object-cover w-full"
              src="/images/fuse-panel.jpg"
              alt="Fuse panel example"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.endsWith(".jpg")) {
                  img.src = img.src.replace(".jpg", ".jpeg");
                }
              }}
            />
            <p className="text-sm text-muted-foreground">
              Fuse panel could be located inside or outside your home. It uses fuses that melt to
              break the circuit when too much current flows.
            </p>
          </div>
        </div>
      ),
    });

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center">
            <Cable className="w-5 h-5 text-primary" />
          </div>
          <SectionHeader section={SURVEY_SECTIONS.panel} className="mb-0" />
        </div>

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

        <div className="mt-4 text-center">
          <HelpLink label="What are the different types of panels?" onClick={openDefs} />
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.panel} />
      </StepCard>
    </div>
  );
}
