import { Lightbulb } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { NavFooter } from "@/components/forms/NavFooter";
import { FileDropZone } from "@/components/forms/FileDropZone";
import type { SurveyData, SurveyUpdater } from "@/types/survey";

interface PhotosStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
}

export function PhotosStep({ data, update, onNext, onBack }: PhotosStepProps) {
  const required: { key: string; label: string }[] = [
    { key: "exterior", label: "Exterior — All four sides of the home" },
    { key: "roof", label: "Roof Overview Photo" },
  ];
  if (data.businessTypes.some((b) => b !== "None"))
    required.push({ key: "business", label: "Business Spaces Photo" });
  if (data.hasPool === "yes")
    required.push({ key: "pool", label: "Swimming Pool Safety & Enclosure Photo" });
  required.push({ key: "fireplace", label: "Fireplace / Hearth Venting System Photo" });
  required.push({ key: "outbuilding", label: "Detached Outbuildings Photo Check" });

  const setUploads = (key: string, files: File[]) => {
    update("uploads", { ...data.uploads, [key]: files });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="rounded-lg bg-warning/15 border border-warning/40 p-4 flex gap-3 mb-6">
        <Lightbulb className="w-5 h-5 text-warning shrink-0 mt-0.5" />
        <div className="text-sm text-foreground">
          <strong>Important:</strong> Uploaded photos must be current daylight captures of your
          actual property. Screenshots from websites or appraisal documents are not acceptable.
        </div>
      </div>

      <StepCard className="p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Photo Upload Checklist</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Based on your responses, please upload photos for each item below.
        </p>

        <div className="mt-6 space-y-6">
          {required.map((r) => (
            <div key={r.key}>
              <FieldLabel required>{r.label}</FieldLabel>
              <FileDropZone
                files={data.uploads[r.key] ?? []}
                onChange={(files) => setUploads(r.key, files)}
              />
            </div>
          ))}
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextLabel="Review Submission" />
      </StepCard>
    </div>
  );
}
