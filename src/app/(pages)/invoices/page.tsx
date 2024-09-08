import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const invoicesData = [
  {
    user: 'john_doe',
    amount: '100',
    date: '2024-08-01',
  },
  {
    user: 'jane_smit',
    amount: '150.5',
    date: '2024-08-15',
  },
  {
    user: 'alice_johnson',
    amount: '200.75',
    date: '2024-09-01',
  },
];
export default function Invoices() {
  return (
    <Container className='page-container'>
      <Title title='Invoices' />
      <form className='form'>
        <Input placeholder='user ID' />
        <Input placeholder='payment ID' />
        <Input placeholder='amount' />
        <Button>create invoice</Button>
      </form>
      <Title title='all invoices' />
      <section className='page-section-grid'>
        {invoicesData.map((item, index) => (
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
              {item.amount}
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
