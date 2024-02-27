export type ObservationResponse = {
  id: string;
  date_testing: string;
  creatine: number;
  chloride: number;
  fasting_glucose: number;
  potassium: number;
  sodium: number;
  total_calcium: number;
  total_protein: number;
  creatine_unit: string;
  chloride_unit: string;
  fasting_glucose_unit: string;
  potassium_unit: string;
  sodium_unit: string;
  total_calcium_unit: string;
  total_protein_unit: string;
};

export type PatientResponse = {
  id: string;
  client_id: string;
  birthday: string;
  gender: string;
  ethnicity: string;
  created_at: string;
  updated_at: string;
  observations: ObservationResponse[];
};
