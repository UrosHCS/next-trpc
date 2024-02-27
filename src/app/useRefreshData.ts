import { trpc } from '@/utils/trpc';
import { useRef } from 'react';

const obj = {
  refreshData: () => trpc.patient.refresh.useMutation(),
};

export function useRefreshData() {
  const res = useRef();

  return res.current;
}
