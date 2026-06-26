import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { StepCard } from "@/components/forms/StepCard";
import { NavFooter } from "@/components/forms/NavFooter";

interface FaqStepProps {
  onNext: () => void;
  onBack: () => void;
}

const FAQS = [
  {
    q: "What is a self-survey?",
    a: "A self-survey is a guided process that lets you document the condition of your property by answering questions and uploading photos from your own device.",
  },
  {
    q: "Is the self-survey required?",
    a: "It's the fastest, most convenient option. If you prefer, you can opt-out and request an in-person inspector visit.",
  },
  {
    q: "What is required to complete the self-survey?",
    a: "A smartphone, tablet, or computer with a camera; stable internet; and approximately 15-20 minutes to complete.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All submissions are encrypted in transit and stored securely in accordance with our privacy standards.",
  },
  {
    q: "What are the benefits of the self-survey?",
    a: "Faster turnaround, no need to schedule an inspector visit, and you complete it on your own time.",
  },
  {
    q: "What if I have a vacation home or rental property, and I'm not there to take the photos?",
    a: "A trusted representative, tenant, or property manager may complete the photos on your behalf.",
  },
  {
    q: "Can I have an inspector visit my home due to accessibility needs?",
    a: "Absolutely. You can opt-out at any time to request an in-person inspector accommodation.",
  },
];

export function FaqStep({ onNext, onBack }: FaqStepProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground">Property Insurance Self-Survey FAQs</h2>
      <p className="mt-2 text-muted-foreground">
        Review common questions before you begin. You can revisit this any time.
      </p>

      <StepCard className="mt-6 divide-y divide-border overflow-hidden">
        {FAQS.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-muted/50 min-h-[56px]"
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-medium text-foreground">{f.q}</span>
              <ChevronRight
                className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${open === i ? "rotate-90" : ""}`}
              />
            </button>
            {open === i && (
              <div
                id={`faq-answer-${i}`}
                className="px-5 pb-4 text-sm text-muted-foreground"
                role="region"
              >
                {f.a}
              </div>
            )}
          </div>
        ))}
      </StepCard>

      <div className="mt-6 p-5 rounded-xl bg-accent text-sm text-foreground/90">
        <p>
          If you have additional questions, please call <strong>210-531-USAA (8722)</strong>. Mobile
          shortcut <strong>#8722</strong> or text <strong>800-531-8722</strong>.
        </p>
        <p className="mt-2">
          Technical support: <strong>(Millenium technical phone #)</strong> · Email:{" "}
          <strong>(Millenium email address)</strong>
        </p>
      </div>

      <NavFooter onBack={onBack} onNext={onNext} nextLabel="Begin Survey" />
    </div>
  );
}
