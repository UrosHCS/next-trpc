import { savePatients, truncateDatabase } from '../patient/repository';
import { patientsResponse } from '../patient/response';
import { patientDataSchema } from '../patient/validator';
import { publicProcedure, router } from '../trpc';
import { TRPCError } from '@trpc/server';

export const patientRouter = router({
  refresh: publicProcedure.mutation(async () => {
    // get data from microservice
    const response = await fetch('http://localhost:3210?10');

    if (!response.ok) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to fetch data from source',
      });
    }

    const data = await response.json();

    // validate data
    const validationResult = patientDataSchema.safeParse(data);

    if (!validationResult.success) {
      console.error(validationResult.error.errors);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Invalid data from source',
      });
    }

    await truncateDatabase();

    await savePatients(validationResult.data);
  }),

  list: publicProcedure.query(async () => {
    return patientsResponse();
  }),
});
