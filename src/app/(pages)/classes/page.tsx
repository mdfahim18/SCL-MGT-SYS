import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const allClassesData = [
  {
    sub: 'mathematics',
    code: '101',
    teacher: 'John Smith',
  },
  {
    sub: 'Science',
    code: '101',
    teacher: 'Jane Doe',
  },
  {
    sub: 'History',
    code: '101',
    teacher: 'Michael Johnson',
  },
  {
    sub: 'English',
    code: '101',
    teacher: 'Emily Davis',
  },
  {
    sub: 'Geography',
    code: '201',
    teacher: 'David Wilson',
  },
  {
    sub: 'Physics',
    code: '201',
    teacher: 'Samuel Lee',
  },
  {
    sub: 'Chemistry',
    code: '201',
    teacher: 'Alicia Brown',
  },
  {
    sub: 'Biology',
    code: '201',
    teacher: 'Christopher Taylor',
  },
];
export default function Classes() {
  return (
    <Container className='page-container'>
      <Title title='classes' />
      <form className='form'>
        <Input placeholder='Class Name' />
        <Input placeholder='Teacher ID' />
        <Button>add class</Button>
      </form>
      <Title title='all classes' />
      <section className='page-section-grid'>
        {allClassesData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h4 className=' text-black text-sm capitalize font-semibold'>
              {item.sub} {item.code}
            </h4>
            <p className='text-xs'>Teacher: {item.teacher}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
