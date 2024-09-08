import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/DataTable';

type StudentsProps = {
  id: string;
  name: string;
  age: number;
};

export const columns: ColumnDef<StudentsProps>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
];
const data: StudentsProps[] = [
  {
    id: 'S001',
    name: 'Alice Johnson',
    age: 20,
  },
  {
    id: 'S002',
    name: 'Bob Smith',
    age: 22,
  },
  {
    id: 'S003',
    name: 'Charlie Brown',
    age: 19,
  },
  {
    id: 'S004',
    name: 'David Williams',
    age: 21,
  },
  {
    id: 'S005',
    name: 'Eva amber',
    age: 22,
  },
  {
    id: 'S001',
    name: 'Alice Johnson',
    age: 20,
  },
  {
    id: 'S002',
    name: 'Bob Smith',
    age: 22,
  },
  {
    id: 'S003',
    name: 'Charlie Brown',
    age: 19,
  },
  {
    id: 'S004',
    name: 'David Williams',
    age: 21,
  },
  {
    id: 'S005',
    name: 'Eva amber',
    age: 22,
  },
  {
    id: 'S001',
    name: 'Alice Johnson',
    age: 20,
  },
  {
    id: 'S002',
    name: 'Bob Smith',
    age: 22,
  },
  {
    id: 'S003',
    name: 'Charlie Brown',
    age: 19,
  },
  {
    id: 'S004',
    name: 'David Williams',
    age: 21,
  },
  {
    id: 'S005',
    name: 'Eva amber',
    age: 22,
  },
];
export default function Students() {
  return (
    <Container className='page-container'>
      <Title title='students' />
      <DataTable columns={columns} data={data} />
    </Container>
  );
}
