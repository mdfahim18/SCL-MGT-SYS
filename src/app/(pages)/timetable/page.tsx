'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

type TimeTableProps = {
  subject: string;
  _class: string;
  day: string;
  startTime: string;
  endTime: string;
};
const allTimetableData: TimeTableProps[] = [
  {
    subject: 'math',
    _class: 'class 1',
    day: 'monday',
    startTime: '08:00',
    endTime: '09:00',
  },
  {
    subject: 'english',
    _class: 'class 2',
    day: 'tuesday',
    startTime: '10:00',
    endTime: '11:00',
  },
  {
    subject: 'science',
    _class: 'class 3',
    day: 'wednesday',
    startTime: '12:00',
    endTime: '13:00',
  },
];
export default function TileTable() {
  const [timeTable, setTimeTable] =
    useState<TimeTableProps[]>(allTimetableData);
  const [subject, setSubject] = useState<string>('');
  const [_class, setClass] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTimeTable: TimeTableProps = {
      subject,
      _class,
      day,
      startTime,
      endTime,
    };
    if (!subject || !_class || !day || !startTime || !endTime) {
      alert('Please provie all details');
    } else {
      setTimeTable([...timeTable, newTimeTable]);
      setSubject('');
      setClass('');
      setDay('');
      setStartTime('');
      setEndTime('');
      alert('Time Table Added');
    }
  };
  return (
    <Container className='page-container'>
      <Title title='timetable' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={_class}
          onChange={(e) => setClass(e.target.value)}
          // type='number'
          placeholder='enter class ID'
        />
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          // type='number'
          placeholder='enter subject ID'
        />
        <Input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder='enter day'
        />
        <Input
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder='enter start time'
        />
        <Input
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder='enter end time'
        />
        <Button type='submit'>create timetable</Button>
      </form>

      <section className='page-section-grid'>
        {timeTable.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h4>
              <span className=' text-black font-semibold capitalize flex flex-col gap-2'>
                {item.subject}
              </span>
              <span className=' capitalize'>{item._class}</span>
            </h4>

            <span className=' text-sm'>Day: {item.day}</span>
            <span className=' text-sm'>
              Time: {item.startTime} - {item.endTime}
            </span>
          </div>
        ))}
      </section>
    </Container>
  );
}
