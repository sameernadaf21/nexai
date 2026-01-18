import React from 'react';
import { NavItem, Service, Testimonial, Article } from './types';
import { Plane, Briefcase, GraduationCap, MapPin, Anchor, BookOpen, Scale, Globe, FileText } from 'lucide-react';

export const BRAND_COLORS = {
  primary: '#009B8F', // Westkin Teal
  secondary: '#011E26', // Deep Dark Green/Black
  accent: '#F3F4F6',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'SERVICES', href: '#services', subItems: ['Corporate Immigration', 'Private Client', 'Appeals', 'Sponsorship'] },
  { label: 'ABOUT', href: '#about', subItems: ['Our Team', 'Our Story', 'Careers'] },
  { label: 'FAQS', href: '#faqs' },
  { label: 'LEARNING CENTRE', href: '#learning' },
  { label: 'CONTACT', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'corporate',
    title: 'Corporate Immigration',
    icon: <Briefcase className="w-8 h-8 text-white" />,
    description: 'Expert guidance for businesses sponsoring skilled workers and navigating compliance.',
    link: '#corporate'
  },
  {
    id: 'private',
    title: 'Private Client',
    icon: <UserCheck className="w-8 h-8 text-white" />,
    description: 'Bespoke visa solutions for individuals, families, and high-net-worth investors.',
    link: '#private'
  },
  {
    id: 'appeals',
    title: 'Appeals & Human Rights',
    icon: <Scale className="w-8 h-8 text-white" />,
    description: 'Specialist legal representation for complex refusals and human rights claims.',
    link: '#appeals'
  },
  {
    id: 'nationality',
    title: 'British Nationality',
    icon: <Globe className="w-8 h-8 text-white" />,
    description: 'Naturalisation and registration services to help you become a British citizen.',
    link: '#nationality'
  },
  {
    id: 'student',
    title: 'Student Visas',
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    description: 'Assisting international students with Tier 4 and student route applications.',
    link: '#student'
  },
  {
    id: 'eu',
    title: 'EU Nationals',
    icon: <Plane className="w-8 h-8 text-white" />,
    description: 'Settlement schemes and visa routes for European nationals post-Brexit.',
    link: '#eu'
  },
];

// Re-import UserCheck as it was used in SERVICES but not imported in the original constants
import { UserCheck } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Anderson",
    visaType: "Sponsor Licence",
    message: "Westkin's project management of our sponsor licence application was impeccable. Efficient, clear, and successful.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Priya Patel",
    visaType: "Spouse Visa",
    message: "We were overwhelmed by the paperwork, but the team at Westkin made the process seamless. Highly recommended.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Michael Schmidt",
    visaType: "Global Talent Visa",
    message: "A truly professional law firm. Their advice was pragmatic and tailored exactly to my situation.",
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const LATEST_NEWS: Article[] = [
  {
    id: 1,
    title: "Changes to the Skilled Worker Visa Salary Thresholds 2025",
    date: "Dec 12, 2024",
    category: "Immigration Rules",
    image: "https://picsum.photos/400/250?random=20"
  },
  {
    id: 2,
    title: "Understanding the New Electronic Travel Authorisation (ETA)",
    date: "Nov 28, 2024",
    category: "Travel News",
    image: "https://picsum.photos/400/250?random=21"
  },
  {
    id: 3,
    title: "How to Switch from a Student Visa to a Work Visa",
    date: "Nov 15, 2024",
    category: "Guides",
    image: "https://picsum.photos/400/250?random=22"
  }
];
