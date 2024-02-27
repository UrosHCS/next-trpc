import { getPatients } from '../patient/repository';
import { PatientResponse } from '@/types';

export async function patientsResponse(): Promise<PatientResponse[]> {
  const patients = await getPatients();

  return patients.map<PatientResponse>(patient => {
    return {
      id: patient.id,
      birthday: patient.birthday,
      ethnicity: patient.ethnicity,
      gender: patient.gender,
      observations: patient.Observation.map(observation => {
        return {
          id: observation.id,
          date_testing: observation.date_testing,
          creatine: observation.creatine,
          chloride: observation.chloride,
          fasting_glucose: observation.fasting_glucose,
          potassium: observation.potassium,
          sodium: observation.sodium,
          total_calcium: observation.total_calcium,
          total_protein: observation.total_protein,
          creatine_unit: observation.creatine_unit,
          chloride_unit: observation.chloride_unit,
          fasting_glucose_unit: observation.fasting_glucose_unit,
          potassium_unit: observation.potassium_unit,
          sodium_unit: observation.sodium_unit,
          total_calcium_unit: observation.total_calcium_unit,
          total_protein_unit: observation.total_protein_unit,
        };
      }),
    };
  });
}
