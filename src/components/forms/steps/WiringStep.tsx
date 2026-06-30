import { StepCard } from "@/components/forms/StepCard";
import { CheckRow } from "@/components/forms/CheckRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { NavFooter } from "@/components/forms/NavFooter";
import { SectionHeader } from "@/components/forms/SectionHeader";
import { SURVEY_SECTIONS } from "@/config/survey";
import { WIRING_OPTIONS } from "@/utils/constants";
import type { SurveyData, SurveyUpdater, HelpContent } from "@/types/survey";

interface WiringStepProps {
  data: SurveyData;
  update: SurveyUpdater;
  onNext: () => void;
  onBack: () => void;
  onHelp: (p: HelpContent) => void;
}

export function WiringStep({ data, update, onNext, onBack, onHelp }: WiringStepProps) {
  const toggle = (opt: string) => {
    const set = new Set(data.wiring);
    if (set.has(opt)) set.delete(opt);
    else set.add(opt);
    update("wiring", Array.from(set));
  };

  const openDefs = () =>
    onHelp({
      title: "Wiring Examples",
      wide: true,
      body: (
        <div className="space-y-5">
          <p className="text-muted-foreground">
            The wiring in your home is primarily located inside the walls and hidden from view. It
            is often visible in unfinished areas such as a garage or basement. If you are unable to
            visibly verify the wiring type, please select "Unknown".
          </p>
          {[
            {
              title: "Romex wiring",
              desc: "The most common wiring type in modern homes. Identified by its rubber outer casing which could be white, grey, black or yellow.",
            },
            {
              title: "Knob & Tube wiring",
              desc: "Commonly used in homes built from 1900-1940. Identified by white ceramic 'knobs' and 'tubes' used to secure it in place.",
            },
            {
              title: "Aluminum wiring",
              desc: "Commonly used in homes built from 1960-1979. Similar in appearance to Romex but typically stamped with 'ALUMINUM', 'ALCAN', or 'AL/2'.",
            },
            {
              title: "Conduit",
              desc: "In common use in modern homes. Identified by its solid metal casing.",
            },
            {
              title: "BX wiring",
              desc: "In common use in modern homes. Identified by its flexible metal casing.",
            },
          ].map((w) => (
            <div key={w.title} className="space-y-2">
              <h4 className="font-semibold text-foreground">{w.title}</h4>
              <img
                className="aspect-video rounded-lg object-cover w-full"
                src={`/images/${w.title
                  .toLowerCase()
                  .replace(/\s+&\s+/, "-")
                  .replace(/\s+/g, "-")}.jpg`}
                alt={`${w.title} example`}
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.endsWith(".jpg")) {
                    img.src = img.src.replace(".jpg", ".webp");
                  } else if (img.src.endsWith(".webp")) {
                    img.src = img.src.replace(".webp", ".jpeg");
                  }
                }}
              />
              <p className="text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      ),
    });

  return (
    <div className="max-w-2xl mx-auto">
      <StepCard className="p-6 sm:p-8">
        <SectionHeader section={SURVEY_SECTIONS.wiring} />

        <div className="mt-6 space-y-3">
          {WIRING_OPTIONS.map((o) => (
            <CheckRow
              key={o}
              label={o}
              checked={data.wiring.includes(o)}
              onClick={() => toggle(o)}
            />
          ))}
        </div>

        <div className="mt-4 text-center">
          <HelpLink label="What are the different wiring types?" onClick={openDefs} />
        </div>

        <NavFooter onBack={onBack} onNext={onNext} nextDisabled={data.wiring.length === 0} />
      </StepCard>
    </div>
  );
}
