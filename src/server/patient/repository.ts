import { prisma } from '../prisma';
import { PatientData } from './validator';
import { Prisma } from '@prisma/client';

const Gender = {
  1: 'male',
  2: 'female',
};

const Ethnicity = {
  1: 'white',
  2: 'black',
  3: 'asian',
  4: 'hispanic',
  5: 'other',
};

export async function truncateDatabase() {
  await prisma.observation.deleteMany();
  return prisma.patient.deleteMany();
}

export async function getPatients() {
  return prisma.patient.findMany({
    include: {
      Observation: true,
    },
  });
}

export async function savePatients(data: PatientData) {
  const observations: Prisma.ObservationCreateManyInput[] = [];

  await Promise.all(
    data.map(async oneClientObservations => {
      if (oneClientObservations.length === 0) {
        return;
      }

      const { client_id, date_birthdate, gender, ethnicity } = oneClientObservations[0];

      const patient = await prisma.patient.create({
        select: {
          id: true,
        },
        data: {
          client_id,
          birthday: date_birthdate,
          gender: Gender[gender],
          ethnicity: Ethnicity[ethnicity],
        },
      });

      oneClientObservations.forEach(observation => {
        observations.push({
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
          patient_id: patient.id,
        });
      });
    }),
  );

  return prisma.observation.createMany({
    data: observations,
  });
}
