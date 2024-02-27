/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { patientRouter } from './patient';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  patient: patientRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
