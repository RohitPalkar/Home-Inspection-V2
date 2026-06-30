import { StepCard } from "@/components/forms/StepCard";
import { CheckRow } from "@/components/forms/CheckRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import { WIRING_OPTIONS } from "@/utils/constants";
import { openHelp } from "@/components/forms/help-utils";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface WiringStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

export function WiringStep({ data, update, onNext, onBack, onHelp }: WiringStepProps) {
  const toggle = (opt: string) => {
    const set = new Set(data.wiring);
    if (set.has(opt)) set.delete(opt);
    else set.add(opt);
    update("wiring", Array.from(set));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <SectionHeader section={SURVEY_SECTIONS.wiring} />

        <div className="mt-6 space-y-3">
          {WIRING_OPTIONS.map((o) => (
            <CheckRow
              key={o}
              label={o}
              checked={data.wiring.includes(o)}
              onClick={() => toggle(o)}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <HelpLink label="What are the different wiring types?" onClick={() => openHelp("wiring-types", onHelp)} />
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={data.wiring.length === 0} />
      </StepCard>
    </div>
  );
}
