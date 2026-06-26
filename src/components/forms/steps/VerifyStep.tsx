import type { SurveyData, SurveyUpdater } from "@/types/survey";

interface VerifyStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: () => void;
}

const FIELDS: [string, keyof SurveyData][] = [
  ["First Name", "firstName"],
  ["Last Name", "lastName"],
  ["Street", "street"],
  ["City", "city"],
  ["State", "state"],
  ["Zip", "zip"],
  ["Phone", "phone"],
];

export function VerifyStep({ data, update, onNext, onBack }: VerifyStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center">
        Verify your property information
      </h2>
      <p className="mt-2 text-muted-foreground text-center">
        Please confirm that this information is correct before proceeding.
      </p>

      {!data.editMode ? (
        <>
          <dl className="mt-4 space-y-2 text-sm sm:text-base">
            {FIELDS.map(([k, key]) => (
              <div
                key={k}
                className="grid grid-cols-[auto_1fr] sm:grid-cols-[140px_1fr] gap-x-2 sm:gap-x-4 gap-y-1"
              >
                <dt className="font-semibold text-foreground">{k}:</dt>
                <dd className="text-muted-foreground">{data[key] as string}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 text-center">
            <p className="font-bold text-foreground uppercase tracking-wide">
              Is this information correct?
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={() => update("editMode", true)}
                className="min-h-[48px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition"
              >
                No
              </button>
              <button
                onClick={onNext}
                className="min-h-[48px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition"
              >
                Yes
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          {FIELDS.map(([k, key]) => (
            <div key={k}>
              <label className="block text-sm font-medium text-foreground mb-1">{k}</label>
              <input
                className="w-full min-h-[44px] px-3 rounded-lg border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                value={data[key] as string}
                onChange={(e) => update(key, e.target.value as never)}
              />
            </div>
          ))}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onBack}
              className="flex-1 min-h-[48px] rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-muted transition"
            >
              Back
            </button>
            <button
              onClick={() => {
                update("editMode", false);
                onNext();
              }}
              className="flex-1 min-h-[48px] rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition"
            >
              Save & Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
