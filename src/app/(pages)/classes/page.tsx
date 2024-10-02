'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

type ClassesProps = {
  sub: string;
  teacher: string;
};
const allClassesData: ClassesProps[] = [
  {
    sub: 'mathematics 101',
    teacher: 'John Smith',
  },
  {
    sub: 'Science 102',
    teacher: 'Jane Doe',
  },
  {
    sub: 'History 103',
    teacher: 'Michael Johnson',
  },
  {
    sub: 'English 104',
    teacher: 'Emily Davis',
  },
  {
    sub: 'Geography 105',
    teacher: 'David Wilson',
  },
  {
    sub: 'Physics 106',
    teacher: 'Samuel Lee',
  },
  {
    sub: 'Chemistry 107',
    teacher: 'Alicia Brown',
  },
  {
    sub: 'Biology 108',
    teacher: 'Christopher Taylor',
  },
];
export default function Classes() {
  const [newClasses, setNewClasses] = useState<ClassesProps[]>(allClassesData);
  const [sub, setSub] = useState<string>('');
  const [teacher, setTeacher] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newClassesData: ClassesProps = {
      sub: sub || 'Untitled class',
      teacher: teacher || 'Unknown Teacher',
    };
    setNewClasses([...newClasses, newClassesData]);
    alert('Class added successfully');
    setSub('');
    setTeacher('');
  };
  return (
    <Container className='page-container'>
      <Title title='classes' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={sub}
          onChange={(e) => setSub(e.target.value)}
          placeholder='Class Name'
          required
        />
        <Input
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
          placeholder='Teacher ID'
          required
        />
        <Button type='submit'>add class</Button>
      </form>
      <Title title='all classes' />
      <section className='page-section-grid'>
        {newClasses.map((item, index) => (
          <div key={index} className='page-section-div capitalize'>
            <h4 className=' text-black text-sm capitalize font-semibold'>
              {item.sub}
            </h4>
            <p className='text-xs'>Teacher: {item.teacher}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
