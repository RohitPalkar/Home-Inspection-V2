export interface SectionConfig {
  title: string;
  subtitle?: string;
}

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
