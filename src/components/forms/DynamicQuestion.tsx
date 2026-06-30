import { FieldLabel } from "@/components/forms/FieldLabel";
import { RadioRow } from "@/components/forms/RadioRow";
import { HelpLink } from "@/components/forms/HelpLink";
import { HELP } from "@/config/help";
import type {
  SurveyData,
  SurveyUpdater,
  HelpContent,
  RadioQuestionConfig,
  ConditionalQuestionConfig,
} from "@/types/survey";

interface DynamicQuestionProps {
  config: RadioQuestionConfig;
  data: SurveyData;
  update: SurveyUpdater;
  onHelp: (c: HelpContent) => void;
}

function toHelpContent(entryKey: string): HelpContent {
  const entry = HELP[entryKey];
  if (!entry) {
    return { title: entryKey, body: <p>Help content not found.</p> };
  }
  return { title: entry.title, body: <p className="text-muted-foreground">{entry.description}</p> };
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
      <div className="flex items-center gap-2 mb-1.5">
        <FieldLabel required={question.required}>{question.label}</FieldLabel>
        {question.questionHelp && (
          <button
            type="button"
            className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            onClick={() => onHelp(toHelpContent(question.questionHelp!.entryKey))}
          >
            ⓘ
          </button>
        )}
      </div>
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
    </div>
  );
}

export function DynamicQuestion({ config, data, update, onHelp }: DynamicQuestionProps) {
  const value = String(data[config.id] ?? "");

  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <FieldLabel required={config.required}>{config.label}</FieldLabel>
        {config.questionHelp && (
          <button
            type="button"
            className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
            onClick={() => onHelp(toHelpContent(config.questionHelp!.entryKey))}
          >
            ⓘ
          </button>
        )}
      </div>
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
