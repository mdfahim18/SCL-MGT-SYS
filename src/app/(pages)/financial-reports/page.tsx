'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';
import { Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

export const description = 'A simple pie chart';
const chartData = [
  { fees: 'Total Fees', money: 50000.0, fill: 'hsl(var(--chart-5))' },
  { fees: 'Total Payments', money: 35000.0, fill: 'hsl(var(--chart-2))' },
  { fees: 'Outstanding Amount', money: 15000.0, fill: 'hsl(var(--chart-3))' },
];

const chartConfig = {
  totalfees: {
    label: 'Total Fees',
    color: 'hsl(var(--chart-1))',
  },
  totalpayments: {
    label: 'Total Payments',
    color: 'hsl(var(--chart-2))',
  },
  outstandingamount: {
    label: 'Outstanding Amount',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export default function FinancialReports() {
  return (
    <Container className='page-container'>
      <Title title='Financial Reports' />
      <Card className=' w-full sm:w-[80%] mx-auto'>
        <CardHeader className='items-center pb-0'>
          <CardTitle className=' flex flex-col sm:flex-row justify-center items-center gap-2 capitalize'>
            <div className=' bg-[hsl(var(--chart-5))] w-10 h-3'></div> Total
            Fees
            <div className=' bg-[hsl(var(--chart-2))] w-10 h-3'></div> Total
            Payments
            <div className=' bg-[hsl(var(--chart-3))] w-10 h-3'></div>
            Outstanding Amount
          </CardTitle>
        </CardHeader>
        <CardContent className='flex-1 pb-0'>
          <ChartContainer
            config={chartConfig}
            className='mx-auto aspect-square h-[250px] sm:h-[700px]'
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie data={chartData} dataKey='money' nameKey='fees' />
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className='flex-col items-start gap-2 text-base sm:text-lg'>
          {chartData.map((item, index) => (
            <div key={index}>
              <h2>
                <span className=' text-black font-bold'>{item.fees}: </span>
                {item.money}
              </h2>
            </div>
          ))}
        </CardFooter>
      </Card>
    </Container>
  );
}
