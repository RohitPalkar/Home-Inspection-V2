import { Home } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { YearPicker } from "@/components/forms/YearPicker";
import { Select } from "@/components/forms/Select";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import type { SurveyData, SurveyUpdater } from "@/types/survey";

interface InfrastructureStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
}

export function InfrastructureStep({ data, update, onNext, onBack }: InfrastructureStepProps) {
  const yearNum = parseInt(data.yearBuilt, 10);
  const isHistoric = !isNaN(yearNum) && yearNum < 1941;

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center">
            <Home className="w-5 h-5 text-primary" />
          </div>
          <SectionHeader section={SURVEY_SECTIONS.infrastructure} className="mb-0" />
        </div>

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
            <Select value={data.amperage} onChange={(e) => update("amperage", e.target.value)}>
              <option value="">Select capacity…</option>
              <option value="60">60 amp</option>
              <option value="100">100 amp</option>
              <option value="150">150 amp</option>
              <option value="200">200 amp</option>
              <option value="200+">200+ amp</option>
            </Select>
          </div>

          <div>
            <FieldLabel>Plumbing Material</FieldLabel>
            <Select
              value={data.plumbingMaterial}
              onChange={(e) => update("plumbingMaterial", e.target.value)}
            >
              <option value="">Select material…</option>
              <option>Copper</option>
              <option>PEX</option>
              <option>PVC</option>
              <option>Galvanized</option>
              <option>Polybutylene</option>
            </Select>
          </div>

          <div>
            <FieldLabel>Heating Fuel</FieldLabel>
            <Select
              value={data.heatingFuel}
              onChange={(e) => update("heatingFuel", e.target.value)}
            >
              <option value="">Select fuel…</option>
              <option>Natural Gas</option>
              <option>Electric</option>
              <option>Oil</option>
              <option>Propane</option>
              <option>Solar</option>
            </Select>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 accent-primary"
              checked={data.oilTankUnderground}
              onChange={(e) => update("oilTankUnderground", e.target.checked)}
            />
            <span className="text-sm text-foreground">Property has an underground oil tank</span>
          </label>

          {data.oilTankUnderground && (
            <div>
              <FieldLabel>New Jersey Environmental Compliance Details</FieldLabel>
              <textarea
                className="w-full min-h-[80px] p-3 rounded-lg border border-input bg-card text-sm"
                value={data.njCompliance}
                onChange={(e) => update("njCompliance", e.target.value)}
                placeholder="Describe tank capacity, age, inspection history…"
              />
            </div>
          )}
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.yearBuilt} />
      </StepCard>
    </div>
  );
}
