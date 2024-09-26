import { cn } from '@/lib/utils';
import { TitleProps } from '@/types';
import React from 'react';

export default function Title({
  title,
  para,
  headerClass,
  descClass,
}: TitleProps) {
  return (
    <div className=' flex flex-col gap-3 justify-center items-center'>
      <h1
        className={cn(
          ` text-xl sm:text-3xl capitalize text-black font-bold ${headerClass}`
        )}
      >
        {title}
      </h1>
      <p className={cn(` text-sm sm:text-base text-gray-700 ${descClass}`)}>
        {para}
      </p>
    </div>
  );
}
