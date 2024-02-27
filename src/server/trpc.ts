import { transformer } from '@/utils/transformer';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context().create({
  /**
   * @link https://trpc.io/docs/v11/data-transformers
   */
  transformer,
  /**
   * @link https://trpc.io/docs/v11/error-formatting
   */
  errorFormatter({ shape }) {
    return shape;
  },
});

/**
 * Create a router
 * @link https://trpc.io/docs/v11/router
 */
export const router = t.router;

/**
 * Create an unprotected procedure
 * @link https://trpc.io/docs/v11/procedures
 **/
export const publicProcedure = t.procedure;
