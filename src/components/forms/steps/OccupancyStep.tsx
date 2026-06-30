import { DoorOpen } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface OccupancyStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

export function OccupancyStep({ data, update, onNext, onBack, onHelp }: OccupancyStepProps) {
  const openDefs = () =>
    onHelp({
      title: "Occupancy Definitions",
      body: (
        <div className="space-y-4">
          <p>
            <strong>Owner Occupied</strong> — Choose this option if the home is currently furnished
            or occupied, or if it WILL BE furnished or occupied within 90 days of the policy issue
            date.
          </p>
          <p>
            <strong>Rental - Tenant Occupied</strong> — Choose this option if the home is a rental
            property that is currently occupied by a tenant, or will be tenant-occupied within 90
            days of the policy issue date.
          </p>
          <p>
            <strong>Vacant</strong> — Choose this option if the home is currently unfurnished or
            unoccupied, and WILL NOT be furnished or occupied within 90 days of the policy issue
            date.
          </p>
        </div>
      ),
    });

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent grid place-items-center">
            <DoorOpen className="w-5 h-5 text-primary" />
          </div>
          <SectionHeader section={SURVEY_SECTIONS.occupancy} className="mb-0" />
        </div>

        <div className="mt-6 space-y-3">
          <RadioRow
            label="Owner occupied"
            checked={data.occupancy === "owner"}
            onClick={() => update("occupancy", "owner")}
          />
          <RadioRow
            label="Rental - tenant occupied"
            checked={data.occupancy === "rental"}
            onClick={() => update("occupancy", "rental")}
          />
          <RadioRow
            label="Vacant"
            checked={data.occupancy === "vacant"}
            onClick={() => update("occupancy", "vacant")}
          />
        </div>

        <div className="mt-4 text-center">
          <HelpLink label="What are the different occupancy types?" onClick={openDefs} />
        </div>

        {data.occupancy === "owner" && (
          <div className="mt-6 space-y-5 border-t border-border pt-5">
            <div>
              <p className="font-semibold text-foreground mb-3">Is the dwelling occupied:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <RadioRow
                  label="Full-time"
                  checked={data.ownerOccupiedType === "fulltime"}
                  onClick={() => update("ownerOccupiedType", "fulltime")}
                />
                <RadioRow
                  label="Secondary or Vacation"
                  checked={data.ownerOccupiedType === "secondary"}
                  onClick={() => update("ownerOccupiedType", "secondary")}
                />
              </div>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">
                Are you renting out any portion of the dwelling?
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <RadioRow
                  label="Yes"
                  checked={data.ownerRentsPortion === "yes"}
                  onClick={() => update("ownerRentsPortion", "yes")}
                />
                <RadioRow
                  label="No"
                  checked={data.ownerRentsPortion === "no"}
                  onClick={() => update("ownerRentsPortion", "no")}
                />
              </div>
            </div>
          </div>
        )}

        {data.occupancy === "rental" && (
          <div className="mt-6 border-t border-border pt-5">
            <p className="font-semibold text-foreground mb-3">This tenant occupied rental is a:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <RadioRow
                label="Standard Rental"
                checked={data.rentalType === "standard"}
                onClick={() => update("rentalType", "standard")}
              />
              <RadioRow
                label="Short Term Rental"
                checked={data.rentalType === "shortterm"}
                onClick={() => update("rentalType", "shortterm")}
              />
            </div>
          </div>
        )}

        {data.occupancy === "vacant" && (
          <div className="mt-6 border-t border-border pt-5">
            <p className="font-semibold text-foreground mb-3">
              Is the dwelling currently furnished or occupied?
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <RadioRow
                label="Yes"
                checked={data.vacantFurnished === "yes"}
                onClick={() => update("vacantFurnished", "yes")}
              />
              <RadioRow
                label="No"
                checked={data.vacantFurnished === "no"}
                onClick={() => update("vacantFurnished", "no")}
              />
            </div>
          </div>
        )}

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={!data.occupancy} />
      </StepCard>
    </div>
  );
}
