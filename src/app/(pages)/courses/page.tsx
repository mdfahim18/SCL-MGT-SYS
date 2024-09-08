import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const allCoursesData = [
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        firts: 'Assignment 1',
        firstDate: 'Due: 2024-08-01',
        second: 'Assignment 1',
        secondsData: '2024-08-15',
      },
    ],
  },
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        firts: 'Assignment 1',
        firstDate: 'Due: 2024-08-01',
        second: 'Assignment 1',
        secondsData: '2024-08-15',
      },
    ],
  },
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        firts: 'Assignment 1',
        firstDate: 'Due: 2024-08-01',
        second: 'Assignment 1',
        secondsData: '2024-08-15',
      },
    ],
  },
];
export default function Courses() {
  return (
    <Container className='page-container'>
      <Title title='courses' />
      <form className='form'>
        <Input placeholder='Course name' />
        <Textarea className='h-[80px]' placeholder='Course Description' />
        <Button>create course</Button>
      </form>
      <Title title='all courses' />
      <section className='page-section-grid'>
        {allCoursesData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <p className='text-sm'>{item.title}</p>
            {item.assignmentNo.map((i, ind) => (
              <div key={ind}>
                <div className='page-section-div border border-gray-500 m-2 text-center'>
                  <h4 className='text-black text-sm'>{i.firts}</h4>
                  <p className=' text-xs'>{i.firstDate}</p>
                </div>
                <div className='page-section-div border border-gray-500 m-2 text-center'>
                  <h4 className='text-black text-sm'>{i.firts}</h4>
                  <p className=' text-xs'>
                    <span className=' text-black font-semibold'>Due: </span>
                    {i.firstDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
}
