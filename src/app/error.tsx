'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className='text-center p-6'>
      <h1 className='text-2xl font-bold text-red-600'>Something went wrong!</h1>
      <p className='text-gray-800 mt-4'>{error.message}</p>
      <Button onClick={reset} className='mt-6 bg-red-500 text-white'>
        Try Again
      </Button>
    </div>
  );
}
