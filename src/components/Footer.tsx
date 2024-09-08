import { navData, socialLinks } from '@/data/data';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className=' bg-gray-900 text-white py-4 sm:py-10 px-5 sm:px-12'>
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-10'>
        <div className=' flex flex-col gap-3'>
          <h1 className=' text-xl'>Quick Links</h1>
          <ul>
            {navData?.map((item) => (
              <Link href={item.link} key={item.id}>
                <li className=' capitalize cursor-pointer hover:opacity-50 mb-1'>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className=' text-xl'>Social Media</h1>
          <ul>
            {socialLinks?.map((item) => (
              <Link href={item.link} key={item.id}>
                <li className=' capitalize cursor-pointer hover:opacity-50 mb-1'>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-1'>
          <h1 className=' text-xl'>Newslatter</h1>
          <p>Subscribe to our newsletter for updates and special offers.</p>
          <form className=' flex items-center w-full rounded-md focus-within:ring-2 focus-within:ring-amber-700'>
            <input
              type='text'
              placeholder='Your email'
              className=' h-full w-[70%] outline-none  text-black px-2 rounded-l-md'
            />
            <Button className=' bg-amber-500 w-[30%] hover:bg-amber-700 transition-all rounded-l-none'>
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className=' w-full h-[1px] my-5 bg-gray-500'></div>
      <div className=' flex justify-between items-center'>
        <p>© 2024 Your School Management System. All rights reserved.</p>
        <Link href={'/'}>
          <p>Privacy Policy | Terms of Service</p>
        </Link>
      </div>
    </footer>
  );
}
