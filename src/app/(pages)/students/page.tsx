'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/DataTable';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

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
    accessorKey: 'user',
    header: 'User',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
];

export default function Students() {
  const students = useSelector((state: RootState) => state.students.students);
  return (
    <Container className='page-container'>
      <Title title='students' />
      <DataTable columns={columns} data={students} />
    </Container>
  );
}
