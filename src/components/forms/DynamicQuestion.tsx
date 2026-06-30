import { FieldLabel } from "@/components/forms/FieldLabel";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { toHelpContent } from "@/components/forms/help-utils";
import type { SurveyData, SurveyUpdater, HelpContent, RadioQuestionConfig, ConditionalQuestionConfig, HelpLinkDef } from "@/types/survey";

function HelpLinksGroup({
  links,
  onHelp,
}: {
  links: HelpLinkDef[];
  onHelp: (c: HelpContent) => void;
}) {
  if (!links || links.length === 0) return null;
  return (
    <div className="space-y-1">
      {links.map((link) => (
        <div key={link.entryKey} className="flex justify-center">
          <HelpLink
            label={link.label}
            onClick={() => onHelp(toHelpContent(link.entryKey))}
          />
        </div>
      ))}
    </div>
  );
}

function OptionHelpLink({
  selectedOption,
  config,
  onHelp,
}: {
  selectedOption: string | undefined;
  config: RadioQuestionConfig;
  onHelp: (c: HelpContent) => void;
}) {
  if (!selectedOption) return null;
  const option = config.options.find((o) => o.value === selectedOption);
  if (!option?.optionHelp) return null;
  return (
    <div className="flex justify-center">
      <HelpLink
        label={option.optionHelp.label}
        onClick={() => onHelp(toHelpContent(option.optionHelp!.entryKey))}
      />
    </div>
  );
}

function ConditionalQuestion({
  question,
  data,
  update,
  onHelp,
}: {
  question: ConditionalQuestionConfig;
  data: SurveyData;
  update: SurveyUpdater;
  onHelp: (c: HelpContent) => void;
}) {
  const value = String(data[question.id] ?? "");
  const setValue = (v: string) => {
    const fieldValue = v === "true" ? true : v === "false" ? false : v;
    update(question.id, fieldValue as never);
  };

  return (
    <div className="border-t border-border pt-4 mt-4">
      <FieldLabel required={question.required}>{question.label}</FieldLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {question.options.map((opt) => (
          <RadioRow
            key={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onClick={() => setValue(opt.value)}
          />
        ))}
      </div>
      {question.helpLinks && question.helpLinks.length > 0 && (
        <div className="mt-2 space-y-1">
          <HelpLinksGroup links={question.helpLinks} onHelp={onHelp} />
        </div>
      )}
    </div>
  );
}

interface DynamicQuestionProps {
  config: RadioQuestionConfig;
  data: SurveyData;
  update: SurveyUpdater;
  onHelp: (c: HelpContent) => void;
}

export function DynamicQuestion({ config, data, update, onHelp }: DynamicQuestionProps) {
  const value = String(data[config.id] ?? "");

  return (
    <div>
      <FieldLabel required={config.required}>{config.label}</FieldLabel>
      <div className="space-y-2">
        {config.options.map((opt) => (
          <RadioRow
            key={opt.value}
            label={opt.label}
            checked={value === opt.value}
            onClick={() => update(config.id, opt.value as never)}
          />
        ))}
      </div>
      <div className="mt-3 space-y-1">
        {config.helpLinks && config.helpLinks.length > 0 && (
          <HelpLinksGroup links={config.helpLinks} onHelp={onHelp} />
        )}
        <OptionHelpLink selectedOption={value} config={config} onHelp={onHelp} />
      </div>
      {value &&
        config.options
          .filter((o) => o.value === value)
          .map((opt) =>
            opt.showQuestion ? (
              <ConditionalQuestion
                key={opt.value}
                question={opt.showQuestion}
                data={data}
                update={update}
                onHelp={onHelp}
              />
            ) : null,
          )}
    </div>
  );
}
