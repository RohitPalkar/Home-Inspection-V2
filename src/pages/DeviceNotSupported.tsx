import { Monitor, ArrowDown, Smartphone, Tablet, Copy, Send, CheckCircle2 } from "lucide-react";
import { Shell } from "@/components/layout/Shell";
import { StepCard } from "@/components/forms/StepCard";
import { SupportCard } from "@/components/edgecases/SupportCard";
import { useState } from "react";

const SUPPORTED_DEVICES = ["iPhone", "Android Phone", "iPad", "Android Tablet"] as const;

export function DeviceNotSupported() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API not available
    }
  };

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
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <Monitor className="w-14 h-14 text-primary/40" />
                  <ArrowDown className="w-6 h-6 text-primary/60" />
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-primary/70" />
                  <Tablet className="w-10 h-10 text-primary/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary leading-tight tracking-tight">
              This Device Isn't Supported
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              To complete your home inspection, please open this inspection on a supported mobile
              phone or tablet.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Photo capture and location verification are unavailable on this device.
            </p>
          </div>

          <StepCard className="p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-3">
              Supported Devices
            </div>
            <ul className="space-y-2">
              {SUPPORTED_DEVICES.map((device) => (
                <li key={device} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  <span className="text-sm font-medium text-foreground">{device}</span>
                </li>
              ))}
            </ul>
          </StepCard>

          <div className="flex flex-col gap-3">
            <button className="w-full min-h-[56px] rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary-hover transition text-lg inline-flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send Link to My Phone
            </button>
            <button
              onClick={handleCopy}
              className="w-full min-h-[56px] rounded-xl border-2 border-border bg-card text-foreground font-semibold hover:bg-muted transition inline-flex items-center justify-center gap-2"
            >
              {copied ? (
                <>Link Copied</>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  Copy Inspection Link
                </>
              )}
            </button>
          </div>

          <SupportCard />
        </div>
      </div>
    </Shell>
  );
}
