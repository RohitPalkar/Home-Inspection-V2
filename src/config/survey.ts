import type { RadioQuestionConfig } from "@/types/survey";

export interface SectionConfig {
  title: string;
  subtitle?: string;
}

export interface PhotoRequirement {
  key: string;
  label: string;
  guidanceKey: string;
}

export const HEATING_QUESTION: RadioQuestionConfig = {
  id: "heatingFuel",
  label: "Heating Fuel Type",
  required: true,
  helpLinks: [{ label: "What is a heating system?", entryKey: "heating-system" }],
  options: [
    {
      label: "Gas",
      value: "gas",
      showQuestion: {
        id: "gasMeterPresent",
        label: "Gas Meter Present?",
        required: true,
        helpLinks: [{ label: "What is a gas meter?", entryKey: "gas-meter" }],
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Electric",
      value: "electric",
      showQuestion: {
        id: "baseboardHeating",
        label: "Does the home use electric baseboard heating?",
        required: true,
        helpLinks: [
          { label: "What is electric baseboard heating?", entryKey: "electric-baseboard" },
        ],
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Oil",
      value: "oil",
      showQuestion: {
        id: "oilTankUnderground",
        label: "Is the oil tank underground?",
        required: true,
        helpLinks: [
          { label: "What is an underground oil tank?", entryKey: "underground-oil-tank" },
        ],
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Propane",
      value: "propane",
      showQuestion: {
        id: "propaneTankLocation",
        label: "Where is the propane tank located?",
        required: true,
        helpLinks: [
          { label: "Where is a propane tank located?", entryKey: "propane-tank-location" },
        ],
        options: [
          { label: "Above Ground", value: "above-ground" },
          { label: "Underground", value: "underground" },
        ],
      },
    },
  ],
};

export const PHOTO_REQUIREMENTS: PhotoRequirement[] = [
  { key: "exterior-front", label: "Front Exterior Photo", guidanceKey: "front-exterior" },
  { key: "exterior-rear", label: "Rear Exterior Photo", guidanceKey: "rear-exterior" },
  { key: "exterior-left", label: "Left Side Exterior Photo", guidanceKey: "left-exterior" },
  { key: "exterior-right", label: "Right Side Exterior Photo", guidanceKey: "right-exterior" },
  { key: "roof", label: "Roof Overview Photo", guidanceKey: "roof-overview" },
  { key: "electrical-panel", label: "Electrical Panel Photo", guidanceKey: "electrical-panel" },
  { key: "hvac", label: "HVAC System Photo", guidanceKey: "hvac-system" },
  { key: "water-heater", label: "Water Heater Photo", guidanceKey: "water-heater" },
  { key: "kitchen", label: "Kitchen Photo", guidanceKey: "kitchen" },
  { key: "bathroom", label: "Bathroom Photo", guidanceKey: "bathroom" },
];

export const CONDITIONAL_PHOTO_REQUIREMENTS: Record<string, PhotoRequirement[]> = {
  pool: [
    { key: "pool", label: "Swimming Pool Photo", guidanceKey: "swimming-pool" },
    { key: "pool-fence", label: "Pool Fence Photo", guidanceKey: "pool-fence" },
  ],
  fireplace: [{ key: "fireplace", label: "Fireplace / Hearth Photo", guidanceKey: "fireplace" }],
  solar: [{ key: "solar", label: "Solar Panels Photo", guidanceKey: "solar-panels" }],
  garage: [{ key: "garage", label: "Detached Garage Photo", guidanceKey: "detached-garage" }],
  structures: [
    { key: "other-structures", label: "Other Structures Photo", guidanceKey: "other-structures" },
  ],
};

export const SURVEY_SECTIONS: Record<string, SectionConfig> = {
  verify: {
    title: "Verify Property Information",
    subtitle: "Please confirm that this information is correct before proceeding.",
  },
  occupancy: {
    title: "Occupancy",
    subtitle: "Select the occupancy type for your property.",
  },
  infrastructure: {
    title: "Year Home Built",
    subtitle: "Confirm or update the year your home was built.",
  },
  wiring: {
    title: "Wiring",
    subtitle: "Select all wiring types present in your home.",
  },
  panel: {
    title: "Electrical Panel",
    subtitle: "Identify the electrical panel installed in your home.",
  },
  "property-details": {
    title: "Roof Age",
    subtitle: "Provide the approximate age of your roof.",
  },
  business: {
    title: "Business Operations",
    subtitle: "Tell us whether any business activities take place at this property.",
  },
  photos: {
    title: "Property Photos",
    subtitle: "Upload the required photos to complete your inspection.",
  },
  review: {
    title: "Review Your Survey",
    subtitle: "Review your answers before submitting your survey.",
  },
  success: {
    title: "Survey Complete",
  },
};
