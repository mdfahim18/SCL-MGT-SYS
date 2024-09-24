import React from 'react';
import {
  FaBook,
  FaChalkboardTeacher,
  FaHouseUser,
  FaMoneyCheck,
  FaSchool,
  FaUserGraduate,
  FaUserTie,
} from 'react-icons/fa';
import {
  MdAssignment,
  MdFlightClass,
  MdOutlinePayment,
  MdWorkHistory,
} from 'react-icons/md';
import { GrAnnounce, GrDocumentPerformance } from 'react-icons/gr';
import {
  BenefitsProps,
  FAQProps,
  NavDataProps,
  OurFeaturesProps,
  PricingPlanProps,
  SideNavbarProps,
  TestimonialsProps,
} from '@/types';
import { MdDashboard } from 'react-icons/md';
import { IoIosPeople, IoMdTime } from 'react-icons/io';
import { SiBookstack, SiPowervirtualagents } from 'react-icons/si';
import { BiSolidReport } from 'react-icons/bi';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaMessage } from 'react-icons/fa6';
export const navData: NavDataProps[] = [
  {
    id: 1,
    label: 'features',
    link: '/features',
  },
  {
    id: 2,
    label: 'pricing',
    link: '/pricing',
  },
  {
    id: 3,
    label: 'about',
    link: '/about',
  },
  {
    id: 4,
    label: 'contact',
    link: '/contact',
  },
];

export const ourFeatures: OurFeaturesProps[] = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: 'Teacher Management',
    desc: 'Manage teacher profiles, schedules, and more.',
    para: 'Our system provides robust tools for managing teacher profiles, schedules, and performance metrics, ensuring an organized and efficient teaching staff.',
  },
  {
    id: 2,
    icon: <FaUserGraduate />,

    title: 'Student Management',
    desc: 'Track student attendance, grades, and progress.',
    para: 'Easily track student attendance, grades, and progress with our comprehensive student management tools, designed to enhance student performance and support.',
  },
  {
    id: 3,
    icon: <FaSchool />,
    title: 'School Administration',
    desc: 'Simplify administrative tasks with automation.',
    para: 'Easily track student attendance, grades, and progress with our comprehensive student management tools, designed to enhance student performance and support.',
  },
];

export const bebefits: BenefitsProps[] = [
  {
    id: 1,
    image: '/benefit1.webp',
    title: 'Improves Efficiency',
    desc: 'Automate administrative tasks and save time for more important work.',
  },
  {
    id: 2,
    image: '/benefit2.webp',
    title: 'Enhances Learning',
    desc: 'Provide students with better tools and resources to enhance their learning experience.',
  },
  {
    id: 3,
    image: '/benefit3.webp',
    title: 'Simplifies Management',
    desc: 'Streamline school management with easy-to-use tools and interfaces.',
  },
];

export const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Principal, ABC High School',
    image: '/tes1.webp',
    desc: `This system has transformed the way we manage our school. It's incredibly user-friendly and efficient.`,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Teacher, XYZ Elementary',
    image: '/tes2.webp',
    desc: `I love how this system enhances the learning experience for our students. It's a game-changer!`,
  },
  {
    id: 3,
    name: 'Michael Johnson',
    title: 'Administrator, 123 Academy',
    image: '/tes3.webp',
    desc: `Managing school tasks has never been easier. This system simplifies everything!`,
  },
];

export const pricingPlan: PricingPlanProps[] = [
  {
    id: 1,
    title: 'Basic',
    price: '49',
    para: 'Essential features for small schools.',
    desc: ['Student Management', 'Teacher Management', 'Class Scheduling'],
  },
  {
    id: 2,
    title: 'Pro',
    price: '99',
    para: 'Advanced features for medium-sized schools.',
    desc: ['All Basic Features', 'Attendance Tracking', 'Parent Communication'],
  },
  {
    id: 3,
    title: 'Enterprise',
    price: 'Contact Us',
    para: 'Comprehensive features for large institutions.',
    desc: ['All Pro Features', 'Custom Integrations', 'Priority Support'],
  },
];

export const FAQ: FAQProps[] = [
  {
    id: 1,
    que: 'Can I try the system before purchasing?',
    ans: 'Yes, we offer a free demo of our system. You can sign up for a demo on our website.',
  },
  {
    id: 2,
    que: 'Is there a minimum contract period?',
    ans: 'No, there is no minimum contract period. You can choose to pay monthly or annually, and cancel anytime.',
  },
  {
    id: 3,
    que: 'Do you offer support for intergrating with our existing systems?',
    ans: 'Yes, we provide dedicated support to help you integrate our system with your existing software applications.',
  },
  {
    id: 4,
    que: 'What payment methods do you accept?',
    ans: 'We accept all major credit cards, as well as PayPal and bank transfers.',
  },
  {
    id: 5,
    que: 'Can I upgrade or downgrade my plan later?',
    ans: 'Yes, you can upgrade or downgrade your plan at any time. Your new plan will take effect immediately.',
  },
];

export const socialLinks: NavDataProps[] = [
  {
    id: 1,
    label: 'facebook',
    link: '/',
  },
  {
    id: 2,
    label: 'twitter',
    link: '/',
  },
  {
    id: 3,
    label: 'linkedin',
    link: '/',
  },
  {
    id: 4,
    label: 'instagram',
    link: '/',
  },
];

export const sideNavbar: SideNavbarProps[] = [
  {
    label: 'Deashboard',
    icon: <MdDashboard />,
    link: '/dashboard',
  },
  {
    label: 'Academic Performance',
    icon: <GrDocumentPerformance />,
    link: '/academic-performance',
  },
  {
    label: 'Announcements',
    icon: <GrAnnounce />,
    link: '/announcements',
  },
  {
    label: 'Assignments',
    icon: <MdAssignment />,
    link: '/assignments',
  },
  {
    label: 'Attendance',
    icon: <FaHouseUser />,
    link: '/attendance',
  },
  {
    label: 'Classes',
    icon: <MdFlightClass />,
    link: '/classes',
  },
  {
    label: 'Courses',
    icon: <SiBookstack />,
    link: '/courses',
  },
  {
    label: 'Fees',
    icon: <FaMoneyCheck />,
    link: '/fees',
  },
  {
    label: 'Financial Reportses',
    icon: <BiSolidReport />,
    link: '/financial-reports',
  },
  {
    label: 'Invoices',
    icon: <CiCreditCard1 />,
    link: '/invoices',
  },
  {
    label: 'Messages',
    icon: <FaMessage />,
    link: '/messages',
  },
  {
    label: 'Payments',
    icon: <MdOutlinePayment />,
    link: '/payments',
  },
  {
    label: 'Payment History',
    icon: <MdWorkHistory />,
    link: '/payment-history',
  },
  {
    label: 'Students',
    icon: <IoIosPeople />,
    link: '/students',
  },
  {
    label: 'Subjects',
    icon: <FaBook />,
    link: '/subjects',
  },
  {
    label: 'Submissions',
    icon: <FaUserGraduate />,
    link: '/submissions',
  },
  {
    label: 'Teachers',
    icon: <FaChalkboardTeacher />,
    link: '/teachers',
  },
  {
    label: 'Timetable',
    icon: <IoMdTime />,
    link: '/timetable',
  },
  {
    label: 'Virtual Classes',
    icon: <SiPowervirtualagents />,
    link: '/virtual-classes',
  },
];
