import { ShieldCheck, Home, CheckCircle2 } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { StepCard } from "@/components/forms/StepCard";
import { SupportCard } from "@/components/edgecases/SupportCard";
import { Link } from "react-router-dom";

export function SurveyCompleted() {
  return (
    <Shell>
      <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-2xl bg-accent/30 border border-border flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="w-64 h-64 rounded-full border-[3px] border-primary absolute -top-10 -right-10" />
                <div className="w-48 h-48 rounded-full border-[3px] border-primary absolute -bottom-8 -left-8" />
              </div>
              <div className="flex items-center gap-4">
                <Home className="w-14 h-14 text-primary/50" />
                <ShieldCheck className="w-12 h-12 text-primary/60" />
                <CheckCircle2 className="w-16 h-16 text-success" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight tracking-tight">
              Inspection Successfully Submitted
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Your home inspection has already been completed and submitted successfully.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">No further action is required.</p>
          </div>

          <StepCard className="p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Inspection Status
            </div>
            <div className="mt-1 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span className="font-bold text-foreground text-lg">Completed</span>
            </div>
            <div className="mt-1 text-sm text-success font-medium">Submitted Successfully</div>
          </StepCard>

          <div className="flex flex-col gap-3">
            <button className="w-full min-h-[56px] rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover transition text-lg">
              View Submission Summary
            </button>
            <Link
              to="/"
              className="w-full min-h-[56px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition flex items-center justify-center"
            >
              Close
            </Link>
          </div>

          <SupportCard />
        </div>
      </div>
    </Shell>
  );
}
