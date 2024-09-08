// File: pages/auth/sign-up.js

import React from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

export default function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6'>Create an Account</h2>
        <form className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            />
          </div>

          <Button
            type='submit'
            className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            Sign Up
          </Button>
        </form>

        <div className='mt-6 flex items-center justify-between'>
          <span className='border-b w-1/5 lg:w-1/4'></span>
          <span className='text-xs text-gray-500 uppercase'>
            or sign up with
          </span>
          <span className='border-b w-1/5 lg:w-1/4'></span>
        </div>

        <div className='mt-6'>
          <Button
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className='w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center'
          >
            Sign Up with Google
          </Button>
        </div>

        <p className='mt-6 text-sm text-gray-500'>
          Already have an account?{' '}
          <Link href='/auth/sign-in'>
            <a className='text-blue-500 hover:text-blue-700'>Sign In</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
