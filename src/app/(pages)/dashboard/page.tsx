import Container from '@/components/Container';
import Title from '@/components/Title';
import { sideNavbar } from '@/data/data';
import Link from 'next/link';
import React from 'react';

export default function Dashboard() {
  return (
    <Container className='page-container'>
      <Title title='Welcome to the Dashboard' />
      <section className='page-section-grid'>
        {sideNavbar?.map((item) => (
          <div
            key={item.label}
            className=' bg-amber-50 rounded-md flex flex-col justify-between gap-2 p-4 '
          >
            <h2 className=' text-black font-semibold text-lg'>{item.label}</h2>
            <p className=' text-sm text-gray-600'>
              Track {item.label} records of students and teachers
            </p>
            <Link
              href={item.link}
              className=' text-amber-500 text-sm hover:underline focus:text-amber-500'
            >
              View {item.label}
            </Link>
          </div>
        ))}
      </section>
    </Container>
  );
}
