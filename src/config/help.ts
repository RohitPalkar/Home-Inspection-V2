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
  "heating-system": {
    title: "Heating System",
    description:
      "A heating system is a mechanism that maintains temperature and comfort within a home by distributing warm air or water throughout the property. The type of fuel used affects efficiency, maintenance, and emissions.",
  },
  "gas-heating": {
    title: "Gas Heating System",
    description:
      "A gas heating system burns natural gas to produce heat. It is one of the most common and cost-effective heating methods in the United States, offering reliable warmth through forced air or hydronic systems.",
  },
  "gas-meter": {
    title: "Gas Meter",
    description:
      "A gas meter measures the volume of natural gas supplied to your property. It is typically located on the exterior of the home or in a utility area and is used by the gas company to track consumption.",
    image: {
      src: "/images/gas-meter.webp",
      alt: "Example of a gas meter",
      fallbackSrc: ["/images/gas-meter.jpg", "/images/gas-meter.jpeg"],
    },
  },
  "oil-heating": {
    title: "Oil Heating System",
    description:
      "An oil heating system uses heating oil stored in a tank to produce heat. Common in the northeastern United States, these systems require regular oil deliveries and tank maintenance to operate efficiently.",
  },
  "underground-oil-tank": {
    title: "Underground Oil Tank",
    description:
      "An underground oil tank is a storage tank buried below ground level that holds heating oil. These tanks require specialized inspection since leaks can cause environmental contamination and property damage.",
    image: {
      src: "/images/underground-oil-tank.webp",
      alt: "Underground oil tank diagram",
      fallbackSrc: ["/images/underground-oil-tank.jpg"],
    },
  },
  "electric-heating": {
    title: "Electric Heating",
    description:
      "Electric heating systems convert electrical energy directly into heat. They are widely available, do not require on-site fuel storage, and can be installed as baseboard heaters, wall units, or central systems.",
  },
  "electric-baseboard": {
    title: "Electric Baseboard Heating",
    description:
      "Electric baseboard heaters are individual heating units installed along the baseboard of a room. Each unit operates independently and uses electrical resistance coils to generate warmth.",
    image: {
      src: "/images/electric-baseboard.webp",
      alt: "Electric baseboard heater example",
      fallbackSrc: ["/images/electric-baseboard.jpg"],
    },
  },
  "propane-heating": {
    title: "Propane Heating System",
    description:
      "A propane heating system uses liquefied petroleum gas (propane) stored in a tank to produce heat. It is common in rural homes without access to natural gas lines.",
  },
  "propane-tank-location": {
    title: "Propane Tank Location",
    description:
      "Propane tanks can be installed above ground or below ground. Above-ground tanks are typically placed in a side or back yard, while underground tanks are buried to save space and improve aesthetics. Each option has specific safety and maintenance requirements.",
    image: {
      src: "/images/propane-tank.webp",
      alt: "Propane tank installation example",
      fallbackSrc: ["/images/propane-tank.jpg"],
    },
  },
};
