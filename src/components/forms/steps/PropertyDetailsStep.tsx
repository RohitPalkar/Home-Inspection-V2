import { useMemo } from "react";
import { Home } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { RadioRow } from "@/components/forms/RadioRow";
import { Select } from "@/components/forms/Select";
import { NavFooter } from "@/components/forms/NavFooter";
import { FileDropZone } from "@/components/forms/FileDropZone";
import type { SurveyData, SurveyUpdater } from "@/types/survey";

interface PropertyDetailsStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
}

export function PropertyDetailsStep({ data, update, onNext, onBack }: PropertyDetailsStepProps) {
  const years = useMemo(() => {
    const arr: string[] = [];
    for (let y = new Date().getFullYear(); y >= 1850; y--) arr.push(String(y));
    return arr;
  }, []);

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
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center">
            <Home className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">Property Details</div>
            <div className="text-xs text-muted-foreground">
              Let's start with some basic information about your home.
            </div>
          </div>
        </div>

        <div className="mb-6">
          <FieldLabel required>1. How old is your roof?</FieldLabel>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {(
              [
                ["<5", "Less than 5 years ago"],
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
        </div>

        <div className="mb-6">
          <FieldLabel required>2. What is the year your home was built?</FieldLabel>
          <Select
            value={data.homeYearSelect}
            onChange={(e) => update("homeYearSelect", e.target.value)}
          >
            <option value="">Select year built</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </Select>
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
