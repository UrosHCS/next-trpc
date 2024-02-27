'use client';

import { PatientsTable } from '@/components/patients-table';
import { trpc } from '@/utils/trpc';
import { useEffect } from 'react';

function PatientsComponent() {
  // I wanted to pause trpc.patient.list.useQuery() until the first refreshData.mutate() is done,
  // but I couldn't figure out how to do it. The trpc.patient.list.useQuery doesn't accept { enabled: false }
  const { data, isLoading, error, refetch } = trpc.patient.list.useQuery();
  const refreshData = trpc.patient.refresh.useMutation();

  // Initial Data Fetching and Storage
  useEffect(() => {
    refreshData.mutate();
  }, []);

  // Refresh data when mutation is successful
  useEffect(() => {
    if (refreshData.isSuccess) {
      refetch();
    }
  }, [refreshData.isSuccess, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Error: no data</div>;
  }

  return (
    <div>
      <button className="mb-2 border border-gray-400 p-2" disabled={isLoading} onClick={() => refreshData.mutate()}>
        Refetch
      </button>
      <PatientsTable patients={data} />
    </div>
  );
}

export const Patients = trpc.withTRPC(PatientsComponent);
