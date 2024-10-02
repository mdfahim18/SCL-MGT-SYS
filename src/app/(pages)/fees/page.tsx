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
import { useDispatch, useSelector } from 'react-redux';
import { createFee, updateAmount } from '@/lib/feesSlice';
import { RootState } from '@/app/store';

export default function Fees() {
  const fees = useSelector((state: RootState) => state.fees.fees);
  const payments = useSelector((state: RootState) => state.payments.payments);

  const [date, setDate] = useState<Date>();
  const dispatch = useDispatch();
  const [feeData, setFeeData] = useState({
    user: '',
    amount: 0,
    date: '',
  });

  const [updateUser, setUpdateUser] = useState<string>('');
  const [amount, setAmount] = useState<number>();
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleCreateFee = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createFee({
        id: Date.now().toString(),
        ...feeData,
        date: date ? format(date, 'yyyy-mm-dd') : '',
      })
    );

    setFeeData({ user: '', amount: 0, date: '' });
    setDate(undefined);
  };

  const handleUpdateAmount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(updateAmount({ updateUser, amount }));
    alert(`Successfully updated ${updateUser} payment`);
    setUpdateUser('');
    setAmount(0);
  };

  const handleFocus = () => {
    const usernames = Array.from(
      new Set(payments.map((payment) => payment.user))
    );
    setFilteredSuggestions(usernames);
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150);
  };

  const handleSuggestionClick = (username: string) => {
    setUpdateUser(username);
    setShowSuggestions(false);
  };
  return (
    <Container className='page-container'>
      <Title title='fees' />
      <div className=' flex justify-between w-full flex-col sm:flex-row gap-3'>
        <form onSubmit={handleCreateFee} className='form'>
          <Input
            onChange={(e) => setFeeData({ ...feeData, user: e.target.value })}
            placeholder='user name '
            required
            className=' lowercase placeholder:capitalize'
          />
          <Input
            onChange={(e) =>
              setFeeData({ ...feeData, amount: parseFloat(e.target.value) })
            }
            placeholder='amount'
            required
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
          <Button type='submit'>create fee</Button>
        </form>

        <form onSubmit={handleUpdateAmount} className='form'>
          <Input
            value={updateUser}
            onChange={(e) => setUpdateUser(e.target.value)}
            placeholder='user name'
            required
            className=' placeholder:capitalize lowercase'
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {showSuggestions && (
            <ul className='absolute bg-white border border-gray-300 w-[180px] mt-10 max-h-[150px] overflow-y-auto z-10'>
              {filteredSuggestions.map((username, index) => (
                <li
                  key={index}
                  className='cursor-pointer p-2 hover:bg-gray-200'
                  onMouseDown={() => handleSuggestionClick(username)}
                >
                  {username}
                </li>
              ))}
            </ul>
          )}
          <Input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            type='number'
            placeholder='Amount'
            required
          />
          <Button type='submit'>update fee status</Button>
        </form>
      </div>

      <Title title='created fees' />
      <section className='page-section-grid'>
        {fees.map((item, index) => (
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
              <span className=' text-black font-semibold'>Up to: </span>
              {item.date}
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
