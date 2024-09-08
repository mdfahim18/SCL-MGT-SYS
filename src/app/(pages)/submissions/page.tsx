import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const submissionsData = [
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
  return (
    <Container className='page-container'>
      <Title title='submission' />
      <form className='form'>
        <Textarea className='h-15' placeholder='Content' />
        <Input placeholder='Assignment ID' />
        <Input placeholder='Student ID' />
        <Button>submit assignment</Button>
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
