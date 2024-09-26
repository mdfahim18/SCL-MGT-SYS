'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useSession } from 'next-auth/react';

type ChartDataProps = {
  number: string;
  averagescore: number;
  submisstion: number;
};
const chartData = [
  { number: 'Assignment 1', averagescore: 85, submisstion: 30 },
  { number: 'Assignment 2', averagescore: 90, submisstion: 28 },
  { number: 'Assignment 3', averagescore: 78, submisstion: 32 },
  { number: 'Assignment 4', averagescore: 92, submisstion: 40 },
];
const chartConfig = {
  assignment: {
    label: 'Assignment',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig;

export default function AcademicPerformance() {
  const { data: session, status } = useSession();
  const [newChartData, setNewChartData] = useState<ChartDataProps[] | any>(
    chartData
  );
  const [averageScore, setAverageScore] = useState<number>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'unauthenticated') {
      alert('You must be logged in to generate a report.');
      return;
    }

    const newAssignmentNumber = `Assignment ${newChartData.length + 1}`;
    const userSubmissionCount = session ? 1 : 0;
    console.log(userSubmissionCount);

    const newAssignmentData = {
      number: newAssignmentNumber,
      averagescore: averageScore,
      submisstion: chartData.length + userSubmissionCount,
    };
    setNewChartData([...newChartData, newAssignmentData]);

    setAverageScore(0);
  };
  return (
    <Container className='page-container'>
      <Title title='Academic Performance' />

      <form onSubmit={handleSubmit} className=' form'>
        <Input
          placeholder='Course ID'
          type='number'
          required
          value={averageScore}
          onChange={(e) => setAverageScore(parseFloat(e.target.value))}
        />
        <Button type='submit'>generate report</Button>
      </form>
      <Title title='report chart' />
      <Card className=' w-full lg:w-[70%] mx-auto'>
        <CardHeader>
          <CardTitle className=' flex justify-center items-center gap-2 capitalize'>
            <div className=' bg-[hsl(var(--chart-2))] w-10 h-3'></div>
            average score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={newChartData}>
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey='number'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
              />

              <YAxis tickCount={6} interval={0} domain={[0, 100]} />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />
              <Bar
                dataKey='averagescore'
                fill='var(--color-assignment)'
                radius={4}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Title title='report list' />
      <div className=' flex flex-col gap-2 sm:flex-row overflow-x-scroll py-5'>
        {newChartData.map((item: ChartDataProps) => (
          <div
            key={item.number}
            className=' flex flex-col gap-2 overflow-x-scroll'
          >
            <Title title={`${item.number}`} headerClass=' text-sm sm:text-lg' />
            <p className=' text-xs sm:text-base'>
              Submisstion: {item.submisstion}
            </p>
            <p className='text-xs sm:text-base'>
              Average Score: {item.averagescore}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
