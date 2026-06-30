import { Lightbulb } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { FieldLabel } from "@/components/forms/FieldLabel";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { FileDropZone } from "@/components/forms/FileDropZone";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { PhotoGuidanceDialog } from "@/components/forms/PhotoGuidanceDialog";
import { SURVEY_SECTIONS, PHOTO_REQUIREMENTS, CONDITIONAL_PHOTO_REQUIREMENTS } from "@/config/survey";
import { PHOTO_GUIDANCE } from "@/config/help";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";
import type { PhotoRequirement } from "@/config/survey";

interface PhotosStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp?: (c: HelpContent) => void;
}

export function PhotosStep({ data, update, onNext, onBack, onHelp }: PhotosStepProps) {
  const setUploads = (key: string, files: File[]) => {
    update("uploads", { ...data.uploads, [key]: files });
  };

  const openGuidance = (guidanceKey: string) => {
    const entry = PHOTO_GUIDANCE[guidanceKey];
    if (!entry || !onHelp) return;
    onHelp({
      title: entry.title,
      body: <PhotoGuidanceDialog entry={entry} />,
    });
  };

  const requirements: PhotoRequirement[] = [
    ...PHOTO_REQUIREMENTS,
    ...CONDITIONAL_PHOTO_REQUIREMENTS.fireplace,
    ...CONDITIONAL_PHOTO_REQUIREMENTS.garage,
    ...CONDITIONAL_PHOTO_REQUIREMENTS.structures,
  ];
  if (data.hasPool === "yes") {
    requirements.push(...CONDITIONAL_PHOTO_REQUIREMENTS.pool);
  }

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
        <SectionHeader section={SURVEY_SECTIONS.photos} />

        <div className="mt-6 space-y-6">
          {requirements.map((r) => (
            <div key={r.key}>
              <FieldLabel required>{r.label}</FieldLabel>
              <FileDropZone
                files={data.uploads[r.key] ?? []}
                onChange={(files) => setUploads(r.key, files)}
              />
              {onHelp && (
                <div className="mt-1.5">
                  <HelpLink
                    label="How should I take this photo?"
                    onClick={() => openGuidance(r.guidanceKey)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextLabel="Review Submission" />
      </StepCard>
    </div>
  );
}
