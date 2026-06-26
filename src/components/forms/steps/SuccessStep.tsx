import { useMemo } from "react";
import { CheckCircle2, Wifi } from "lucide-react";
import { StepCard } from "@/components/forms/StepCard";

export function SuccessStep() {
  const ticket = useMemo(
    () =>
      "PIS-" +
      Math.random().toString(36).slice(2, 8).toUpperCase() +
      "-" +
      Date.now().toString().slice(-4),
    [],
  );
  return (
    <div className="max-w-xl mx-auto">
      <StepCard className="p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-success/15 grid place-items-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-success" />
        </div>
        <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-foreground">Congratulations!</h2>
        <p className="mt-3 text-muted-foreground">
          This page confirms that you have successfully completed your Self-Survey.
        </p>
        <div className="mt-6 p-4 rounded-lg bg-muted">
          <div className="text-xs text-muted-foreground uppercase tracking-wide">
            Confirmation Number
          </div>
          <div className="mt-1 font-mono text-lg font-bold text-foreground">{ticket}</div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Wifi className="w-4 h-4" />A confirmation email has been sent to the address on file.
        </p>
      </StepCard>
    </div>
  );
}
