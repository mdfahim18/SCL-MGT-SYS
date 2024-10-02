'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

type ReportListProps = {
  name: string;
  class: string;
  date: string | undefined;
  status: string;
};
const chartData = [
  { status: 'Present', count: 0.8 },
  { status: 'Absent', count: 0.2 },
];

const chartConfig = {
  present: {
    label: 'Present',
    color: 'hsl(var(--chart-2))',
  },
  absent: {
    label: 'Absent',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const reportListData: ReportListProps[] = [
  {
    name: 'Alice Johnson',
    class: 'Math 101',
    date: '2024-07-01',
    status: 'present',
  },
  {
    name: 'Bob Smith',
    class: 'History 202',
    date: '2024-07-01',
    status: 'absent',
  },
  {
    name: 'Alice Johnson',
    class: 'Math 101',
    date: '2024-07-01',
    status: 'present',
  },
  {
    name: 'Bob Smith',
    class: 'History 202',
    date: '2024-07-01',
    status: 'present',
  },
];
export default function Attendance() {
  const [newReportList, setNewReportList] =
    useState<ReportListProps[]>(reportListData);
  const [name, setName] = useState<string>('');
  const [className, setClassName] = useState<string>('');
  const [date, setDate] = useState<Date>();
  const [attendance, setAttendance] = useState<string>('');

  const formattedDate = date ? format(date, 'yyyy-mm-dd') : '';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date) {
      alert('Please select a date');
      return;
    }

    const newReportListData: ReportListProps = {
      name: name || 'Unknown',
      class: className || 'Unknown',
      date: formattedDate,
      status: attendance || 'Unknown',
    };

    setNewReportList([...newReportList, newReportListData]);
    setName('');
    setClassName('');
    setDate(undefined);
    setAttendance('');
  };
  return (
    <Container className='page-container'>
      <Title title='attendance' />
      <form onSubmit={handleSubmit} className='form'>
        <Input
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder='Class ID'
          required
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Student ID'
          required
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[280px] justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className='mr-2 h-4 w-4' />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Select onValueChange={setAttendance} required>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Present / Absent  ' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Present'>Present</SelectItem>
            <SelectItem value='Absent'>Absent</SelectItem>
          </SelectContent>
        </Select>
        <Button type='submit'>make attendance</Button>
      </form>
      <Title title='report chart' />

      <Card className=' w-full lg:w-[70%] mx-auto'>
        <CardHeader>
          <CardTitle className=' flex justify-center items-center gap-2 capitalize'>
            <div className=' bg-[hsl(var(--chart-2))] w-10 h-3'></div> Present
            <div className=' bg-[hsl(var(--chart-5))] w-10 h-3'></div> Absent
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='status'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />
              <YAxis tickCount={6} interval={0} domain={[0, 1]} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />
              <Bar dataKey='count' radius={4}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      entry.status === 'Present'
                        ? 'hsl(var(--chart-2))'
                        : 'hsl(var(--chart-5))'
                    }
                  />
                ))}
              </Bar>{' '}
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <section className='page-section-grid'>
        {newReportList.map((item, index) => (
          <div key={index} className='page-section-div capitalize'>
            <h4 className=' text-sm'>
              <span className=' text-black font-semibold'>Student: </span>
              {item.name}
            </h4>
            <h4 className=' text-sm'>
              <span className=' text-black font-semibold'>Class: </span>
              {item.class}
            </h4>
            <h4 className=' text-sm'>
              <span className=' text-black font-semibold'>Date: </span>
              {item.date}
            </h4>
            <h4 className=' text-sm capitalize'>
              <span className=' text-black font-semibold'>Status: </span>
              <p
                className={
                  item.status === 'present' ? 'text-amber-500' : 'text-red-500'
                }
              >
                {item.status}
              </p>
            </h4>
          </div>
        ))}
      </section>
    </Container>
  );
}
