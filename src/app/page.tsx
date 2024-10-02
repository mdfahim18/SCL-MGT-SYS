'use client';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import {
  bebefits,
  FAQ,
  ourFeatures,
  pricingPlan,
  testimonials,
} from '@/data/data';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from 'react-icons/io';
import dynamic from 'next/dynamic';

const SidebarNoSSR = dynamic(() => import('@/components/Sidebar'), {
  ssr: false,
});

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null); // `null` as default for no selected state
  const [faqSelected, setFaqSelected] = useState<number | null>(null);

  const handleToggleExpand = (id: number) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  const handleToggleFaq = (id: number) => {
    setFaqSelected((prev) => (prev === id ? null : id));
  };

  return (
    <main className='relative bg-gray-100'>
      <Navbar />
      <Hero />
      <SidebarNoSSR />
      <Container id='features'>
        <Title
          title='our features'
          para='Discover the powerful features our school management system offers to streamline your educational institution.'
        />

        <section className='grid grid-cols-1 sm:grid-cols-3 gap-12 items-center'>
          {ourFeatures?.map((item) => (
            <Container
              key={item.id}
              className='rounded-md shadow-md bg-gray-100 py-7'
            >
              <i className='text-4xl text-amber-500'>{item.icon}</i>
              <Title
                title={item.title}
                para={item.desc}
                headerClass='text-xl'
                descClass='text-gray-600'
              />
              <div className='flex flex-col gap-2 justify-center'>
                <button
                  onClick={() => handleToggleExpand(item.id)}
                  className='text-amber-500 hover:text-amber-700'
                >
                  {selected === item.id ? 'Show Less' : 'Show More'}
                </button>
                {selected === item.id && (
                  <p className='text-gray-600'>{item.para}</p>
                )}
              </div>
            </Container>
          ))}
        </section>
      </Container>
      <Container className='bg-transparent'>
        <Title
          title='key bebefits'
          para={`Discover how our system can improve your school's efficiency, enhance learning, and simplify management.`}
        />
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-12 items-center'>
          {bebefits?.map((item) => (
            <Container key={item.id} className='rounded-md shadow-md py-7'>
              <div className='h-[4rem] w-[4rem]'>
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  height={1000}
                  width={1000}
                  className='rounded-sm object-cover h-full w-full'
                />
              </div>
              <Title
                title={item.title}
                para={item.desc}
                headerClass='text-xl text-amber-500'
                descClass='text-gray-600'
              />
            </Container>
          ))}
        </section>
      </Container>
      <Container>
        <Title
          title='Testimonials'
          para='Hear from our satisfied users and see how our system has made a difference for them.'
        />
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-12 items-center'>
          {testimonials?.map((item) => (
            <Container
              key={item.id}
              className='bg-gray-100 rounded-md shadow-md py-7'
            >
              <div className='h-[4rem] w-[4rem]'>
                <Image
                  src={`${item.image}`}
                  alt={item.title}
                  height={1000}
                  width={1000}
                  className='rounded-full object-cover h-full w-full'
                />
              </div>
              <Title
                title={item.name}
                para={item.title}
                headerClass='text-xl text-amber-500'
                descClass='text-gray-600'
              />
              <p>&quot;{item.desc}&quot;</p>
            </Container>
          ))}
        </section>
      </Container>
      <Container className='bg-transparent'>
        <Title
          title='Pricing Plans'
          para={`Choose the plan that's right for your school.`}
        />
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-12 items-center'>
          {pricingPlan?.map((item) => (
            <Container
              key={item.id}
              className={
                item.title === 'Pro'
                  ? 'border-[4px] border-amber-500 rounded-md shadow-md py-7'
                  : 'rounded-md shadow-md py-7'
              }
            >
              <Title
                title={item.title}
                para={`$${item.price}`}
                headerClass={item.title === 'Pro' ? 'text-amber-500' : ''}
                descClass='text-gray-500'
              />
              <p className='text-gray-700 text-center'>{item.desc}</p>
              <ul className='flex flex-col justify-center items-center gap-3'>
                {item.desc.map((i, index) => (
                  <li
                    key={index}
                    className='flex justify-center items-center gap-1'
                  >
                    <i className='text-xl text-amber-500'>
                      <IoMdCheckmark />
                    </i>
                    {i}
                  </li>
                ))}
              </ul>
            </Container>
          ))}
        </section>
      </Container>
      <div className='text-center mb-10'>
        <Title
          title='Special Offers'
          para='Sign up now and get 20% off your first year!'
        />
        <p>
          Use code:{' '}
          <span className='text-gray-800 font-semibold'>SCHOOL20</span>
        </p>
      </div>
      <Container>
        <Title
          title='Frequently Asked Questions'
          para='Here are some common questions about our school management system.'
          headerClass='text-2xl sm:text-3xl'
        />
        <section className='grid grid-cols-1 gap-12 items-center'>
          {FAQ?.map((item) => (
            <Container
              key={item.id}
              className='bg-gray-100 rounded-md shadow-md py-7 px-2'
            >
              <h2
                onClick={() => handleToggleFaq(item.id)}
                className='cursor-pointer w-full text-xl flex justify-between items-center gap-2'
              >
                <p className='text-black'>{item.que}</p>
                <i className='text-2xl'>
                  {faqSelected === item.id ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </i>
              </h2>
              {faqSelected === item.id && (
                <p className='text-gray-700'>{item.ans}</p>
              )}
            </Container>
          ))}
        </section>
      </Container>
      <Footer />
    </main>
  );
}
