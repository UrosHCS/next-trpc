'use client';

import { PatientsTable } from '@/components/patients-table';
import { trpc } from '@/utils/trpc';
import { Suspense } from 'react';

function PatientsComponent() {
  const [patients, patientsQuery] = trpc.patient.list.useSuspenseQuery();
  console.log('asdasdasda');
  if (patientsQuery.error) {
    return <div>Error: {patientsQuery.error.message}</div>;
  }

  return (
    <div>
      <button disabled={!patientsQuery.isPending} onClick={() => patientsQuery.refetch()}>
        Refetch data
      </button>
      <h1>Patients</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PatientsTable patients={patients} />
      </Suspense>
    </div>
  );
}

export const Patients = trpc.withTRPC(PatientsComponent);
