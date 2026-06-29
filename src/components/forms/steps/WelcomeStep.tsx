import { Clock, CheckCircle2, Smartphone } from "lucide-react";

interface WelcomeStepProps {
  onStart: () => void;
  onOptOut: () => void;
  onHelp?: () => void;
}

const METRICS = [
  { icon: Clock, value: "15-20 Min", label: "Estimated Time" },
  { icon: CheckCircle2, value: "14 Questions", label: "Survey Steps" },
  { icon: Smartphone, value: "All Devices", label: "Compatible" },
] as const;

const CHECKLIST = [
  { title: "Walk Around Property", desc: "You'll need access to all sides of the exterior." },
  { title: "Utility Access", desc: "Locate your electrical panel, water heater, and HVAC." },
  { title: "Stable Internet", desc: "Required for uploading high-resolution photos securely." },
] as const;

export function WelcomeStep({ onStart, onOptOut, onHelp }: WelcomeStepProps) {
  return (
    <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 items-start">
      <div className="flex flex-col gap-6 sm:gap-8">
        <section>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary leading-tight tracking-tight">
            Welcome to Your Home Inspection
          </h1>
          <p className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
            This guided survey helps you document the condition of your property for insurance
            purposes. It's designed to be simple, clear, and secure.
          </p>
        </section>

        <div
          className="grid max-md:grid-cols-1 md:grid-cols-3 max-md:gap-3 md:gap-6 max-md:p-0 md:p-5 max-md:bg-transparent max-md:border-none max-md:shadow-none rounded-xl bg-card border border-border shadow-sm"
          role="list"
          aria-label="Survey overview"
        >
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 min-w-0 max-md:rounded-xl max-md:bg-card max-md:border max-md:border-border max-md:shadow-sm max-md:p-4"
              role="listitem"
            >
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-accent grid place-items-center shrink-0">
                <m.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" aria-hidden="true" />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <div className="font-bold text-foreground text-xs sm:text-base leading-tight">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight truncate">
                  {m.label}
                </div>
              </div>
              {i < METRICS.length - 1 && (
                <div
                  className="hidden sm:block w-px h-8 bg-border ml-auto shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-elevated border border-border p-6 sm:p-8">
        <h2 className="font-bold text-foreground text-lg">Before you start, make sure you have:</h2>
        <ul className="mt-4 space-y-4">
          {CHECKLIST.map((item) => (
            <li key={item.title} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-accent grid place-items-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 lg:col-start-1 lg:col-end-2 lg:row-start-2">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onStart}
            className="flex-1 min-h-[56px] rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover transition text-lg"
          >
            Start Self-Survey
          </button>
          <button
            onClick={onOptOut}
            className="flex-1 min-h-[56px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition"
          >
            Request Inspector Visit
          </button>
        </div>
        {onHelp && (
          <button
            onClick={onHelp}
            className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition self-center"
          >
            View frequently asked questions
          </button>
        )}
      </div>
    </div>
  );
}
