import type { PhotoGuidanceEntry } from "@/types/survey";

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

export const PHOTO_GUIDANCE: Record<string, PhotoGuidanceEntry> = {
  "front-exterior": {
    title: "Front Exterior Photo",
    purpose:
      "We use this photo to verify the overall condition and appearance of the front of your home, including the facade, entryway, and front yard.",
    steps: [
      "Stand approximately 20–30 feet from the front of the house.",
      "Capture the entire front elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/front-exterior-good.webp",
      alt: "Front exterior photo showing the entire front of the house with good lighting and clear details",
      caption: "Entire front visible, sharp image, good lighting, level horizon.",
      fallbackSrc: ["/images/photo-guide/front-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/front-exterior-bad.webp",
      alt: "Front exterior photo that is too close and cropped, missing the roofline",
      caption: "Too close — roofline cropped, blurry, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/front-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Remove vehicles or obstacles blocking the view.",
      "Avoid strong sunlight directly behind the home.",
      "Clean your camera lens before taking photos.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Taking photos at night or in dim lighting.",
      "Including people or animals in the frame.",
      "Blurry images from unsteady hands.",
    ],
  },
  "rear-exterior": {
    title: "Rear Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the rear of your home, including the back facade, deck or patio, and rear yard.",
    steps: [
      "Stand approximately 20–30 feet from the rear of the house.",
      "Capture the entire rear elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/rear-exterior-good.webp",
      alt: "Rear exterior photo showing the full back of the house with clear details",
      caption: "Full rear elevation visible, good lighting, sharp focus.",
      fallbackSrc: ["/images/photo-guide/rear-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/rear-exterior-bad.webp",
      alt: "Rear exterior photo obstructed by trees and heavy shadows",
      caption: "Trees blocking the view, heavy shadows, image too dark.",
      fallbackSrc: ["/images/photo-guide/rear-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Remove patio furniture or debris blocking the view.",
      "Avoid taking photos during midday harsh shadows.",
      "Make sure the entire rear wall is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Obstructions like trees, vehicles, or furniture in the frame.",
      "Taking photos in low light or at night.",
      "Angled shots that distort the perspective.",
    ],
  },
  "left-exterior": {
    title: "Left Side Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the left side of your home, including siding, windows, and any side entrances.",
    steps: [
      "Stand approximately 20–30 feet from the left side of the house.",
      "Capture the entire side elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/left-exterior-good.webp",
      alt: "Left side exterior photo showing the full side elevation clearly",
      caption: "Full side elevation visible, clear details, good lighting.",
      fallbackSrc: ["/images/photo-guide/left-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/left-exterior-bad.webp",
      alt: "Left side exterior photo that is too close and cropped",
      caption: "Too close — roof and foundation cropped, poor angle.",
      fallbackSrc: ["/images/photo-guide/left-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand back far enough to capture the full side.",
      "Avoid fences or landscaping that block the view.",
      "Ensure the entire roofline is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Angled shots that distort the perspective.",
      "Overhanging branches blocking the view.",
      "Dark shadows from nearby structures.",
    ],
  },
  "right-exterior": {
    title: "Right Side Exterior Photo",
    purpose:
      "We use this photo to verify the condition of the right side of your home, including siding, windows, and any side entrances.",
    steps: [
      "Stand approximately 20–30 feet from the right side of the house.",
      "Capture the entire side elevation from ground to roofline.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move closer if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/right-exterior-good.webp",
      alt: "Right side exterior photo showing the full side elevation clearly",
      caption: "Full side elevation visible, clear details, good lighting.",
      fallbackSrc: ["/images/photo-guide/right-exterior-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/right-exterior-bad.webp",
      alt: "Right side exterior photo that is blurry and poorly lit",
      caption: "Blurry image, poor lighting, roof not fully visible.",
      fallbackSrc: ["/images/photo-guide/right-exterior-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand back far enough to capture the full side.",
      "Avoid fences or landscaping that block the view.",
      "Ensure the entire roofline is visible.",
    ],
    commonMistakes: [
      "Standing too close — the full elevation must be visible.",
      "Blurry images from unsteady hands.",
      "Taking photos during golden hour with long shadows.",
      "Including neighboring properties in the frame.",
    ],
  },
  "roof-overview": {
    title: "Roof Overview Photo",
    purpose:
      "We use this photo to verify the overall condition of your roof, including shingles, flashing, and any visible damage.",
    steps: [
      "Stand approximately 30–40 feet from the house.",
      "Capture the entire roof in a single wide shot.",
      "Take the photo during daylight hours.",
      "Keep the phone level and straight.",
      "Do not zoom — move farther back if needed.",
    ],
    goodExample: {
      src: "/images/photo-guide/roof-overview-good.webp",
      alt: "Roof overview showing the entire roof with clear details and good lighting",
      caption: "Entire roof visible, good lighting, sharp focus, no obstructions.",
      fallbackSrc: ["/images/photo-guide/roof-overview-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/roof-overview-bad.webp",
      alt: "Roof overview that is cropped and partially blocked by trees",
      caption: "Roof cropped, trees blocking sections, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/roof-overview-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Move far enough back to capture the entire roofline.",
      "Avoid taking photos when the sun is directly behind the roof.",
      "Clean your camera lens before taking photos.",
    ],
    commonMistakes: [
      "Standing too close — the full roof must be visible.",
      "Trees or other obstructions blocking the view.",
      "Taking photos at night or in dim lighting.",
      "Zooming in — move closer instead.",
    ],
  },
  "electrical-panel": {
    title: "Electrical Panel Photo",
    purpose:
      "We use this photo to verify the type, condition, and labeling of your electrical panel.",
    steps: [
      "Open the electrical panel door.",
      "Stand directly in front of the panel.",
      "Capture the entire panel including all breakers or fuses.",
      "Ensure the photo is well-lit and readable.",
      "Take a second close-up of the panel label if visible.",
    ],
    goodExample: {
      src: "/images/photo-guide/electrical-panel-good.webp",
      alt: "Electrical panel with the door open showing all breakers clearly",
      caption: "Panel fully visible, all breakers clear, good lighting, label readable.",
      fallbackSrc: ["/images/photo-guide/electrical-panel-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/electrical-panel-bad.webp",
      alt: "Electrical panel photo that is dark and blurry",
      caption: "Too dark, blurry, breakers not distinguishable.",
      fallbackSrc: ["/images/photo-guide/electrical-panel-bad.jpg"],
    },
    tips: [
      "Use flash if the panel is in a dark area.",
      "Portrait orientation works best for tall panels.",
      "Make sure the panel label with amperage rating is visible.",
      "Close other panels or doors that cause reflections.",
    ],
    commonMistakes: [
      "Taking the photo with the panel door closed.",
      "Standing too close — the entire panel must fit in frame.",
      "Glare from overhead lights on the panel cover.",
      "Blurry images from unsteady hands.",
    ],
  },
  "hvac-system": {
    title: "HVAC System Photo",
    purpose:
      "We use this photo to verify the type, condition, and location of your heating and cooling system.",
    steps: [
      "Locate the HVAC unit (furnace, boiler, or heat pump).",
      "Stand far enough back to capture the entire unit.",
      "Capture the manufacturer label if visible.",
      "Take the photo in a well-lit area.",
      "Include surrounding area for context.",
    ],
    goodExample: {
      src: "/images/photo-guide/hvac-system-good.webp",
      alt: "HVAC system showing the entire unit with visible manufacturer label",
      caption: "Full unit visible, label readable, good lighting, clear surroundings.",
      fallbackSrc: ["/images/photo-guide/hvac-system-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/hvac-system-bad.webp",
      alt: "HVAC system photo that is too close and cluttered",
      caption: "Too close — unit cropped, clutter in frame, poor lighting.",
      fallbackSrc: ["/images/photo-guide/hvac-system-bad.jpg"],
    },
    tips: [
      "Clear clutter around the unit before taking the photo.",
      "Use flash in dark basements or utility closets.",
      "Take a separate close-up of the model/serial number label.",
      "Include the ductwork or piping connections.",
    ],
    commonMistakes: [
      "Standing too close — the full unit must be visible.",
      "Clutter or stored items blocking the view.",
      "Dark or shadowed images in utility areas.",
      "Forgetting to capture the manufacturer label.",
    ],
  },
  "water-heater": {
    title: "Water Heater Photo",
    purpose:
      "We use this photo to verify the type, size, and condition of your water heater.",
    steps: [
      "Locate the water heater.",
      "Stand far enough back to capture the entire unit.",
      "Capture the manufacturer label with model/serial number.",
      "Take the photo in a well-lit area.",
      "Include the piping connections at the top.",
    ],
    goodExample: {
      src: "/images/photo-guide/water-heater-good.webp",
      alt: "Water heater showing the full unit with visible label and connections",
      caption: "Full unit visible, label readable, piping connections clear.",
      fallbackSrc: ["/images/photo-guide/water-heater-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/water-heater-bad.webp",
      alt: "Water heater photo that is cropped and dark",
      caption: "Cropped — top connections cut off, dark image, no label visible.",
      fallbackSrc: ["/images/photo-guide/water-heater-bad.jpg"],
    },
    tips: [
      "Use flash in dark utility rooms.",
      "Portrait orientation works best for tall water heaters.",
      "Take a separate close-up of the rating label.",
      "Include the pressure relief valve and discharge pipe.",
    ],
    commonMistakes: [
      "Standing too close — the full unit must be visible.",
      "Dark or shadowed images in utility areas.",
      "Obstructions like boxes or shelves in the frame.",
      "Not showing the piping connections.",
    ],
  },
  kitchen: {
    title: "Kitchen Photo",
    purpose:
      "We use this photo to verify the condition of your kitchen, including countertops, cabinetry, appliances, and plumbing fixtures.",
    steps: [
      "Stand in the doorway or entrance to the kitchen.",
      "Capture the entire kitchen in a wide shot.",
      "Take additional photos of each counter and appliance area.",
      "Ensure the room is well-lit.",
      "Include sink, stove, and refrigerator in at least one photo.",
    ],
    goodExample: {
      src: "/images/photo-guide/kitchen-good.webp",
      alt: "Wide kitchen shot showing countertops, cabinets, and appliances clearly",
      caption: "Full kitchen visible, good lighting, all major appliances shown.",
      fallbackSrc: ["/images/photo-guide/kitchen-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/kitchen-bad.webp",
      alt: "Kitchen photo that is too close and cluttered",
      caption: "Too close — only partial view, cluttered counters, poor angle.",
      fallbackSrc: ["/images/photo-guide/kitchen-bad.jpg"],
    },
    tips: [
      "Turn on all lights before taking photos.",
      "Landscape orientation preferred for wide shots.",
      "Clear countertops of clutter when possible.",
      "Take multiple photos from different angles.",
    ],
    commonMistakes: [
      "Standing too close — the full kitchen must be visible.",
      "Cluttered counters obscuring the space.",
      "Dark or shadowed areas from poor lighting.",
      "Only taking one photo — multiple angles are needed.",
    ],
  },
  bathroom: {
    title: "Bathroom Photo",
    purpose:
      "We use this photo to verify the condition of your bathroom, including fixtures, ventilation, and overall condition.",
    steps: [
      "Stand in the doorway to capture the full bathroom.",
      "Show the sink, toilet, shower or tub in the frame.",
      "Take a close-up of the vanity and counter area.",
      "Ensure the room is well-lit.",
      "Include any exhaust fan or window.",
    ],
    goodExample: {
      src: "/images/photo-guide/bathroom-good.webp",
      alt: "Bathroom showing all fixtures clearly with good lighting",
      caption: "Full bathroom visible, all fixtures shown, good lighting, clean.",
      fallbackSrc: ["/images/photo-guide/bathroom-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/bathroom-bad.webp",
      alt: "Bathroom photo that is dark and partially blocked",
      caption: "Dark image, toilet partially blocked, mirror reflection causes glare.",
      fallbackSrc: ["/images/photo-guide/bathroom-bad.jpg"],
    },
    tips: [
      "Turn on all bathroom lights.",
      "Landscape orientation preferred.",
      "Open shower curtains to show the tub or shower interior.",
      "Clean mirrors to reduce glare and reflections.",
    ],
    commonMistakes: [
      "Standing too close — the full bathroom must be visible.",
      "Glare from mirrors or reflective surfaces.",
      "Dark or shadowed areas from poor lighting.",
      "Closed shower curtains hiding the tub area.",
    ],
  },
  "swimming-pool": {
    title: "Swimming Pool Photo",
    purpose:
      "We use this photo to verify the type, condition, and safety features of your swimming pool.",
    steps: [
      "Stand far enough back to capture the entire pool.",
      "Show the pool shape, size, and surrounding area.",
      "Capture any diving boards, slides, or pool equipment.",
      "Take the photo during daylight hours.",
      "Include the pool cover if applicable.",
    ],
    goodExample: {
      src: "/images/photo-guide/swimming-pool-good.webp",
      alt: "Swimming pool showing the full pool area with clear water and surroundings",
      caption: "Full pool visible, clear water, good lighting, surroundings shown.",
      fallbackSrc: ["/images/photo-guide/swimming-pool-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/swimming-pool-bad.webp",
      alt: "Swimming pool photo that is too close and shows only part of the pool",
      caption: "Too close — only partial pool visible, heavy shadows, poor angle.",
      fallbackSrc: ["/images/photo-guide/swimming-pool-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred for pools.",
      "Stand at the deep end for a full-length view.",
      "Remove pool covers for a clear water view.",
      "Avoid taking photos when the sun is reflecting off the water.",
    ],
    commonMistakes: [
      "Standing too close — the full pool must be visible.",
      "Sun glare on the water surface.",
      "Pool cover obscuring the water condition.",
      "Not showing the surrounding deck or safety equipment.",
    ],
  },
  "pool-fence": {
    title: "Pool Fence Photo",
    purpose:
      "We use this photo to verify that your pool has a compliant safety fence installed.",
    steps: [
      "Stand far enough to capture the full fence line.",
      "Show the gate, latch, and locking mechanism.",
      "Capture the fence height relative to the pool.",
      "Take additional close-ups of the gate latch.",
      "Show any gaps or openings in the fence.",
    ],
    goodExample: {
      src: "/images/photo-guide/pool-fence-good.webp",
      alt: "Pool fence showing the full fence line with visible gate and latch",
      caption: "Full fence line visible, gate and latch clear, no gaps visible.",
      fallbackSrc: ["/images/photo-guide/pool-fence-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/pool-fence-bad.webp",
      alt: "Pool fence photo that is too close and shows only a section of the fence",
      caption: "Too close — only partial fence visible, gate not shown.",
      fallbackSrc: ["/images/photo-guide/pool-fence-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Take photos from multiple angles to show the full perimeter.",
      "Close-up of the latch must show it works properly.",
      "Ensure the fence base and any gaps are visible.",
    ],
    commonMistakes: [
      "Only showing a small section of the fence.",
      "Not capturing the gate and latch mechanism.",
      "Overgrown vegetation hiding the fence line.",
      "Taking photos too far away to see the latch detail.",
    ],
  },
  fireplace: {
    title: "Fireplace / Hearth Photo",
    purpose:
      "We use this photo to verify the type, condition, and venting system of your fireplace or hearth.",
    steps: [
      "Stand far enough back to capture the entire fireplace.",
      "Show the hearth, firebox, and surround.",
      "Capture the flue or venting system if visible.",
      "Take a close-up of the manufacturer nameplate.",
      "Include the mantel and surrounding wall area.",
    ],
    goodExample: {
      src: "/images/photo-guide/fireplace-good.webp",
      alt: "Fireplace showing the full hearth, firebox, and mantel clearly",
      caption: "Full fireplace visible, hearth clear, mantel and surround shown.",
      fallbackSrc: ["/images/photo-guide/fireplace-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/fireplace-bad.webp",
      alt: "Fireplace photo that is too close and shows only the firebox",
      caption: "Too close — only firebox visible, hearth and surround cropped.",
      fallbackSrc: ["/images/photo-guide/fireplace-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Clean out ashes for a clear view of the firebox.",
      "Open the damper if possible to show the flue.",
      "Include any gas logs or inserts in the photo.",
    ],
    commonMistakes: [
      "Standing too close — the full fireplace must be visible.",
      "Dark firebox from not using flash.",
      "Furniture or decor blocking the view.",
      "Not showing the hearth extension.",
    ],
  },
  "solar-panels": {
    title: "Solar Panels Photo",
    purpose:
      "We use this photo to verify the installation, condition, and quantity of your solar panels.",
    steps: [
      "Stand far enough to capture all panels on the roof.",
      "Show the panels in relation to the roof structure.",
      "Capture the inverter and metering equipment if visible.",
      "Take a close-up of the panel manufacturer label.",
      "Take the photo during daylight hours.",
    ],
    goodExample: {
      src: "/images/photo-guide/solar-panels-good.webp",
      alt: "Solar panels on roof showing all panels clearly with good lighting",
      caption: "All panels visible, good lighting, clear roof context.",
      fallbackSrc: ["/images/photo-guide/solar-panels-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/solar-panels-bad.webp",
      alt: "Solar panel photo that is too close and shows only a few panels",
      caption: "Too close — only partial array visible, heavy shadows.",
      fallbackSrc: ["/images/photo-guide/solar-panels-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Stand as far back as needed to capture all panels.",
      "Avoid taking photos when the sun is reflecting off the glass.",
      "Include ground-level inverter and wiring when possible.",
    ],
    commonMistakes: [
      "Standing too close — the full array must be visible.",
      "Sun glare obscuring panel surfaces.",
      "Not showing the inverter or metering equipment.",
      "Taking photos at an angle that distorts panel count.",
    ],
  },
  "detached-garage": {
    title: "Detached Garage Photo",
    purpose:
      "We use this photo to verify the condition and construction of your detached garage or carport.",
    steps: [
      "Stand approximately 20–30 feet from the structure.",
      "Capture the entire building from ground to roofline.",
      "Show the garage doors, windows, and siding.",
      "Take additional photos of any structural issues.",
      "Include the surrounding area for context.",
    ],
    goodExample: {
      src: "/images/photo-guide/detached-garage-good.webp",
      alt: "Detached garage showing the full structure with clear details",
      caption: "Full structure visible, good lighting, all sides shown.",
      fallbackSrc: ["/images/photo-guide/detached-garage-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/detached-garage-bad.webp",
      alt: "Detached garage photo that is too close and partially hidden",
      caption: "Too close — roofline cropped, vegetation blocking the view.",
      fallbackSrc: ["/images/photo-guide/detached-garage-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Take photos from multiple angles.",
      "Open garage doors to show the interior if accessible.",
      "Remove vehicles from in front of the garage.",
    ],
    commonMistakes: [
      "Standing too close — the full structure must be visible.",
      "Vehicles blocking the garage doors.",
      "Overgrown vegetation hiding the structure.",
      "Only taking one photo — multiple angles needed.",
    ],
  },
  "other-structures": {
    title: "Other Structures Photo",
    purpose:
      "We use this photo to verify any additional structures on your property, such as sheds, barns, or guest houses.",
    steps: [
      "Stand approximately 20–30 feet from the structure.",
      "Capture the entire structure from ground to roofline.",
      "Show all sides if possible.",
      "Take additional photos of any damage or issues.",
      "Include the structure in relation to the main home.",
    ],
    goodExample: {
      src: "/images/photo-guide/other-structures-good.webp",
      alt: "Shed or outbuilding showing the full structure with clear details",
      caption: "Full structure visible, good lighting, surroundings shown.",
      fallbackSrc: ["/images/photo-guide/other-structures-good.jpg"],
    },
    badExample: {
      src: "/images/photo-guide/other-structures-bad.webp",
      alt: "Outbuilding photo that is too close and partially blocked",
      caption: "Too close — structure cropped, vegetation blocking, dark.",
      fallbackSrc: ["/images/photo-guide/other-structures-bad.jpg"],
    },
    tips: [
      "Landscape orientation preferred.",
      "Clear vegetation or debris from around the structure.",
      "Take photos during daylight hours.",
      "Include any obvious damage or deterioration.",
    ],
    commonMistakes: [
      "Standing too close — the full structure must be visible.",
      "Overgrown vegetation hiding the structure.",
      "Dark or shadowed images.",
      "Only taking one photo from one angle.",
    ],
  },
};
