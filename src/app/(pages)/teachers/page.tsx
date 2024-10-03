import Container from '@/components/Container';
import { DataTable } from '@/components/DataTable';
import Title from '@/components/Title';
import React from 'react';

type TeachersProps = {
  id: string;
  name: string;
  subject: string;
  age: number;
};

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
      <table className=' w-full px-2 py-3 border border-gray-500'>
        <tr>
          <th className=' border border-gray-500'>ID</th>
          <th className=' border border-gray-500'>Name</th>
          <th className=' border border-gray-500'>Subject</th>
          <th className=' border border-gray-500'>Age</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index} className=' text-center border border-gray-500'>
            <td className=' border border-gray-500'>{item.id}</td>
            <td className=' border border-gray-500'>{item.name}</td>
            <td className=' border border-gray-500'>{item.subject}</td>
            <td className=' border border-gray-500'>{item.age}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
