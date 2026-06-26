import { useState, useEffect } from "react";
import { Shell } from "@/components/layout/Shell";
import { HelpOverlay } from "@/components/common/HelpOverlay";
import { DefaultHelpBody } from "@/components/common/DefaultHelpBody";
import { WelcomeStep } from "@/components/forms/steps/WelcomeStep";
import { OptOutStep } from "@/components/forms/steps/OptOutStep";
import { OptOutConfirmed } from "@/components/forms/steps/OptOutConfirmed";
import { FaqStep } from "@/components/forms/steps/FaqStep";
import { VerifyStep } from "@/components/forms/steps/VerifyStep";
import { OccupancyStep } from "@/components/forms/steps/OccupancyStep";
import { InfrastructureStep } from "@/components/forms/steps/InfrastructureStep";
import { WiringStep } from "@/components/forms/steps/WiringStep";
import { PanelStep } from "@/components/forms/steps/PanelStep";
import { PropertyDetailsStep } from "@/components/forms/steps/PropertyDetailsStep";
import { BusinessStep } from "@/components/forms/steps/BusinessStep";
import { PhotosStep } from "@/components/forms/steps/PhotosStep";
import { ReviewStep } from "@/components/forms/steps/ReviewStep";
import { SuccessStep } from "@/components/forms/steps/SuccessStep";
import { initialData, PROGRESS } from "@/utils/constants";
import type { StepKey, SurveyData, HelpContent } from "@/types/survey";

export function SurveyApp() {
  const [step, setStep] = useState<StepKey>("welcome");
  const [data, setData] = useState<SurveyData>(initialData);
  const [help, setHelp] = useState<HelpContent | null>(null);
  const [, setHistory] = useState<StepKey[]>([]);

  const update = <K extends keyof SurveyData>(key: K, value: SurveyData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const goTo = (next: StepKey) => {
    setHistory((h) => [...h, step]);
    setStep(next);
  };

  const goBack = () => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setStep(prev);
      return h.slice(0, -1);
    });
  };

  const hasUnsavedChanges =
    step !== "welcome" && step !== "optout" && step !== "optout-confirmed" && step !== "success";

  useEffect(() => {
    if (!hasUnsavedChanges) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [hasUnsavedChanges]);

  const progress = PROGRESS[step] ?? null;
  const effectiveProgress = step === "verify" && data.editMode ? 5 : progress;

  return (
    <>
      <Shell
        onHelp={() => setHelp({ title: "Need Help?", body: <DefaultHelpBody /> })}
        onExit={() => goTo("optout")}
        showExit={
          step !== "welcome" &&
          step !== "optout" &&
          step !== "optout-confirmed" &&
          step !== "success"
        }
        progress={effectiveProgress}
      >
        {step === "welcome" && (
          <WelcomeStep onStart={() => goTo("faq")} onOptOut={() => goTo("optout")} />
        )}
        {step === "optout" && (
          <OptOutStep
            onConfirm={() => setStep("optout-confirmed")}
            onCancel={() => setStep("welcome")}
          />
        )}
        {step === "optout-confirmed" && <OptOutConfirmed onReturn={() => setStep("welcome")} />}
        {step === "faq" && <FaqStep onNext={() => goTo("verify")} onBack={goBack} />}
        {step === "verify" && (
          <VerifyStep
            data={data}
            update={update}
            onNext={() => goTo("occupancy")}
            onBack={goBack}
            onHelp={() => setHelp({ title: "Need Help?", body: <DefaultHelpBody /> })}
          />
        )}
        {step === "occupancy" && (
          <OccupancyStep
            data={data}
            update={update}
            onNext={() => goTo("infrastructure")}
            onBack={goBack}
            onHelp={(payload) => setHelp(payload)}
          />
        )}
        {step === "infrastructure" && (
          <InfrastructureStep
            data={data}
            update={update}
            onNext={() => goTo("wiring")}
            onBack={goBack}
          />
        )}
        {step === "wiring" && (
          <WiringStep
            data={data}
            update={update}
            onNext={() => goTo("panel")}
            onBack={goBack}
            onHelp={(p) => setHelp(p)}
          />
        )}
        {step === "panel" && (
          <PanelStep
            data={data}
            update={update}
            onNext={() => goTo("property-details")}
            onBack={goBack}
            onHelp={(p) => setHelp(p)}
          />
        )}
        {step === "property-details" && (
          <PropertyDetailsStep
            data={data}
            update={update}
            onNext={() => goTo("business")}
            onBack={goBack}
          />
        )}
        {step === "business" && (
          <BusinessStep data={data} update={update} onNext={() => goTo("photos")} onBack={goBack} />
        )}
        {step === "photos" && (
          <PhotosStep data={data} update={update} onNext={() => goTo("review")} onBack={goBack} />
        )}
        {step === "review" && (
          <ReviewStep
            data={data}
            onSubmit={() => goTo("success")}
            onBack={goBack}
            onEdit={(s) => setStep(s)}
          />
        )}
        {step === "success" && <SuccessStep />}
      </Shell>

      <HelpOverlay
        open={!!help}
        onClose={() => setHelp(null)}
        title={help?.title ?? ""}
        wide={help?.wide}
      >
        {help?.body}
      </HelpOverlay>
    </>
  );
}
