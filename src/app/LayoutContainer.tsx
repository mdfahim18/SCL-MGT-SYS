'use client';

import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { RootState, store } from './store';
import { SessionProvider, useSession } from 'next-auth/react';
import Link from 'next/link';
import { sideNavbar } from '@/data/data';
import { useWindowWidth } from '@react-hook/window-size';
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from 'react-icons/ri';
import { collapsed, notCollapsed } from '@/lib/appSlice';
import Image from 'next/image';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
}

export function DashboardLayout() {
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);
  const dispatch = useDispatch();

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 500;

  const { data: session } = useSession();

  return (
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
          {mobileWidth ? null : (
            <h2 className=' text-sm text-gray-600 font-semibold'>
              Mahmudul Amin Fahim
            </h2>
          )}
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
          {mobileWidth ? null : (
            <h2 className=' text-sm text-gray-600 font-semibold'>
              {session?.user?.name}
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export function Aside() {
  const [selected, setSelected] = useState<number>(0);
  const isCollapsed = useSelector((state: RootState) => state.app.isCollapsed);

  return (
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
  );
}
