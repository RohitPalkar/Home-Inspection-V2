import { useState, useEffect, useRef, useCallback } from "react";
import { ShieldCheck, CheckCircle2, RotateCcw, Home } from "lucide-react";

/* ───────────────────────────────────────────
   Constants
   ─────────────────────────────────────────── */

const APP_LOGO = "/images/Waiting Screen/logo.jpg";
const APP_NAME = "Home Inspection";

const STATUS_MESSAGES = [
  "Preparing your inspection...",
  "Loading your inspection details...",
  "Getting everything ready...",
  "Almost ready...",
  "Finalizing your experience...",
] as const;

interface Tip {
  title: string;
  description: string;
}

const HELPFUL_TIPS: Tip[] = [
  {
    title: "Take photos in good lighting.",
    description: "Natural daylight helps produce clearer images.",
  },
  {
    title: "Answer each question carefully.",
    description: "Providing accurate information helps speed up the review.",
  },
  {
    title: "Review before submitting.",
    description: "You'll be able to edit your answers before submission.",
  },
  {
    title: "Have your phone ready.",
    description: "Some questions will ask you to capture photos.",
  },
  {
    title: "Take your time.",
    description: "Complete the inspection at your own pace.",
  },
];

const LOADING_DURATION_MS = 6500;
const TICK_INTERVAL_MS = 40;
const STATUS_INTERVAL_MS = 2500;
const TIP_INTERVAL_MS = 4500;
const SUCCESS_HOLD_MS = 1000;
const LEAVING_FADE_MS = 400;

/* ───────────────────────────────────────────
   Types
   ─────────────────────────────────────────── */

type Phase = "loading" | "success" | "leaving" | "error";

interface LoadingScreenProps {
  onComplete: () => void;
}

/* ───────────────────────────────────────────
   Progress Bar
   ─────────────────────────────────────────── */

