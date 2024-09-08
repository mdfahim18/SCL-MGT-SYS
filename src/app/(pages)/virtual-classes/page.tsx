'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const recentVirtualClasses = [
  {
    meetingLink: '/',
    schedule: '2024-08-01T10:00:00Z',
    course: 'math',
  },
  {
    meetingLink: '/',
    schedule: '2024-08-03T16:00:00Z',
    course: 'english',
  },
  {
    meetingLink: '/',
    schedule: '2024-08-01T10:00:00Z',
    course: 'science',
  },
];
export default function VirtualClasses() {
  const [date, setDate] = useState<Date>();
  return (
    <Container className='page-container'>
      <Title title='virtual classes' />
      <form className='form'>
        <Input placeholder='meeting' />
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
        <Input type='number' placeholder='Course ID' />
        <Button>create virtual class</Button>
      </form>

      <form className='form'>
        <Input type='number' placeholder='Course ID' />

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
        <Button>update schedule</Button>
      </form>
      <Title title='recent virtual classes' />
      <section className='page-section-grid'>
        {recentVirtualClasses.map((item, index) => (
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
