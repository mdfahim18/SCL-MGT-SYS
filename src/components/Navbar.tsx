'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { openSidebar } from '@/lib/appSlice';
import { navData } from '@/data/data';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  return (
    <nav className=' absolute left-0 top-0 w-full pt-5 px-10 flex items-center gap-5 justify-between z-10'>
      <Link href={'/'}>
        <h1 className=' text-2xl font-bold text-white'>SCLSYS</h1>
      </Link>

      <ul className=' hidden sm:flex justify-between gap-5'>
        {navData?.map((item) => (
          <Link key={item.id} href={item.link}>
            <li className=' text-white capitalize opacity-80'>{item.label}</li>
          </Link>
        ))}
      </ul>

      <div className=' hidden sm:flex items-center'>
        {session && session.user ? (
          <Button
            onClick={() => signOut({ callbackUrl: '/' })}
            className=' bg-transparent'
          >
            Sign Out
          </Button>
        ) : (
          <Button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className=' bg-amber-600 hover:bg-amber-900'
          >
            Sign Up
          </Button>
        )}
      </div>

      <HiMenuAlt3
        onClick={() => dispatch(openSidebar())}
        className=' flex sm:hidden text-white text-3xl cursor-pointer'
      />
    </nav>
  );
}
