'use client';

import { RootState } from '@/app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import { FaRegTimesCircle } from 'react-icons/fa';
import Link from 'next/link';
import { closeSidebar } from '@/lib/appSlice';
import { navData } from '@/data/data';

export default function Sidebar() {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.app.isSidebarOpen
  );
  const dispatch = useDispatch();

  return (
    <div className={isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <div className=' flex justify-between px-5 items-center'>
        <h2 className=' font-semibold'>Menu</h2>
        <Button
          onClick={() => dispatch(closeSidebar())}
          className='bg-amber-700 hover:border hover:border-blue-700 hover:bg-transparent group'
        >
          <FaRegTimesCircle className='text-white group-hover:text-blue-700' />
        </Button>
      </div>

      <div className=' w-full h-[1px] bg-gray-300'></div>

      <ul className=' flex flex-col gap-2 px-5'>
        {navData?.map((item) => (
          <Link key={item.id} href={item.link}>
            <li className=' capitalize opacity-80'>{item.label}</li>
          </Link>
        ))}
      </ul>

      <div className=' flex flex-col px-5 gap-2'>
        <Button>
          <Link href={'/login'}>Log In</Link>
        </Button>
        <Button className=' bg-amber-700 hover:bg-amber-900'>
          <Link href={'/register'}>Register</Link>
        </Button>
      </div>
    </div>
  );
}
