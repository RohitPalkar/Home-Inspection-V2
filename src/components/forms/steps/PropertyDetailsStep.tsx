import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { YearPicker } from "@/components/forms/YearPicker";
import { NavFooter } from "@/components/forms/NavFooter";
import { FileDropZone } from "@/components/forms/FileDropZone";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import { openHelp } from "@/components/forms/help-utils";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface PropertyDetailsStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp?: (p: HelpContent) => void;
}

export function PropertyDetailsStep({
  data,
  update,
  onNext,
  onBack,
  onHelp,
}: PropertyDetailsStepProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          House Inspection Questionnaire
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Please answer the following questions about your property.
        </p>
      </div>

      <StepCard className="mt-6 p-6 sm:p-8 ring-2 ring-primary/30">
        <SectionHeader section={SURVEY_SECTIONS["property-details"]} />

        <div className="mb-6">
          <FieldLabel required>1. How old is your roof?</FieldLabel>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {(
              [
                ["<5", "≤ 5 years ago"],
                ["5-10", "5-10 years"],
                ["10-20", "10-20 years"],
                ["20+", "20+ years"],
              ] as const
            ).map(([val, label]) => (
              <RadioRow
                key={val}
                label={label}
                checked={data.roofAge === val}
                onClick={() => update("roofAge", val)}
              />
            ))}
          </div>
          {onHelp && (
            <div className="mt-1.5">
              <HelpLink
                label="How does roof age affect my policy?"
                onClick={() => openHelp("roof-age", onHelp)}
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <FieldLabel required>2. What is the year your home was built?</FieldLabel>
          <YearPicker
            value={data.homeYearSelect}
            onChange={(v) => update("homeYearSelect", v)}
            placeholder="e.g. 1985"
          />
        </div>

        <div className="mb-6">
          <FieldLabel required>3. Do you have a basement?</FieldLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <RadioRow
              label="Yes, Finished"
              checked={data.basement === "finished"}
              onClick={() => update("basement", "finished")}
            />
            <RadioRow
              label="Yes, Unfinished"
              checked={data.basement === "unfinished"}
              onClick={() => update("basement", "unfinished")}
            />
            <RadioRow
              label="No"
              checked={data.basement === "no"}
              onClick={() => update("basement", "no")}
            />
          </div>
          {onHelp && (
            <div className="mt-1.5">
              <HelpLink
                label="What is foundation type?"
                onClick={() => openHelp("foundation-type", onHelp)}
              />
            </div>
          )}
        </div>

        {data.basement && data.basement !== "no" && (
          <div className="mb-2">
            <FieldLabel required>4. Please upload photos of your basement</FieldLabel>
            <FileDropZone
              files={data.basementPhotos}
              onChange={(files) => update("basementPhotos", files)}
            />
          </div>
        )}
      </StepCard>

      <NavFooter
        onBack={onBack}
        onNext={onNext}
        nextDisabled={!data.roofAge || !data.homeYearSelect || !data.basement}
      />
    </div>
  );
}
