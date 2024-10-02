'use client';

import { RootState } from '@/app/store';
import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

type MessageProps = {
  from: string;
  to: string;
  message: string;
  date: string;
};

const initialMessageData: MessageProps[] = [
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
  const students = useSelector((state: RootState) => state.students.students);

  const [messageData, setMessageData] =
    useState<MessageProps[]>(initialMessageData);
  const [fromUser, setFromUser] = useState<string>('');
  const [toUser, setToUser] = useState<string>('');
  const [messageContent, setMessageContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const senderExists = students.find((student) => student.user === fromUser);
    const receiverExists = students.find((student) => student.user === toUser);

    if (!senderExists || !receiverExists) {
      setError('Both sender and receiver must be valid students.');
    } else {
      const newMessage: MessageProps = {
        from: fromUser || 'Unknown',
        to: toUser || 'Unknown',
        message: messageContent || 'No message',
        date: format(new Date(), 'yyyy-mm-dd'),
      };

      setMessageData([...messageData, newMessage]);

      setFromUser('');
      setToUser('');
      setMessageContent('');
      setError(null);
    }
  };
  return (
    <Container className='page-container'>
      <Title title='messages' />
      <form onSubmit={handleSendMessage} className='form'>
        <Input
          value={fromUser}
          onChange={(e) => setFromUser(e.target.value)}
          placeholder='Sender ID'
          required
          className=' lowercase placeholder:capitalize'
        />
        <Input
          value={toUser}
          onChange={(e) => setToUser(e.target.value)}
          placeholder='Receiver ID'
          required
          className=' lowercase placeholder:capitalize'
        />
        <Textarea
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder='Message Content'
          required
        />
        {error && <p className='text-red-500'>{error}</p>}{' '}
        <Button type='submit'>send message</Button>
      </form>
      <Title title='recent message' />
      <section className='page-section-grid'>
        {messageData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h2>
              <span className=' text-black'>{item.from}</span> to{' '}
              <span>{item.to}</span>:
            </h2>
            <p className=' text-sm'>{item.message}</p>
            <p className=' text-gray-500 text-sm'>{item.date}</p>
          </div>
        ))}
      </section>
    </Container>
  );
}
