'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { makeAssignment, makeAssignmentToGrade } from '@/lib/assignmentsSlice';

type Submission = {
  submitby: string;
  submitat: string;
  content: string;
  grade: number;
  feedback: string;
};

type TaskProps = {
  id: number;
  title: string;
  task: string;
  date: string | undefined;
  course: string;
  submission: Submission[];
};

export default function Assignments() {
  const { data: session, status } = useSession();
  const assignments = useSelector(
    (state: RootState) => state.assignments.assignments
  );
  const dispatch = useDispatch();

  console.log(assignments);

  const [title, setTitle] = useState<string>('');
  const [task, setTask] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [course, setCourse] = useState<string>('');

  const [gradeID, setGradeID] = useState<number | undefined>(undefined);
  const [grade, setGrade] = useState<number | undefined>(undefined);
  const [feedback, setFeedback] = useState<string>('');

  const formattedDate = date ? format(date, 'yyyy-mm-dd') : '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'unauthenticated') {
      alert('You must be logged in to create an announcement.');
      return;
    }

    const newAssignmentData: TaskProps = {
      id: assignments.length + 1,
      title,
      task,
      date: formattedDate,
      course,
      submission: [],
    };

    dispatch(makeAssignment(newAssignmentData));
    alert('Assignment added successfully');
    setTitle('');
    setTask('');
    setDate(undefined);
    setCourse('');
  };

  const handleGradeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gradeID || !grade || !feedback) {
      alert('Please provide all grading details');
      return;
    }

    dispatch(
      makeAssignmentToGrade({
        id: gradeID,
        grade: grade,
        feedback: feedback,
        submitby: 'student 1',
      })
    );

    alert('Submission graded successfully');
    setGradeID(undefined);
    setGrade(undefined);
    setFeedback('');
  };

  return (
    <Container className='page-container'>
      <Title title='Assignments' />
      <div className=' flex justify-between w-full flex-col sm:flex-row gap-3'>
        <form onSubmit={handleSubmit} className='form'>
          <Input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title'
          />
          <Textarea
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder='Description'
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
          <Select onValueChange={setCourse}>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select Course ID' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Mathematics'>Mathematics</SelectItem>
              <SelectItem value='History'>History</SelectItem>
            </SelectContent>
          </Select>
          <Button type='submit'>create assignment</Button>
        </form>

        <form onSubmit={handleGradeSubmit} className='form'>
          <Input
            value={gradeID}
            onChange={(e) => setGradeID(Number(e.target.value))}
            required
            placeholder='Submission ID'
          />
          <Input
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            required
            placeholder='Grade'
            min={0}
            max={100}
          />
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder='Feedback'
          />

          <Button type='submit'>grade submission</Button>
        </form>
      </div>
      <Title title='all assignments' />
      <section className='page-section-grid'>
        {assignments.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h3 className=' text-black font-semibold capitalize'>
              {item.title}
            </h3>
            <p className=' text-sm'>{item.task}</p>
            <p>
              <span className='text-black text-sm'>Due Date: </span> {item.date}
            </p>
            <p>
              <span className='text-black text-sm'>Course: </span>
              {item.course}
            </p>
            {item.submission.map((i, ind) => (
              <div
                key={ind}
                className='page-section-div border border-gray-500 m-3'
              >
                <h4 className=' text-black font-semibold'>Submissions</h4>
                <p>
                  <span className='text-black text-sm'>Submitted by: </span>
                  {i.submitby}
                </p>
                <p>
                  <span className='text-black text-sm'>Submitted At: </span>
                  {i.submitat}
                </p>
                <p>
                  <span className='text-black text-sm'>Content: </span>
                  {i.content}
                </p>
                <p>
                  <span className='text-black text-sm'>Grade: </span>
                  {i.grade}
                </p>
                <p>
                  <span className='text-black text-sm'>Grade: </span>
                  {i.feedback}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </Container>
  );
}
