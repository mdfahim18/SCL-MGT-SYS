'use client';

import { RootState } from '@/app/store';
import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';
import { useSelector } from 'react-redux';

export default function PaymentHistory() {
  const PaymentHistory = useSelector(
    (state: RootState) => state.paymentHistory.paymentHistory
  );
  const fees = useSelector((state: RootState) => state.fees.fees);

  return (
    <Container className='page-container'>
      <Title title='Payment History' />
      <section className='page-section-grid'>
        {PaymentHistory.map((item, index) => (
          <div key={index} className='page-section-div'>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>User: </h2>
              {item.user}
            </div>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>Fee: </h2>
              {item.fee}
            </div>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>Amount: </h2>
              {item.amount}
            </div>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>Due: </h2>
              {item.due}
            </div>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>Date: </h2>
              {item.date}
            </div>
            <div className='flex justify-between'>
              <h2 className='text-black font-semibold'>Method: </h2>
              {item.method}
            </div>
          </div>
        ))}
      </section>
    </Container>
  );
}
