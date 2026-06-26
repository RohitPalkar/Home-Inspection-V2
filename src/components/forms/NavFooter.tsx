import { ChevronRight } from "lucide-react";
import { OutlineButton } from "./OutlineButton";
import { PrimaryButton } from "./PrimaryButton";

interface NavFooterProps {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  hideBack?: boolean;
}

export function NavFooter({
  onBack,
  onNext,
  nextLabel = "Next",
  nextDisabled,
  hideBack,
}: NavFooterProps) {
  return (
    <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
      {!hideBack ? (
        <OutlineButton onClick={onBack} className="w-full sm:w-auto">
          Previous
        </OutlineButton>
      ) : (
        <span />
      )}
      <PrimaryButton onClick={onNext} disabled={nextDisabled} className="w-full sm:w-auto">
        {nextLabel}
        <ChevronRight className="w-4 h-4" />
      </PrimaryButton>
    </div>
  );
}
