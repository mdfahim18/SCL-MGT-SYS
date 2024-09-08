import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const paymentsData = [
  {
    fee: 150,
    user: 'john_doe',
    amount: 150,
    date: '2024-07-01',
    method: 'Credit Card',
  },
  {
    fee: 200,
    user: 'jane_smith',
    amount: 200,
    date: '2024-07-05',
    method: 'Bank Transfer',
  },
  {
    fee: 75.5,
    user: 'alice_johnson',
    amount: 75.5,
    date: '2024-07-10',
    method: 'alice_johnson',
  },
];
export default function Payments() {
  return (
    <Container className='page-container'>
      <Title title='payments' />
      <form className='form'>
        <Input placeholder='fee ID' />
        <Input placeholder='fee ID' />
        <Input placeholder='method' />
        <Button>create payment</Button>
      </form>
      <Title title='all payments' />
      <section className='page-section-grid'>
        {paymentsData.map((item, index) => (
          <div className='page-section-div'>
            <div>
              <h2 className='text-black font-semibold'>Fee: </h2>
              {item.fee}
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
