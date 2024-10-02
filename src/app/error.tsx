'use client';

import Link from 'next/link';
import React from 'react';

export default function Error() {
  return (
    <div className=' h-screen flex justify-center items-center gap-7'>
      <h1>Something went wrong?</h1>
      <Link className=' border border-gray-500 px-3 py-2' href={'/'}>
        Back to Home
      </Link>
    </div>
  );
}
