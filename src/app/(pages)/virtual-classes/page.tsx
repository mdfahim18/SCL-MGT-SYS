'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Target } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

type VirtualClassesProps = {
  courseId: number | undefined;
  meetingLink: string;
  schedule: string;
  course: string;
};
const initialVirtualClasses: VirtualClassesProps[] = [
  {
    courseId: 1,
    meetingLink: '/',
    schedule: '2024-08-01T10:00:00Z',
    course: 'math',
  },
  {
    courseId: 2,
    meetingLink: '/',
    schedule: '2024-08-03T16:00:00Z',
    course: 'english',
  },
  {
    courseId: 3,
    meetingLink: '/',
    schedule: '2024-08-01T10:00:00Z',
    course: 'science',
  },
];
export default function VirtualClasses() {
  const [virtualClasses, setvirtualClasses] = useState<VirtualClassesProps[]>(
    initialVirtualClasses
  );
  console.log(virtualClasses);

  const [courseId, setCourseID] = useState<number | undefined>(undefined);
  const [meetingLink, setMeetingLink] = useState<string>('https://zoom.us/');
  const [date, setDate] = useState<Date>();
  const [course, setCourse] = useState<string>('');

  const [updateCourseId, setUpdateCourseId] = useState<number | undefined>(
    undefined
  );
  const [newDate, setNewDate] = useState<Date>();
  const [newCourse, setNewCourse] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newVirtualClasses: VirtualClassesProps = {
      courseId,
      meetingLink,
      schedule: date ? format(date, 'PPP') : '',
      course,
    };

    if (newVirtualClasses) {
      setvirtualClasses([...virtualClasses, newVirtualClasses]);
      alert('Virtual Classes Added');
      setCourseID(undefined);
      setMeetingLink('');
      setCourse('');
    }
  };

  const handleUpdatedShedule = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updateClasses = virtualClasses.map((item) => {
      if (item.courseId === updateCourseId) {
        return {
          ...item,
          schedule: newDate ? format(newDate, 'PPP') : item.schedule,
          course: newCourse || item.course,
        };
      }
      return item;
    });

    setvirtualClasses(updateClasses);
    alert('Schedule updated!');
    setUpdateCourseId(undefined);
    setNewDate(undefined);
    setNewCourse('');
  };
  return (
    <Container className='page-container'>
      <Title title='virtual classes' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder='meeting'
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Input
          value={courseId}
          onChange={(e) => setCourseID(Number(e.target.value))}
          type='number'
          placeholder='Course ID'
        />
        <Button type='submit'>create virtual class</Button>
      </form>

      <form onSubmit={handleUpdatedShedule} className='form'>
        <Input
          value={updateCourseId || ''}
          onChange={(e) => setUpdateCourseId(Number(e.target.value))}
          type='number'
          placeholder='Enter Course ID to update'
        />
        <Input
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder='Meeting'
        />

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {newDate ? format(newDate, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={newDate}
              onSelect={setNewDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button>update schedule</Button>
      </form>
      <Title title='recent virtual classes' />
      <section className='page-section-grid'>
        {virtualClasses.map((item, index) => (
          <div key={index} className='page-section-div'>
            <p>
              Meeting Link:{' '}
              <a
                href={item.meetingLink}
                className=' text-amber-500 underline text-sm'
              >
                Join
              </a>
            </p>
            <p>Schedule: {item.schedule}</p>
            <p>Course: {item.course}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
