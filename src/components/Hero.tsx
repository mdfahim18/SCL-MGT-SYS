'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const { data: session, status } = useSession();
  const route = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
    }
  }, []);
  return (
    <section className=' w-full flex justify-center items-center relative'>
      <div className=' w-full'>
        <Image
          src='/hero-bg.jpeg'
          alt='hero'
          width={9000}
          height={9000}
          className=' w-full h-[100vh] object-cover'
        />
      </div>

      <div className=' absolute top-[40%] flex justify-center flex-col gap-7'>
        <h1 className=' text-white text-4xl sm:text-6xl text-center font-bold'>
          Manage Your School Effortlessly
        </h1>
        <p className=' text-white sm:text-2xl text-xl font-semibold text-center sm:bg-black'>
          Simplify administrative tasks, enhance learning, and improve
          communication with our all-in-one school management system.
        </p>
        <div className=' flex justify-center gap-5'>
          {status === 'authenticated' ? (
            <Button
              onClick={() => route.push('/dashboard')}
              className=' bg-amber-500 hover:bg-amber-900'
            >
              Go to Dashboard
            </Button>
          ) : (
            <div className=' flex gap-3'>
              <Button
                onClick={() => signIn('google', { callbackUrl: '/' })}
                className=' bg-amber-500 hover:bg-amber-900'
              >
                Sign Up
              </Button>
              <Link
                href={'/dashboard'}
                className='bg-transparent flex justify-center rounded-md px-2 items-center hover:bg-white transition-all text-white hover:text-black border border-white'
              >
                Request a Demo
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
