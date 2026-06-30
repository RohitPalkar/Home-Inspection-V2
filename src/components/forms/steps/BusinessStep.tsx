import { StepCard } from "@/components/forms/StepCard";
import { CheckRow } from "@/components/forms/CheckRow";
import { RadioRow } from "@/components/forms/RadioRow";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import { BUSINESS_OPTIONS } from "@/utils/constants";
import type { SurveyData, SurveyUpdater } from "@/types/survey";

interface BusinessStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
}

export function BusinessStep({ data, update, onNext, onBack }: BusinessStepProps) {
  const toggle = (o: string) => {
    const set = new Set(data.businessTypes);
    if (set.has(o)) set.delete(o);
    else set.add(o);
    update("businessTypes", Array.from(set));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <SectionHeader section={SURVEY_SECTIONS.business} />

        <div className="mt-6 space-y-3">
          {BUSINESS_OPTIONS.map((o) => (
            <CheckRow
              key={o}
              label={o}
              checked={data.businessTypes.includes(o)}
              onClick={() => toggle(o)}
            />
          ))}
        </div>

        {data.businessTypes.includes("Other Business Type") && (
          <div className="mt-5 p-4 rounded-lg bg-accent border border-primary/20">
            <FieldLabel required>Describe the nature of business operations</FieldLabel>
            <textarea
              className="w-full min-h-[100px] p-3 rounded-lg border border-input bg-card text-sm"
              value={data.otherBusinessDesc}
              onChange={(e) => update("otherBusinessDesc", e.target.value)}
              placeholder="Describe the business activity, hours, customer traffic, etc."
            />
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-border">
          <p className="font-semibold text-foreground mb-3">
            Does the property have a swimming pool?
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <RadioRow
              label="Yes"
              checked={data.hasPool === "yes"}
              onClick={() => update("hasPool", "yes")}
            />
            <RadioRow
              label="No"
              checked={data.hasPool === "no"}
              onClick={() => update("hasPool", "no")}
            />
          </div>
        </div>

        {data.hasPool === "yes" && (
          <div className="mt-5 space-y-5">
            <div>
              <p className="font-semibold text-foreground mb-3">Pool location:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <RadioRow
                  label="Indoor"
                  checked={data.poolLocation === "indoor"}
                  onClick={() => update("poolLocation", "indoor")}
                />
                <RadioRow
                  label="Outdoor"
                  checked={data.poolLocation === "outdoor"}
                  onClick={() => update("poolLocation", "outdoor")}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">
                Is the pool fully gated/enclosed with safety barriers?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <RadioRow
                  label="Yes"
                  checked={data.poolGated === "yes"}
                  onClick={() => update("poolGated", "yes")}
                />
                <RadioRow
                  label="No"
                  checked={data.poolGated === "no"}
                  onClick={() => update("poolGated", "no")}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">
                Is the pool currently filled with water?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <RadioRow
                  label="Yes"
                  checked={data.poolFilled === "yes"}
                  onClick={() => update("poolFilled", "yes")}
                />
                <RadioRow
                  label="No"
                  checked={data.poolFilled === "no"}
                  onClick={() => update("poolFilled", "no")}
                />
              </div>
              {data.poolFilled === "no" && (
                <div className="mt-3 p-4 rounded-lg bg-warning/10 border border-warning/30">
                  <FieldLabel>Please explain why the pool is not currently filled</FieldLabel>
                  <textarea
                    className="w-full min-h-[80px] p-3 rounded-lg border border-input bg-card text-sm"
                    value={data.poolEmptyReason}
                    onChange={(e) => update("poolEmptyReason", e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        <NavFooter
          onBack={onBack}
          onNext={onNext}
          nextDisabled={data.businessTypes.length === 0 || !data.hasPool}
        />
      </StepCard>
    </div>
  );
}
