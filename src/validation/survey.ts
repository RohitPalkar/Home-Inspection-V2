import { z } from "zod";

export const phoneRegex = /^\+?1?\d{10,15}$/;
export const zipRegex = /^\d{5}(-\d{4})?$/;

export const verifySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().regex(zipRegex, "Invalid ZIP code"),
  phone: z.string().regex(phoneRegex, "Invalid phone number"),
});

export const infrastructureSchema = z.object({
  yearBuilt: z.string().min(1, "Year built is required"),
  squareFeet: z.string().min(1, "Square footage is required"),
  amperage: z.string().min(1, "Amperage is required"),
  plumbingMaterial: z.string().min(1, "Plumbing material is required"),
  heatingFuel: z.string().min(1, "Heating fuel is required"),
});

export const propertyDetailsSchema = z.object({
  roofAge: z.string().min(1, "Roof age is required"),
  homeYearSelect: z.string().min(1, "Home year is required"),
  basement: z.string().min(1, "Basement info is required"),
});

export const businessSchema = z.object({
  businessTypes: z.array(z.string()).min(1, "Select at least one business type"),
});

export const occupancySchema = z.object({
  ownerOccupied: z.string().min(1, "Required"),
  ownerRentsPortion: z.string().optional(),
  rentalType: z.string().optional(),
  vacantFurnished: z.string().optional(),
});

export type VerifyData = z.infer<typeof verifySchema>;
export type InfrastructureData = z.infer<typeof infrastructureSchema>;
export type PropertyDetailsData = z.infer<typeof propertyDetailsSchema>;
export type BusinessData = z.infer<typeof businessSchema>;
export type OccupancyData = z.infer<typeof occupancySchema>;
