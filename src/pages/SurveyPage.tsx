import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { SurveyApp } from "@/pages/SurveyApp";

export function SurveyPage() {
  return (
    <ErrorBoundary name="survey_page">
      <SurveyApp />
    </ErrorBoundary>
  );
}
