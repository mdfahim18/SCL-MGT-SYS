'use client';

import { sideNavbar } from '@/data/data';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { collapsed, notCollapsed } from '@/lib/appSlice';

export default function layout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(0);
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);

  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div className=' flex fixed w-full'>
      <aside className='max-w-[280px] h-screen'>
        <Link href={'/'}>
          <h1 className=' text-2xl z-50 tracking-widest cursor-pointer py-5 font-bold bg-amber-500 text-white text-center'>
            MGT
          </h1>
        </Link>
        <ul className=' h-[90vh] flex flex-col overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thin  scrollbar-track-rounded-full scrollbar-thumb-slate-700  scrollbar-track-slate-300 gap-2 bg-slate-800 text-white py-2 px-4'>
          {sideNavbar?.map((item, index) => (
            <li
              key={index}
              title={item.label}
              className={`${
                selected === index ? 'bg-amber-500 rounded-sm' : 'opacity-80'
              }`}
            >
              <Link href={item.link} onClick={() => setSelected(index)}>
                {isCollapsed ? (
                  <span className=' flex justify-center items-center py-2 px-4'>
                    {item.icon}
                  </span>
                ) : (
                  <span className='flex gap-2 items-center capitalize text-sm py-2 px-4 whitespace-nowrap hover:opacity-50'>
                    {item.icon}
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className=' w-full flex flex-col gap-3'>
        <div className=' flex justify-between p-5'>
          <i className=' text-lg cursor-pointer'>
            {isCollapsed ? (
              <RiMenuUnfold3Fill onClick={() => dispatch(notCollapsed())} />
            ) : (
              <RiMenuUnfold4Fill onClick={() => dispatch(collapsed())} />
            )}
          </i>
          {!session ? (
            <div className=' flex justify-center items-center gap-2'>
              <Image
                src='/ps-photo.JPG'
                alt='user'
                width={5000}
                height={500}
                className=' object-cover h-7 w-7 rounded-full'
              />
              <h2 className=' text-sm text-gray-600 font-semibold'>
                Mahmudul Amin Fahim
              </h2>
            </div>
          ) : (
            <div className=' flex justify-center items-center gap-2'>
              <Image
                src={`${session?.user?.image || ''}`}
                alt={`${session?.user?.name}`}
                width={5000}
                height={500}
                className=' object-cover h-7 w-7 rounded-full'
              />
              <h2 className=' text-sm text-gray-600 font-semibold'>
                {session?.user?.name}
              </h2>
            </div>
          )}
        </div>
        <div className=' bg-gray-100 p-5 h-[90vh] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thin  scrollbar-track-rounded-full scrollbar-thumb-slate-700  scrollbar-track-slate-300'>
          {children}
        </div>
      </div>
    </div>
  );
}
