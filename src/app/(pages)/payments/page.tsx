'use client';

import { RootState } from '@/app/store';
import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { dueAmount } from '@/lib/paymentHistory';
import { makePayment } from '@/lib/paymentsSlice';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Payments() {
  const fees = useSelector((state: RootState) => state.fees.fees);
  const payments = useSelector((state: RootState) => state.payments.payments);
  const students = useSelector((state: RootState) => state.students.students);

  const dispatch = useDispatch();
  const [user, setUser] = useState<string>('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [method, setMethod] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleCreatePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (error || !amount || amount === 0 || !method || !user) {
      alert('Please ensure the student exists and all fields are filled.');
      return;
    }

    const studentExists = students.find((student) => student.user === user);
    const feeForUser = fees.find((fee) => fee.user === user);

    if (!studentExists) {
      setError('Student not found');
      setAmount(undefined);
    } else {
      setError('');

      if (feeForUser && typeof feeForUser.amount !== 'undefined') {
        // Calculate the due amount (ensure feeForUser.amount is not undefined)
        const due = feeForUser.amount - amount;

        // Dispatch the `makePayment` action with the full student info
        dispatch(
          makePayment({
            id: studentExists.id,
            user,
            amount,
            method,
            date: format(new Date(), 'yyyy-MM-dd'),
          })
        );

        dispatch(
          dueAmount({
            user: studentExists.user,
            fee: feeForUser.amount,
            amount: amount,
            due: due,
            date: format(new Date(), 'yyyy-MM-dd'),
            method: method,
          })
        );

        alert('Payment completed');
      } else {
        setError('No valid fee found for this user.');
      }
    }

    setUser('');
    setAmount(undefined);
    setMethod('');
    setError('');
  };

  return (
    <Container className='page-container'>
      <Title title='payments' />
      <form onSubmit={handleCreatePayment} className='form'>
        <Input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder='User ID (e.g., john_doe)'
          required
          className=' lowercase placeholder:capitalize'
        />
        {error && <p className=' text-red-500'>{error}</p>}
        <Input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder='Amount'
          required
        />
        <Select onValueChange={setMethod}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select Method' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='creditcard'>Credit Card</SelectItem>
            <SelectItem value='banktransfer'>Bank Transfer</SelectItem>
            <SelectItem value='paypal'>Pay Pal</SelectItem>
          </SelectContent>
        </Select>
        <Button type='submit'>create payment</Button>
      </form>
      <Title title='all payments' />
      <section className='page-section-grid'>
        {payments.map((item) => (
          <div key={item.id} className='page-section-div'>
            <div>
              <h2 className='text-black font-semibold'>ID: </h2>
              {item.id}
            </div>
            <div>
              <h2 className='text-black font-semibold'>User: </h2>
              {item.user}
            </div>
            <div>
              <h2 className='text-black font-semibold'>Amount: </h2>
              {item.amount}
            </div>
            <div>
              <h2 className='text-black font-semibold'>Date: </h2>
              {item.date}
            </div>
            <div>
              <h2 className='text-black font-semibold'>Method: </h2>
              {item.method}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
