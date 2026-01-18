import React from 'react';
import { NavItem, Service, Testimonial, Article } from './types';
import { Plane, Briefcase, GraduationCap, MapPin, Anchor, BookOpen, UserCheck, Globe } from 'lucide-react';

export const BRAND_COLORS = {
  primary: '#e31e24', // Y-Axis Red
  secondary: '#1f2a44', // Dark Blue
  accent: '#f3f4f6',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Migrate', href: '#migrate', subItems: ['Australia', 'Canada', 'Germany', 'UK', 'USA'] },
  { label: 'Work', href: '#work', subItems: ['Job Search Services', 'Resume Writing', 'LinkedIn Marketing'] },
  { label: 'Study', href: '#study', subItems: ['Universities', 'Courses', 'Scholarships'] },
  { label: 'Visas', href: '#visas', subItems: ['Visitor Visa', 'Student Visa', 'Dependent Visa'] },
  { label: 'Coaching', href: '#coaching', subItems: ['IELTS', 'PTE', 'TOEFL', 'GRE', 'GMAT'] },
  { label: 'Invest', href: '#invest' },
];

export const SERVICES: Service[] = [
  {
    id: 'migrate',
    title: 'Migrate Overseas',
    icon: <Plane className="w-8 h-8 text-white" />,
    description: 'Permanent Residency (PR) visas for Canada, Australia, UK, Germany, and more.',
    link: '#migrate'
  },
  {
    id: 'work',
    title: 'Work Overseas',
    icon: <Briefcase className="w-8 h-8 text-white" />,
    description: 'Expert guidance on job search, resume marketing, and work permits.',
    link: '#work'
  },
  {
    id: 'study',
    title: 'Study Overseas',
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    description: 'Admissions assistance for top universities in USA, UK, Canada, Australia.',
    link: '#study'
  },
  {
    id: 'coaching',
    title: 'Coaching',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    description: 'World-class coaching for IELTS, PTE, TOEFL, GRE, GMAT, SAT and German.',
    link: '#coaching'
  },
  {
    id: 'visa',
    title: 'Visa Services',
    icon: <MapPin className="w-8 h-8 text-white" />,
    description: 'Tourist, Business, and Dependent visas for 50+ countries.',
    link: '#visa'
  },
  {
    id: 'invest',
    title: 'Invest Overseas',
    icon: <Anchor className="w-8 h-8 text-white" />,
    description: 'Business and Investment visa solutions for entrepreneurs.',
    link: '#invest'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    visaType: "Canada PR",
    message: "Y-Axis helped me navigate the complex Express Entry system. Their guidance was invaluable in boosting my CRS score.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    visaType: "Australia Work Visa",
    message: "The job search service was a game changer. I landed interviews within weeks of updating my resume with their help.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    visaType: "UK Student Visa",
    message: "From university selection to visa filing, the Y-Axis team was with me every step of the way.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const LATEST_NEWS: Article[] = [
  {
    id: 1,
    title: "Canada announces new category-based selection for Express Entry",
    date: "Oct 24, 2024",
    category: "Immigration News",
    image: "https://picsum.photos/400/250?random=10"
  },
  {
    id: 2,
    title: "Australia reviews skilled migration list for 2025",
    date: "Oct 22, 2024",
    category: "Visa Updates",
    image: "https://picsum.photos/400/250?random=11"
  },
  {
    id: 3,
    title: "Germany introduces Opportunity Card for skilled workers",
    date: "Oct 20, 2024",
    category: "Work Overseas",
    image: "https://picsum.photos/400/250?random=12"
  }
];
