import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const subjectsData = [
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
  return (
    <Container className='page-container'>
      <Title title='subjects' />
      <form className='form'>
        <Input placeholder='subject name' />
        <Input placeholder='class ID' />
        <Button>create subject</Button>
      </form>
      <section className='page-section-grid'>
        {subjectsData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h2 className=' text-black font-semibold'>{item.subject}</h2>
            <p>{item.class}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
