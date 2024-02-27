type Observation = {
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

// TypeScript type for Patient
type Patient = {
  id: string;
  client_id: string;
  birthday: string;
  gender: string;
  ethnicity: string;
  created_at: string;
  updated_at: string;
  observations: Observation[];
};

export function patientsResponse(): Patient[] {
  return [
    {
      id: '1',
      client_id: 'client001',
      birthday: '1990-05-15T00:00:00Z',
      gender: 'Male',
      ethnicity: 'Caucasian',
      created_at: '2024-02-27T12:00:00Z',
      updated_at: '2024-02-27T12:00:00Z',
      observations: [
        {
          id: '101',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.8,
          chloride: 100,
          fasting_glucose: 80,
          potassium: 4,
          sodium: 140,
          total_calcium: 9.2,
          total_protein: 7.5,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '102',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.9,
          chloride: 98,
          fasting_glucose: 85,
          potassium: 4.2,
          sodium: 138,
          total_calcium: 9.5,
          total_protein: 7.8,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '103',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.7,
          chloride: 102,
          fasting_glucose: 78,
          potassium: 3.8,
          sodium: 142,
          total_calcium: 9.0,
          total_protein: 7.2,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
      ],
    },
    {
      id: '2',
      client_id: 'client002',
      birthday: '1985-08-21T00:00:00Z',
      gender: 'Female',
      ethnicity: 'Asian',
      created_at: '2024-02-27T12:00:00Z',
      updated_at: '2024-02-27T12:00:00Z',
      observations: [
        {
          id: '104',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 1.2,
          chloride: 105,
          fasting_glucose: 88,
          potassium: 4.5,
          sodium: 137,
          total_calcium: 9.8,
          total_protein: 8.0,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '105',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 1.0,
          chloride: 100,
          fasting_glucose: 90,
          potassium: 4.8,
          sodium: 135,
          total_calcium: 10.0,
          total_protein: 8.2,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '106',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 1.1,
          chloride: 98,
          fasting_glucose: 92,
          potassium: 4.2,
          sodium: 139,
          total_calcium: 9.6,
          total_protein: 7.5,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
      ],
    },
    {
      id: '3',
      client_id: 'client003',
      birthday: '1978-12-10T00:00:00Z',
      gender: 'Non-Binary',
      ethnicity: 'African American',
      created_at: '2024-02-27T12:00:00Z',
      updated_at: '2024-02-27T12:00:00Z',
      observations: [
        {
          id: '107',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.8,
          chloride: 103,
          fasting_glucose: 82,
          potassium: 4.0,
          sodium: 141,
          total_calcium: 9.3,
          total_protein: 7.7,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '108',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.9,
          chloride: 101,
          fasting_glucose: 84,
          potassium: 4.1,
          sodium: 138,
          total_calcium: 9.7,
          total_protein: 7.9,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
        {
          id: '109',
          date_testing: '2024-02-27T12:00:00Z',
          creatine: 0.7,
          chloride: 104,
          fasting_glucose: 80,
          potassium: 3.9,
          sodium: 140,
          total_calcium: 9.1,
          total_protein: 7.4,
          creatine_unit: 'mg/dL',
          chloride_unit: 'mmol/L',
          fasting_glucose_unit: 'mg/dL',
          potassium_unit: 'mmol/L',
          sodium_unit: 'mmol/L',
          total_calcium_unit: 'mg/dL',
          total_protein_unit: 'g/dL',
        },
      ],
    },
  ];
}
