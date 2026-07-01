import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { YearPicker } from "@/components/forms/YearPicker";
import { Dropdown } from "@/components/forms/Dropdown";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { DynamicQuestion } from "@/components/forms/DynamicQuestion";
import { SURVEY_SECTIONS, HEATING_QUESTION } from "@/config/survey";
import { openHelp } from "@/components/forms/help-utils";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface InfrastructureStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp?: (c: HelpContent) => void;
}

export function InfrastructureStep({
  data,
  update,
  onNext,
  onBack,
  onHelp,
}: InfrastructureStepProps) {
  const yearNum = parseInt(data.yearBuilt, 10);
  const isHistoric = !isNaN(yearNum) && yearNum < 1941;

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <SectionHeader section={SURVEY_SECTIONS.infrastructure} />

        <div className="mt-6 space-y-5">
          <div>
            <FieldLabel required>Year Home Built</FieldLabel>
            <YearPicker
              value={data.yearBuilt}
              onChange={(v) => update("yearBuilt", v)}
              placeholder="e.g. 1985"
            />
            {isHistoric && (
              <div className="mt-3 p-4 rounded-lg border border-warning/40 bg-warning/10 text-sm">
                <p className="font-semibold text-foreground">Historic Structure Details</p>
                <p className="text-muted-foreground mt-1">
                  Homes built before 1941 may require additional architectural detail. Please
                  describe any original architectural features (foundation type, original framing,
                  etc.).
                </p>
                <textarea
                  className="mt-2 w-full min-h-[80px] p-3 rounded-lg border border-input bg-card text-sm"
                  placeholder="Describe historic features..."
                />
              </div>
            )}
          </div>

          <div>
            <FieldLabel>Amperage & Panel Capacity</FieldLabel>
            <Dropdown
              value={data.amperage}
              onChange={(v) => update("amperage", v)}
              placeholder="Select capacity…"
              options={[
                { label: "60 amp", value: "60" },
                { label: "100 amp", value: "100" },
                { label: "150 amp", value: "150" },
                { label: "200 amp", value: "200" },
                { label: "200+ amp", value: "200+" },
              ]}
            />
            {onHelp && (
              <div className="mt-1.5">
                <HelpLink
                  label="What are protective devices?"
                  onClick={() => openHelp("protective-devices", onHelp)}
                />
              </div>
            )}
          </div>

          <div>
            <FieldLabel>Plumbing Material</FieldLabel>
            <Dropdown
              value={data.plumbingMaterial}
              onChange={(v) => update("plumbingMaterial", v)}
              placeholder="Select material…"
              options={[
                { label: "Copper", value: "Copper" },
                { label: "PEX", value: "PEX" },
                { label: "PVC", value: "PVC" },
                { label: "Galvanized", value: "Galvanized" },
                { label: "Polybutylene", value: "Polybutylene" },
              ]}
            />
            {onHelp && (
              <div className="mt-1.5">
                <HelpLink
                  label="What is plumbing material?"
                  onClick={() => openHelp("plumbing-material", onHelp)}
                />
              </div>
            )}
          </div>

          <div>
            {onHelp && (
              <DynamicQuestion
                config={HEATING_QUESTION}
                data={data}
                update={update}
                onHelp={onHelp}
              />
            )}
          </div>
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.yearBuilt} />
      </StepCard>
    </div>
  );
}
