'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

type SubjectsProps = {
  subject: string;
  class: string;
};
const subjectsData: SubjectsProps[] = [
  {
    subject: 'Mathematics',
    class: 'class 1',
  },
  {
    subject: 'English',
    class: 'class 2',
  },
  {
    subject: 'Science',
    class: 'class 3',
  },
];
export default function Subjects() {
  const [subjects, setSubjects] = useState<SubjectsProps[]>(subjectsData);
  const [subjectName, setSubjectName] = useState<string>('');
  const [classID, setClassID] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSubjects: SubjectsProps = {
      subject: subjectName,
      class: classID,
    };
    setSubjects([...subjects, newSubjects]);
  };
  return (
    <Container className='page-container'>
      <Title title='subjects' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder='subject name'
          required
        />
        <Input
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          placeholder='class ID'
          required
        />
        <Button type='submit'>create subject</Button>
      </form>
      <section className='page-section-grid'>
        {subjects.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h2 className=' text-black font-semibold capitalize'>
              {item.subject}
            </h2>
            <p>{item.class}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
