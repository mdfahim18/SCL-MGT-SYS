'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

type CourseType = {
  title: string;
  assignmentNo: {
    number: string;
    date: string;
    desc?: string;
  }[];
};
const allCoursesData: CourseType[] = [
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        number: 'Assignment 1',
        date: 'Due: 2024-08-01',
      },
    ],
  },
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        number: 'Assignment 2',
        date: 'Due: 2024-08-01',
      },
    ],
  },
  {
    title: 'Learn the basics of programming with JavaScript.',
    assignmentNo: [
      {
        number: 'Assignment 3',
        date: 'Due: 2024-08-01',
      },
    ],
  },
];
export default function Courses() {
  const { data: session, status } = useSession();

  const [newCourses, setNewCourses] = useState<CourseType[]>(allCoursesData);
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'unauthenticated') {
      alert('You must be logged in to create an announcement.');
      return;
    }

    const newCoursesData: CourseType = {
      title,
      assignmentNo: [
        {
          number: `Assignment ${newCourses.length + 1}`,
          date: format(new Date(), 'yyyy-mm-dd'),
          desc: desc ? desc : 'Description Nothing',
        },
      ],
    };

    setNewCourses([...newCourses, newCoursesData]);
    alert('Course added successfully');
  };
  return (
    <Container className='page-container'>
      <Title title='courses' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Course name'
          required
        />
        <Textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='h-[80px]'
          placeholder='Course numberription'
        />
        <Button type='submit'>create course</Button>
      </form>
      <Title title='all courses' />
      <section className='page-section-grid'>
        {newCourses.map((item, index) => (
          <div key={index} className='page-section-div'>
            <p className='text-sm capitalize'>{item.title}</p>
            {item.assignmentNo.map((i, ind) => (
              <div key={ind}>
                <div className='page-section-div border border-gray-500 m-2 text-center'>
                  <h4 className='text-black text-sm'>{i.number}</h4>
                  <p className=' text-xs'>{i.desc}</p>
                  <p className=' text-xs'>Due: {i.date}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
}
