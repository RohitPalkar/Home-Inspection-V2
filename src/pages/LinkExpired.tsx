import { FileX2, Link2, Clock } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { StepCard } from "@/components/forms/StepCard";
import { SupportCard } from "@/components/edgecases/SupportCard";

export function LinkExpired() {
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
                <div className="relative">
                  <FileX2 className="w-16 h-16 text-primary/60" />
                  <Link2 className="w-6 h-6 text-destructive absolute -top-2 -right-3" />
                </div>
                <Clock className="w-10 h-10 text-muted-foreground/40" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight tracking-tight">
              This Inspection Link Has Expired
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              This inspection link is no longer active.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Please contact your insurance representative to request a new inspection invitation.
            </p>
          </div>

          <StepCard className="p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Inspection Status
            </div>
            <div className="mt-1 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <span className="font-bold text-foreground text-lg">Expired</span>
            </div>
          </StepCard>

          <div className="flex flex-col gap-3">
            <button className="w-full min-h-[56px] rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover transition text-lg">
              Request New Link
            </button>
            <button className="w-full min-h-[56px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition">
              Contact Support
            </button>
          </div>

          <SupportCard />
        </div>
      </div>
    </Shell>
  );
}
