'use client';

import { Aside, DashboardLayout } from '../LayoutContainer';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=' flex fixed w-full'>
      <Aside />
      <div className=' w-full flex flex-col gap-3'>
        <DashboardLayout />
        <div className=' bg-gray-100 p-5 h-[90vh] overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thin  scrollbar-track-rounded-full scrollbar-thumb-slate-700  scrollbar-track-slate-300'>
          {children}
        </div>
      </div>
    </div>
  );
}
