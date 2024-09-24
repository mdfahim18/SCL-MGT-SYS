'use client';

import { RootState } from '@/app/store';
import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

type InvoicesProps = {
  user: string;
  amount: number;
  due: number;
  date: string;
};
const invoicesData: InvoicesProps[] = [
  {
    user: 'john_doe',
    amount: 100,
    due: 0,
    date: '2024-08-01',
  },
  {
    user: 'jane_smit',
    amount: 150,
    due: 50,
    date: '2024-08-15',
  },
  {
    user: 'alice_johnson',
    amount: 200,
    due: 70,
    date: '2024-09-01',
  },
];
export default function Invoices() {
  const [invoices, setInvoices] = useState<InvoicesProps[]>(invoicesData);
  const [userID, setUserID] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const students = useSelector(
    (state: RootState) => state.paymentHistory.paymentHistory
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const studentExists = students.find((student) => student.user === userID);
    if (studentExists) {
      const { amount, due } = studentExists;
      const newInvoice: InvoicesProps = {
        user: userID,
        amount: amount ?? 0,
        due: due ?? 0,
        date: format(new Date(), 'yyyy-mm-dd'),
      };
      setInvoices([...invoices, newInvoice]);
    } else {
      alert('Student not found');
    }
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 150);
  };
  const handleFocus = () => {
    const username = Array.from(
      new Set(students.map((student) => student.user).filter(Boolean))
    ) as string[];
    setShowSuggestions(true);
    setFilteredSuggestions(username);
  };

  const handleSuggestionClick = (username: string) => {
    setUserID(username);
    setShowSuggestions(false);
  };
  return (
    <Container className='page-container'>
      <Title title='Invoices' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          onFocus={handleFocus}
          placeholder='user ID'
          required
          className=' lowercase placeholder:capitalize'
        />
        {showSuggestions && (
          <ul className=' absolute bg-white border border-gray-300 w-[180px] mt-10 max-h-[150px] overflow-y-auto z-10'>
            {filteredSuggestions.map((username, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(username)}
                onBlur={handleBlur}
                className=' cursor-pointer p-2 hover:bg-gray-200'
              >
                {username}
              </li>
            ))}
          </ul>
        )}

        <Button type='submit'>create invoice</Button>
      </form>
      <Title title='all invoices' />
      <section className='page-section-grid'>
        {invoices.map((item, index) => (
          <div key={index}>
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
              {item.due}
            </h4>
            <h4 className='text-sm'>
              <span className=' text-black font-semibold'>Due: </span>
              {item.date}
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
