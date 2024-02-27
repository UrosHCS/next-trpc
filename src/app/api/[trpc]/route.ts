import { createContext } from '@/server/context';
import { appRouter } from '@/server/routers/app';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api',
    req,
    router: appRouter,
    createContext,
    batching: {
      enabled: true,
    },
    onError({ error }) {
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        // send to bug reporting
        console.error('Something went wrong', error);
      }
    },
  });

export { handler as GET, handler as POST };
