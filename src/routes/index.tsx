import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const SurveyPage = lazy(() =>
  import("@/pages/SurveyPage").then((m) => ({ default: m.SurveyPage })),
);

const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SurveyPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
