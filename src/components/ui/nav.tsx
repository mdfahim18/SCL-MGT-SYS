'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { useState } from 'react';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const [selected, setSelected] = useState(0);

  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className='group flex flex-col gap-4 data-[collapsed=true]:py-2'
      >
        <nav className='grid group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    onClick={() => setSelected(index)}
                    href={link.href}
                    className={cn('h-9 w-9')}
                  >
                    <link.icon className='h-4 w-4' />
                    <span>{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side='right'
                  className='flex items-center gap-4'
                >
                  {link.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  buttonVariants({
                    className: ' text-xs rounded-[2px]',
                  }),
                  `dark:bg-muted dark:text-white ${
                    selected === index ? 'bg-amber-500' : ''
                  }`,
                  'justify-start'
                )}
              >
                <link.icon className='mr-2 h-4 w-4' />
                {link.title}
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
