import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const messageData = [
  {
    from: 'john_doe',
    to: 'jane_smith',
    message: 'Hey Jane, how are you?',
    date: '2024-07-20T10:00:00Z',
  },
  {
    from: 'jane_smith',
    to: 'john_doe',
    message: `Hi John! I'm good, thanks for asking.`,
    date: '2024-07-20T10:00:00Z',
  },
  {
    from: 'john_doe',
    to: 'jane_smith',
    message: 'Great to hear! Do you have any plans for the weekend?',
    date: '2024-07-20T10:00:00Z',
  },
];
export default function Messages() {
  return (
    <Container className='page-container'>
      <Title title='messages' />
      <form className='form'>
        <Input placeholder='Sender ID' />
        <Input placeholder='Reveiver ID' />
        <Textarea placeholder='Message Content' />
        <Button>send message</Button>
        <Title title='recent message' />
        <section className='page-section-grid'>
          {messageData.map((item, index) => (
            <div className='page-section-div'>
              <h2>
                <span className=' text-black'>{item.from}</span> to{' '}
                <span>{item.to}</span>:
              </h2>
              <p className=' text-sm'>{item.message}</p>
              <p className=' text-gray-500 text-sm'>{item.date}</p>
            </div>
          ))}
        </section>
      </form>
    </Container>
  );
}