function ProgressBar({ value, phase }: { value: number; phase: Phase }) {
  const rm =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isComplete = phase === "success" || phase === "leaving";
  return (
    <div
      className="relative w-full h-2.5 rounded-full bg-muted overflow-hidden"
      role="progressbar"
      aria-valuenow={isComplete ? 100 : Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading progress"
    >
      <div
        className="h-full rounded-full transition-all duration-300 ease-out relative"
        style={{
          width: `${isComplete ? 100 : value}%`,
          background: isComplete
            ? "var(--color-success)"
            : "linear-gradient(90deg, var(--color-primary), var(--color-primary-hover))",
        }}
      >
        {phase === "loading" && !rm && (
          <div className="absolute inset-0 rounded-full overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 shimmer-slide" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   Logo
   ─────────────────────────────────────────── */

function LogoArea() {
  const [err, setErr] = useState(false);
  return (
    <div className="flex justify-center" aria-label="Application logo">
      <div className="h-12 sm:h-[52px] md:h-[56px] w-auto flex items-center justify-center">
        {err ? (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary grid place-items-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="font-bold text-lg text-foreground">{APP_NAME}</span>
          </div>
        ) : (
          <img
            src={APP_LOGO}
            alt="Application Logo"
            className="h-12 sm:h-[52px] md:h-[56px] w-auto object-contain"
            onError={() => setErr(true)}
          />
        )}
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────
   Status Messages
   ─────────────────────────────────────────── */

function StatusMessage({ index }: { index: number }) {
  return (
    <div className="relative h-6" aria-live="polite" aria-atomic="true">
      {STATUS_MESSAGES.map((msg, i) => (
        <p
          key={msg}
          className={`absolute inset-0 flex items-center justify-center text-sm text-muted-foreground transition-all duration-500 ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          aria-hidden={i !== index}
        >
          {msg}
        </p>
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────
   Tip Card
   ─────────────────────────────────────────── */

function TipCard({ index }: { index: number }) {
  return (
    <div
      className="relative bg-card border border-border rounded-xl p-4 shadow-card min-h-[88px]"
      aria-live="polite"
      aria-atomic="true"
    >
      {HELPFUL_TIPS.map((tip, i) => (
        <div
          key={tip.title}
          className={`transition-all duration-500 ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 p-4 pointer-events-none"}`}
          aria-hidden={i !== index}
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            Tip
          </p>
          <p className="text-sm font-medium text-foreground">{tip.title}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{tip.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────
   Success Animation
   ─────────────────────────────────────────── */

function SuccessAnimation() {
  const rm =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`w-16 h-16 rounded-full bg-success/15 grid place-items-center ${rm ? "" : "animate-success-check"}`}
      >
        <CheckCircle2 className="w-8 h-8 text-success" aria-hidden="true" />
      </div>
      <p className="text-xl font-bold text-foreground">You&apos;re All Set</p>
      <p className="text-sm text-muted-foreground">
        Your inspection is ready. We&apos;ll take you to the next step automatically.
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────
   Error State
   ─────────────────────────────────────────── */

function ErrorState({ onRetry }: { onRetry: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-primary/5 grid place-items-center overflow-hidden">
        <img
          src="/images/Waiting Screen/Illustration.png"
          alt=""
          className="w-full h-full object-contain"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            t.parentElement?.classList.add("hidden");
          }}
        />
      </div>
      <div>
        <p className="text-lg font-bold text-foreground">
          We&apos;re having trouble preparing your inspection.
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          We couldn&apos;t prepare your inspection at this time.
          <br />
          Please try again.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <button
          ref={ref}
          onClick={onRetry}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" /> Try Again
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Home className="w-4 h-4" aria-hidden="true" /> Exit Inspection
        </button>
      </div>
      <p className="text-xs text-muted-foreground">No information has been submitted yet.</p>
    </div>
  );
}

/* ───────────────────────────────────────────
   Loading Screen
   ─────────────────────────────────────────── */

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  const cbRef = useRef(onComplete);
  const attemptRef = useRef(0);
  cbRef.current = onComplete;

  useEffect(() => {
    if (phase !== "loading") return;
    attemptRef.current += 1;
    const isFirstAttempt = attemptRef.current === 1;
    const total = Math.floor(LOADING_DURATION_MS / TICK_INTERVAL_MS);
    let tick = 0;
    const timer = setInterval(() => {
      tick++;
      const raw = (tick / total) * 100;
      const eased = 100 * (1 - Math.pow(1 - raw / 100, 1.5));
      setProgress(Math.min(eased, 99.5));
      if (tick >= total) {
        clearInterval(timer);
        if (isFirstAttempt) {
          setProgress(99.5);
          setPhase("error");
        } else {
          setProgress(100);
          setPhase("success");
          setTimeout(() => {
            setPhase("leaving");
            setTimeout(() => {
              cbRef.current();
            }, LEAVING_FADE_MS);
          }, SUCCESS_HOLD_MS);
        }
      }
    }, TICK_INTERVAL_MS);
    return () => {
      clearInterval(timer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "loading") return;
    const t = setInterval(
      () => setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length),
      STATUS_INTERVAL_MS,
    );
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "loading") return;
    const t = setInterval(() => setTipIndex((i) => (i + 1) % HELPFUL_TIPS.length), TIP_INTERVAL_MS);
    return () => clearInterval(t);
  }, [phase]);

  const handleRetry = useCallback(() => {
    setPhase("loading");
    setProgress(0);
    setStatusIndex(0);
    setTipIndex(0);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col bg-background transition-opacity duration-500 ${phase === "leaving" ? "opacity-0" : "opacity-100"}`}
    >
      <a
        href="#loading-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to loading content
      </a>

      <header
        className="pt-8 sm:pt-12 pb-4"
        style={{ paddingTop: "calc(2rem + var(--safe-area-top))" }}
      >
        <LogoArea />
      </header>

      <main
        id="loading-content"
        className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6"
        style={{ paddingBottom: "calc(2rem + var(--safe-area-bottom))" }}
      >
        <div className="w-full max-w-md mx-auto flex flex-col items-center gap-8 sm:gap-10">
          {phase !== "error" && (
            <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] rounded-2xl bg-primary/5 grid place-items-center overflow-hidden">
              <img
                src="/images/Waiting Screen/Illustration.png"
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  t.parentElement?.classList.add("hidden");
                }}
              />
            </div>
          )}

          {phase === "loading" && (
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Preparing Your Home Inspection
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
                We&apos;re getting everything ready for your inspection.
                <br />
                This usually takes just a few seconds.
              </p>
            </div>
          )}

          {phase !== "error" && (
            <div className="w-full space-y-4">
              <ProgressBar value={progress} phase={phase} />
              {phase === "loading" && <StatusMessage index={statusIndex} />}
            </div>
          )}

          {(phase === "success" || phase === "leaving") && <SuccessAnimation />}
          {phase === "error" && <ErrorState onRetry={handleRetry} />}

          {phase === "loading" && (
            <div className="w-full">
              <TipCard index={tipIndex} />
            </div>
          )}

          <div className="flex items-start justify-center gap-2.5 text-muted-foreground">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm text-center leading-relaxed">
              <p className="font-semibold text-foreground">Your information is protected</p>
              <p>
                Your responses and photos are securely handled throughout the inspection process.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
