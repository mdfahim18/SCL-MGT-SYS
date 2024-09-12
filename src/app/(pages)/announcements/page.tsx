'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

type AnnouncementsDataProps = {
  title: string;
  desc: string;
  date: string;
};

const announcementData: AnnouncementsDataProps[] = [
  {
    title: 'welcome back!',
    desc: 'We hope you had a great summer break',
    date: '2024-07-01T10:00:00Z',
  },
  {
    title: 'exam schedule',
    desc: 'The exam schedule has been released. Please check the portal.',
    date: '2024-07-10T15:30:00Z',
  },
];

export default function Announcements() {
  const { data: session, status } = useSession();

  const [newAnnouncement, setNewAnnouncement] =
    useState<AnnouncementsDataProps[]>(announcementData);
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'unauthenticated') {
      alert('You must be logged in to create an announcement.');
      return;
    }

    const currentDate = new Date().toISOString();

    const newAnnouncementData: AnnouncementsDataProps = {
      title: title || 'Untitled',
      desc: desc || 'No description',
      date: currentDate,
    };

    setNewAnnouncement([...newAnnouncement, newAnnouncementData]);
    setTitle('');
    setDesc('');
  };

  return (
    <Container className='page-container'>
      <Title title='Announcements' />

      <form onSubmit={handleSubmit} className='form'>
        <Input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
        />
        <Textarea
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder='Content'
        />
        <Button type='submit'>Create Announcement</Button>
      </form>

      <Title title='Previous Announcements' />
      <section className='page-section-grid'>
        {newAnnouncement.map((item) => (
          <div key={item.title} className='page-section-div'>
            <Title
              title={item.title}
              para={item.desc}
              headerClass=' text-base text-left'
              descClass=' text-sm text-center'
            />
            <p className='text-xs text-gray-500'>
              Date: {new Date(item.date).toLocaleString()}
            </p>
          </div>
        ))}
      </section>
    </Container>
  );
}
