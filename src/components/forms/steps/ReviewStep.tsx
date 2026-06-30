import { useState, useCallback } from "react";
import { Edit3 } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { PrimaryButton } from "@/components/forms/PrimaryButton";
import { OutlineButton } from "@/components/forms/OutlineButton";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import type { SurveyData, StepKey } from "@/types/survey";

interface ReviewStepProps {
  data: SurveyData;
  onSubmit: () => void;
  onBack: () => void;
  onEdit: (s: StepKey) => void;
}

export function ReviewStep({ data, onSubmit, onBack, onEdit }: ReviewStepProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    onSubmit();
  }, [onSubmit]);

  const sections: { key: StepKey; title: string; items: [string, string][] }[] = [
    {
      key: "verify",
      title: "Property Information",
      items: [
        ["Name", `${data.firstName} ${data.lastName}`],
        ["Address", `${data.street}, ${data.city}, ${data.state} ${data.zip}`],
        ["Phone", data.phone],
      ],
    },
    { key: "occupancy", title: "Occupancy", items: [["Type", data.occupancy]] },
    {
      key: "infrastructure",
      title: "Infrastructure",
      items: [
        ["Year Built", data.yearBuilt],
        ["Amperage", data.amperage || "Not specified"],
        ["Plumbing", data.plumbingMaterial || "Not specified"],
        ["Heating", data.heatingFuel || "Not specified"],
      ],
    },
    { key: "wiring", title: "Wiring", items: [["Types", data.wiring.join(", ")]] },
    { key: "panel", title: "Electrical Panel", items: [["Type", data.panel]] },
    {
      key: "property-details",
      title: "Property Details",
      items: [
        ["Roof Age", data.roofAge],
        ["Home Year", data.homeYearSelect],
        ["Basement", data.basement],
      ],
    },
    {
      key: "business",
      title: "Business & Hazards",
      items: [
        ["Business Types", data.businessTypes.join(", ")],
        ["Has Pool", data.hasPool],
      ],
    },
    {
      key: "photos",
      title: "Photos",
      items: Object.entries(data.uploads).map(
        ([k, v]) => [k, `${v.length} file(s)`] as [string, string],
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <SectionHeader section={SURVEY_SECTIONS.review} />

      <div className="mt-6 space-y-4">
        {sections.map((s) => (
          <StepCard key={s.key} className="p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-foreground">{s.title}</h3>
              <button
                onClick={() => onEdit(s.key)}
                className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
              >
                <Edit3 className="w-4 h-4" /> Edit
              </button>
            </div>
            <dl className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {s.items.length === 0 ? (
                <div className="text-muted-foreground">No data captured.</div>
              ) : (
                s.items.map(([k, v]) => (
                  <div key={k} className="flex gap-2">
                    <dt className="text-muted-foreground">{k}:</dt>
                    <dd className="font-medium text-foreground break-words">{v}</dd>
                  </div>
                ))
              )}
            </dl>
          </StepCard>
        ))}
      </div>

      <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
        <OutlineButton onClick={onBack} className="w-full sm:w-auto">
          Previous
        </OutlineButton>
        <PrimaryButton onClick={handleSubmit} disabled={submitting} className="w-full sm:w-auto">
          {submitting ? "Submitting..." : "Submit Self-Survey"}
        </PrimaryButton>
      </div>
    </div>
  );
}
