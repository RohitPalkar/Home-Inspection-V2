import { Routes, Route } from "react-router-dom";
import { SurveyPage } from "./pages/SurveyPage";
import { NotFound } from "./pages/NotFound";
import { LinkExpired } from "./pages/LinkExpired";
import { SurveyCompleted } from "./pages/SurveyCompleted";
import { AlreadyOptedOut } from "./pages/AlreadyOptedOut";
import { FeedbackSubmitted } from "./pages/FeedbackSubmitted";
import { DeviceNotSupported } from "./pages/DeviceNotSupported";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SurveyPage />} />
      <Route path="link-expired" element={<LinkExpired />} />
      <Route path="survey-completed" element={<SurveyCompleted />} />
      <Route path="already-opted-out" element={<AlreadyOptedOut />} />
      <Route path="feedback-submitted" element={<FeedbackSubmitted />} />
      <Route path="device-not-supported" element={<DeviceNotSupported />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
