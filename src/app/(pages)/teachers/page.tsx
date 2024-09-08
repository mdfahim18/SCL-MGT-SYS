import Container from '@/components/Container';
import { DataTable } from '@/components/DataTable';
import Title from '@/components/Title';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

type TeachersProps = {
  id: string;
  name: string;
  subject: string;
  age: number;
};

export const columns: ColumnDef<TeachersProps>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'subject',
    header: 'Subject',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
];

const data: TeachersProps[] = [
  {
    id: 'T001',
    name: 'John Smith',
    subject: 'Mathematics',
    age: 40,
  },
  {
    id: 'T002',
    name: 'Jane Doe',
    subject: 'Science',
    age: 35,
  },
  {
    id: 'T003',
    name: 'Michael Johnson',
    subject: 'History',
    age: 45,
  },
  {
    id: 'T004',
    name: 'Emily Davis',
    subject: 'English',
    age: 30,
  },
  {
    id: 'T005',
    name: 'David Wilson',
    subject: 'Geography',
    age: 50,
  },
];
export default function Teachers() {
  return (
    <Container className='page-container'>
      <Title title='teachers' />
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
