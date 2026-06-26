import { CheckCircle2 } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";
import { OutlineButton } from "@/components/forms/OutlineButton";

interface OptOutConfirmedProps {
  onReturn: () => void;
}

export function OptOutConfirmed({ onReturn }: OptOutConfirmedProps) {
  return (
    <div className="max-w-xl mx-auto">
      <StepCard className="p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-success/15 grid place-items-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-success" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-foreground">Inspector Visit Requested</h2>
        <p className="mt-3 text-muted-foreground">
          We've recorded your preference. An inspector will contact you within 3-5 business days to
          schedule a visit to your home.
        </p>
        <OutlineButton onClick={onReturn} className="mt-6">
          Return to Welcome
        </OutlineButton>
      </StepCard>
    </div>
  );
}
