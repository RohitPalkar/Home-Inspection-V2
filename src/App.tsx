import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SurveyPage } from "./pages/SurveyPage";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SurveyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </>
  );
}
