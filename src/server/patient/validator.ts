import { z } from 'zod';

const patientSchema = z.object({
  client_id: z.string(),
  date_testing: z.string(),
  date_birthdate: z.string(),
  // gender can be 1 or 2
  gender: z.union([z.literal(1), z.literal(2)]),
  ethnicity: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
  creatine: z.number(),
  chloride: z.number(),
  fasting_glucose: z.number(),
  potassium: z.number(),
  sodium: z.number(),
  total_calcium: z.number(),
  total_protein: z.number(),
  creatine_unit: z.string(),
  chloride_unit: z.string(),
  fasting_glucose_unit: z.string(),
  potassium_unit: z.string(),
  sodium_unit: z.string(),
  total_calcium_unit: z.string(),
  total_protein_unit: z.string(),
});

export const patientDataSchema = z.array(z.array(patientSchema));

export type PatientData = z.infer<typeof patientDataSchema>;
