import { patientsResponse } from '../responses/patients-response';
import { publicProcedure, router } from '../trpc';
import { prisma } from '@/server/prisma';
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const patientRouter = router({
  list: publicProcedure.query(async () => {
    // get data from microservice

    // transform data

    // save to database

    // return transformed data

    return patientsResponse();
  }),
});
