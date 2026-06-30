export interface HelpEntry {
  title: string;
  description: string;
  image?: { src: string; alt: string; fallbackSrc?: string[] };
  tips?: string[];
}

export interface HelpLinkConfig {
  id: string;
  label: string;
  entry: HelpEntry;
}

export const HELP: Record<string, HelpEntry> = {
  "panel-breaker": {
    title: "Breaker Panel",
    description:
      "Breaker panels could be located inside or outside your home and typically use circuit breakers to protect electrical circuits from overload.",
    image: {
      src: "/images/breaker-panel.webp",
      alt: "Breaker panel example",
      fallbackSrc: ["/images/breaker-panel.jpg", "/images/breaker-panel.jpeg"],
    },
  },
  "panel-fuse": {
    title: "Fuse Panel",
    description:
      "Fuse panels could be located inside or outside your home and use replaceable fuses instead of circuit breakers.",
    image: {
      src: "/images/fuse-panel.jpg",
      alt: "Fuse panel example",
      fallbackSrc: ["/images/fuse-panel.jpeg"],
    },
  },
};
