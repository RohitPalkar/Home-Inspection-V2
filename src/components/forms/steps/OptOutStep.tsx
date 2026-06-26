import { StepCard } from "@/components/forms/StepCard";

interface OptOutStepProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function OptOutStep({ onConfirm, onCancel }: OptOutStepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          You've chosen to opt-out of the self-survey
        </h2>
        <p className="mt-4 text-muted-foreground">
          Choosing to opt-out means that an inspector will need to visit your home to complete the
          inspection.
        </p>
        <h3 className="mt-8 text-xl font-semibold text-foreground">
          Are you sure that you want to opt-out?
        </h3>
        <div className="mt-8 space-y-3">
          <button
            onClick={onConfirm}
            className="w-full min-h-[56px] rounded-xl bg-accent border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition"
          >
            Yes, I want to Opt-Out.
          </button>
          <button
            onClick={onCancel}
            className="w-full min-h-[56px] rounded-xl bg-accent border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition"
          >
            No, show me my self-survey!
          </button>
        </div>
      </StepCard>
    </div>
  );
}
