import { MessageCircle, Heart, CheckCircle2 } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { StepCard } from "@/components/forms/StepCard";
import { SupportCard } from "@/components/edgecases/SupportCard";
import { Link } from "react-router-dom";

export function FeedbackSubmitted() {
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
                <MessageCircle className="w-14 h-14 text-primary/60" />
                <Heart className="w-12 h-12 text-destructive/60" />
                <CheckCircle2 className="w-16 h-16 text-success" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight tracking-tight">
              Thank You for Your Feedback
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Your feedback has been submitted successfully.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              We appreciate your time and your comments help improve future inspection experiences.
            </p>
          </div>

          <StepCard className="p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
              Feedback Received
            </div>
            <div className="mt-1 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-success" />
              <span className="font-semibold text-foreground text-sm">
                Thank you for helping us improve.
              </span>
            </div>
          </StepCard>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="w-full min-h-[56px] rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover transition text-lg flex items-center justify-center"
            >
              Done
            </Link>
          </div>

          <SupportCard />
        </div>
      </div>
    </Shell>
  );
}
