import type { ReactNode } from "react";

export type StepKey =
  | "welcome"
  | "optout"
  | "optout-confirmed"
  | "faq"
  | "verify"
  | "occupancy"
  | "infrastructure"
  | "wiring"
  | "panel"
  | "property-details"
  | "business"
  | "photos"
  | "review"
  | "success";

export interface SurveyData {
  editMode: boolean;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  occupancy: "" | "owner" | "rental" | "vacant";
  ownerOccupiedType: "" | "fulltime" | "secondary";
  ownerRentsPortion: "" | "yes" | "no";
  rentalType: "" | "standard" | "shortterm";
  vacantFurnished: "" | "yes" | "no";
  yearBuilt: string;
  amperage: string;
  plumbingMaterial: string;
  heatingFuel: string;
  gasMeterPresent: boolean;
  oilTankUnderground: boolean;
  baseboardHeating: boolean;
  propaneTankLocation: "" | "above-ground" | "underground";
  njCompliance: string;
  wiring: string[];
  panel: "" | "breaker" | "fuse" | "both" | "unknown";
  roofAge: "" | "<5" | "5-10" | "10-20" | "20+";
  homeYearSelect: string;
  basement: "" | "finished" | "unfinished" | "no";
  basementPhotos: File[];
  businessTypes: string[];
  otherBusinessDesc: string;
  hasPool: "" | "yes" | "no";
  poolLocation: "" | "indoor" | "outdoor";
  poolGated: "" | "yes" | "no";
  poolFilled: "" | "yes" | "no";
  poolEmptyReason: string;
  uploads: Record<string, File[]>;
}

export interface HelpContent {
  title: string;
  body: ReactNode;
  wide?: boolean;
}

export type SurveyUpdater = <K extends keyof SurveyData>(key: K, value: SurveyData[K]) => void;

export interface HelpLinkDef {
  label: string;
  entryKey: string;
}

export interface ConditionalQuestionConfig {
  id: keyof SurveyData;
  label: string;
  required?: boolean;
  questionHelp?: HelpLinkDef;
  options: { label: string; value: string }[];
}

export interface RadioQuestionConfig {
  id: keyof SurveyData;
  label: string;
  required?: boolean;
  questionHelp?: HelpLinkDef;
  options: {
    label: string;
    value: string;
    optionHelp?: HelpLinkDef;
    showQuestion?: ConditionalQuestionConfig;
  }[];
}
