import { useState, useEffect, useRef, useCallback } from "react";
import { ShieldCheck, CheckCircle2, RotateCcw, Home } from "lucide-react";

/* ───────────────────────────────────────────
   Constants
   ─────────────────────────────────────────── */

const APP_LOGO = "/logo.svg";
const APP_NAME = "Home Inspection";

const STATUS_MESSAGES = [
  "Preparing your inspection...",
  "Loading your inspection details...",
  "Getting everything ready...",
  "Almost ready...",
  "Please wait...",
] as const;

const HELPFUL_TIPS = [
  "You'll be guided through each step of the inspection.",
  "Photo guidance will be available whenever it's needed.",
  "You can review and edit your answers before submitting.",
  "Take photos in a well-lit area for the best results.",
  "The inspection can be completed at your own pace.",
] as const;

const LOADING_DURATION_MS = 4500;
const TICK_INTERVAL_MS = 40;
const STATUS_INTERVAL_MS = 2500;
const TIP_INTERVAL_MS = 5000;
const SUCCESS_HOLD_MS = 1200;

/* ───────────────────────────────────────────
   Types
   ─────────────────────────────────────────── */

type Phase = "loading" | "success" | "error";

interface LoadingScreenProps {
  onComplete: () => void;
}

function ProgressBar({ value, phase }: { value: number; phase: Phase }) {
  const rm =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div
      className="relative w-full h-2.5 rounded-full bg-muted overflow-hidden"
      role="progressbar"
      aria-valuenow={phase === "success" ? 100 : Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress ${phase === "success" ? 100 : Math.round(value)}%`}
    >
      <div
        className="h-full rounded-full transition-all duration-300 ease-out relative"
        style={{
          width: `${phase === "success" ? 100 : value}%`,
          background:
            phase === "success"
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

function LogoArea() {
  const [err, setErr] = useState(false);
  return (
    <div className="flex justify-center" aria-label="Application logo">
      <div className="h-12 md:h-14 w-auto flex items-center justify-center">
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
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            onError={() => setErr(true)}
          />
        )}
      </div>
    </div>
  );
}

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

function TipCard({ index }: { index: number }) {
  return (
    <div
      className="relative bg-card border border-border rounded-xl p-4 shadow-card min-h-[80px]"
      aria-live="polite"
      aria-atomic="true"
    >
      {HELPFUL_TIPS.map((tip, i) => (
        <div
          key={tip}
          className={`transition-all duration-500 ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-95 absolute inset-0 p-4 pointer-events-none"}`}
          aria-hidden={i !== index}
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            Tip
          </p>
          <p className="text-sm text-foreground">{tip}</p>
        </div>
      ))}
    </div>
  );
}

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
      <p className="text-xl font-bold text-foreground">Ready!</p>
    </div>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="w-16 h-16 rounded-full bg-destructive/10 grid place-items-center">
        <div className="w-8 h-0.5 rounded-full bg-destructive rotate-45" aria-hidden="true" />
      </div>
      <div>
        <p className="text-lg font-bold text-foreground">
          We couldn&apos;t prepare your inspection.
        </p>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Please check your connection and try again.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <button
          ref={ref}
          onClick={onRetry}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <RotateCcw className="w-4 h-4" aria-hidden="true" /> Retry
        </button>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Home className="w-4 h-4" aria-hidden="true" /> Exit
        </button>
      </div>
    </div>
  );
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  const mountedRef = useRef(true);
  const cbRef = useRef(onComplete);
  cbRef.current = onComplete;

  useEffect(() => {
    if (phase !== "loading") return;
    const total = Math.floor(LOADING_DURATION_MS / TICK_INTERVAL_MS);
    let tick = 0;
    const timer = setInterval(() => {
      tick++;
      const raw = (tick / total) * 100;
      const eased = 100 * (1 - Math.pow(1 - raw / 100, 1.5));
      setProgress(Math.min(eased, 99.5));
      if (tick >= total) {
        clearInterval(timer);
        setProgress(100);
        setPhase("success");
        setTimeout(() => {
          if (mountedRef.current) cbRef.current();
        }, SUCCESS_HOLD_MS);
      }
    }, TICK_INTERVAL_MS);
    return () => {
      clearInterval(timer);
      mountedRef.current = false;
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
    <div className="min-h-screen flex flex-col bg-background">
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
            <div className="w-20 h-20 rounded-2xl bg-primary/10 grid place-items-center">
              <ShieldCheck className="w-10 h-10 text-primary" aria-hidden="true" />
            </div>
          )}

          {phase === "loading" && (
            <div className="text-center space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Preparing Your Inspection
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Please wait while we prepare your inspection experience. This usually takes just a
                few seconds.
              </p>
            </div>
          )}

          {phase !== "error" && (
            <div className="w-full space-y-4">
              <ProgressBar value={progress} phase={phase} />
              {phase === "loading" && <StatusMessage index={statusIndex} />}
            </div>
          )}

          {phase === "success" && <SuccessAnimation />}
          {phase === "error" && <ErrorState onRetry={handleRetry} />}

          {phase === "loading" && (
            <div className="w-full">
              <TipCard index={tipIndex} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
