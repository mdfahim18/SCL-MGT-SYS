'use client';

import { RootState } from '@/app/store';
import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

type SubmissionsProps = {
  subject: string;
  submittedby: string;
  submittedat: string;
  content: string;
};
const submissionsData: SubmissionsProps[] = [
  {
    subject: 'math assignment',
    submittedby: 'student 1',
    submittedat: '2024-07-30T10:00:00Z',
    content: 'Here is my math assignment.',
  },
  {
    subject: 'english essay',
    submittedby: 'student 2',
    submittedat: '2024-07-30T10:00:00Z',
    content: 'This is my essay on Shakespeare.',
  },
  {
    subject: 'science project',
    submittedby: 'student 3',
    submittedat: '2024-07-30T10:00:00Z',
    content: 'Science project on renewable energy.',
  },
];
export default function Submissions() {
  const [submissions, setSumissions] =
    useState<SubmissionsProps[]>(submissionsData);
  const [submittedby, setSubmittedby] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [submittedat, setSubmittedat] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const students = useSelector((state: RootState) => state.students.students);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentExists = students.find(
      (student) => student.user === submittedby
    );
    if (!studentExists) {
      alert('Student not found');
    } else {
    }
  };
  return (
    <Container className='page-container'>
      <Title title='submission' />
      <form onSubmit={handleSubmit} className='form'>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='h-15'
          placeholder='Content'
          required
        />
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder='Assignment ID'
          required
        />
        <Input
          value={submittedby}
          onChange={(e) => setSubmittedby(e.target.value)}
          placeholder='Student ID'
          required
        />
        <Button type='submit'>submit assignment</Button>
      </form>
      <Title title='recent submission' />
      <section className='page-section-grid'>
        {submissionsData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <Title title={item.subject} headerClass=' text-lg' />
            <h4 className=' text-sm'>
              <span className='text-black font-semibold'>Submitted by: </span>
              {item.submittedby}
            </h4>
            <h4 className=' text-sm'>
              <span className='text-black font-semibold'>Submitted at: </span>
              {item.submittedat}
            </h4>
            <h4 className=' text-sm'>
              <span className='text-black font-semibold'>Content: </span>
              {item.content}
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
