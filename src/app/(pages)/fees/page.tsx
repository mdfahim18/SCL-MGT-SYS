'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
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

const feesData = [
  {
    user: 'john_doe',
    amount: '100',
    date: '2024-08-01',
    status: 'pending',
  },
  {
    user: 'jane_smit',
    amount: '150.5',
    date: '2024-08-15',
    status: 'paid',
  },
  {
    user: 'alice_johnson',
    amount: '200.75',
    date: '2024-09-01',
    status: 'Overdue',
  },
];
export default function Fees() {
  const [date, setDate] = useState<Date>();

  return (
    <Container className='page-container'>
      <Title title='fees' />
      <div className=' flex justify-between w-full flex-col sm:flex-row gap-3'>
        <form className='form'>
          <Input placeholder='user ID' />
          <Input placeholder='amount' />

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
          <Button>create fee</Button>
        </form>

        <form className='form'>
          <Input placeholder='fee ID' />
          <Input placeholder='status' />
          <Button>update fee status</Button>
        </form>
      </div>

      <Title title='created fees' />
      <section className='page-section-grid'>
        {feesData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <h3>
              <span className=' text-black font-semibold'>User: </span>
              {item.user}
            </h3>
            <h4 className='text-sm'>
              <span className=' text-black font-semibold'>Amount: </span>
              {item.amount}
            </h4>
            <h4 className='text-sm'>
              <span className=' text-black font-semibold'>Due: </span>
              {item.amount}
            </h4>
            <h4 className='text-sm'>
              <span className=' text-black font-semibold'>Status: </span>
              {item.amount}
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
