import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React from 'react';

const allTimetableData = [
  {
    subject: 'math',
    class: 'class 1',
    day: 'monday',
    time: '08:00 - 09:00',
  },
  {
    subject: 'english',
    class: 'class 2',
    day: 'tuesday',
    time: '10:00 - 11:00',
  },
  {
    subject: 'science',
    class: 'class 3',
    day: 'wednesday',
    time: '12:00 - 13:00',
  },
];
export default function TileTable() {
  return (
    <Container className='page-container'>
      <Title title='timetable' />
      <form className='form'>
        <Input type='number' placeholder='enter class ID' />
        <Input type='number' placeholder='enter subject ID' />
        <Input placeholder='enter day' />
        <Input placeholder='enter start time' />
        <Input placeholder='enter end time' />
        <Button>create timetable</Button>
      </form>

      <section className='page-section-grid'>
        {allTimetableData.map((item, index) => (
          <div className='page-section-div'>
            <h4>
              <span className=' text-black font-semibold capitalize flex flex-col gap-2'>
                {item.subject}
              </span>
              <span className=' capitalize'>{item.class}</span>
            </h4>

            <span className=' text-sm'>Day: {item.day}</span>
            <span className=' text-sm'>Time: {item.time}</span>
          </div>
        ))}
      </section>
    </Container>
  );
}
