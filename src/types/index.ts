import React from 'react';

export type TitleProps = {
  title: string;
  para?: string;
  headerClass?: string;
  descClass?: string;
};

export type NavDataProps = {
  id: number;
  label: string;
  link: string;
};

export type OurFeaturesProps = {
  id: number;
  icon: JSX.Element | React.ReactNode;
  title: string;
  desc: string;
  para: string;
};

export type BenefitsProps = {
  id: number;
  image: React.ReactNode;
  title: string;
  desc: string;
};

export type TestimonialsProps = {
  id: number;
  name: string;
  title: string;
  image: string;
  desc: string;
};

export type PricingPlanProps = {
  id: number;
  title: string;
  price: string;
  para: string;
  desc: string[];
};

export type FAQProps = {
  id: number;
  que: string;
  ans: string;
};

export type SideNavbarProps = {
  label: string;
  icon: React.ReactNode;
  link: string;
};
