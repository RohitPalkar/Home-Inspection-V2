import type { RadioQuestionConfig } from "@/types/survey";

export interface SectionConfig {
  title: string;
  subtitle?: string;
}

export const HEATING_QUESTION: RadioQuestionConfig = {
  id: "heatingFuel",
  label: "Heating Fuel Type",
  required: true,
  questionHelp: {
    label: "What is a heating system?",
    entryKey: "heating-system",
  },
  options: [
    {
      label: "Gas",
      value: "gas",
      optionHelp: {
        label: "What is a gas heating system?",
        entryKey: "gas-heating",
      },
      showQuestion: {
        id: "gasMeterPresent",
        label: "Gas Meter Present?",
        required: true,
        questionHelp: {
          label: "What is a gas meter?",
          entryKey: "gas-meter",
        },
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Electric",
      value: "electric",
      optionHelp: {
        label: "What is electric heating?",
        entryKey: "electric-heating",
      },
      showQuestion: {
        id: "baseboardHeating",
        label: "Does the home use electric baseboard heating?",
        required: true,
        questionHelp: {
          label: "What is electric baseboard heating?",
          entryKey: "electric-baseboard",
        },
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Oil",
      value: "oil",
      optionHelp: {
        label: "What is an oil heating system?",
        entryKey: "oil-heating",
      },
      showQuestion: {
        id: "oilTankUnderground",
        label: "Is the oil tank underground?",
        required: true,
        questionHelp: {
          label: "What is an underground oil tank?",
          entryKey: "underground-oil-tank",
        },
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
      },
    },
    {
      label: "Propane",
      value: "propane",
      optionHelp: {
        label: "What is propane heating?",
        entryKey: "propane-heating",
      },
      showQuestion: {
        id: "propaneTankLocation",
        label: "Where is the propane tank located?",
        required: true,
        questionHelp: {
          label: "Where is a propane tank located?",
          entryKey: "propane-tank-location",
        },
        options: [
          { label: "Above Ground", value: "above-ground" },
          { label: "Underground", value: "underground" },
        ],
      },
    },
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
