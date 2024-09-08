import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';

const PaymentHistoryData = [
  {
    user: 'john_doe',
    fee: 150,
    amount: 150,
    date: '2024-07-01',
    method: 'Credit Card',
  },
  {
    user: 'jane_smith',
    fee: 200,
    amount: 200,
    date: '2024-07-05',
    method: 'Bank Transfer',
  },
  {
    user: 'alice_johnson',
    fee: 75.5,
    amount: 75.5,
    date: '2024-07-10',
    method: 'alice_johnson',
  },
];
export default function PaymentHistory() {
  return (
    <Container className='page-container'>
      <Title title='Payment History' />
      <section className='page-section-grid'>
        {PaymentHistoryData.map((item, index) => (
          <div key={index} className='page-section-div'>
            <div>
              <h2 className='text-black font-semibold'>User: </h2>
              {item.user}
            </div>
            <div>
              <h2 className='text-black font-semibold'>Fee: </h2>
              {item.fee}
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
