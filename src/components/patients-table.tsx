import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PatientResponse } from '@/types';

type Props = {
  patients: PatientResponse[];
};

export function PatientsTable({ patients }: Props) {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Patient</TableHead>
            <TableHead>Creatine</TableHead>
            <TableHead>Chloride</TableHead>
            <TableHead>Fasting glucose</TableHead>
            <TableHead>Potassium</TableHead>
            <TableHead>Sodium</TableHead>
            <TableHead>Total calcium</TableHead>
            <TableHead>Total protein</TableHead>
          </TableRow>
        </TableHeader>
        <PatientRows patients={patients} />
      </Table>
    </div>
  );
}

function PatientRows({ patients }: Props) {
  return (
    <TableBody>
      {patients.map(patient =>
        patient.observations.map((observation, index) => {
          return (
            <TableRow key={observation.id}>
              {index === 0 && (
                <TableCell className="flex gap-2 font-medium">
                  <div>{patient.birthday}</div>
                  <div>{patient.ethnicity}</div>
                  <div>{patient.gender}</div>
                </TableCell>
              )}
              <TableCell>
                {observation.creatine} {observation.creatine_unit}
              </TableCell>
              <TableCell>
                {observation.chloride} {observation.chloride_unit}
              </TableCell>
              <TableCell>
                {observation.fasting_glucose} {observation.fasting_glucose_unit}
              </TableCell>
              <TableCell>
                {observation.potassium} {observation.potassium_unit}
              </TableCell>
              <TableCell>
                {observation.sodium} {observation.sodium_unit}
              </TableCell>
              <TableCell>
                {observation.total_calcium} {observation.total_calcium_unit}
              </TableCell>
              <TableCell>
                {observation.total_protein} {observation.total_protein_unit}
              </TableCell>
            </TableRow>
          );
        }),
      )}
    </TableBody>
  );
}
