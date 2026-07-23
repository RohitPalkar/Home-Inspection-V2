import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const SurveyPage = lazy(() =>
  import("@/pages/SurveyPage").then((m) => ({ default: m.SurveyPage })),
);

const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));

const LinkExpired = lazy(() =>
  import("@/pages/LinkExpired").then((m) => ({ default: m.LinkExpired })),
);

const SurveyCompleted = lazy(() =>
  import("@/pages/SurveyCompleted").then((m) => ({ default: m.SurveyCompleted })),
);

const AlreadyOptedOut = lazy(() =>
  import("@/pages/AlreadyOptedOut").then((m) => ({ default: m.AlreadyOptedOut })),
);

const FeedbackSubmitted = lazy(() =>
  import("@/pages/FeedbackSubmitted").then((m) => ({ default: m.FeedbackSubmitted })),
);

const DeviceNotSupported = lazy(() =>
  import("@/pages/DeviceNotSupported").then((m) => ({ default: m.DeviceNotSupported })),
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <SurveyPage />,
  },
  {
    path: "link-expired",
    element: <LinkExpired />,
  },
  {
    path: "survey-completed",
    element: <SurveyCompleted />,
  },
  {
    path: "already-opted-out",
    element: <AlreadyOptedOut />,
  },
  {
    path: "feedback-submitted",
    element: <FeedbackSubmitted />,
  },
  {
    path: "device-not-supported",
    element: <DeviceNotSupported />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
