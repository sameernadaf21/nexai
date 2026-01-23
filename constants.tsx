import React from 'react';
import { NavItem, Service, Testimonial, Article } from './types';
import { Plane, Briefcase, GraduationCap, MapPin, Anchor, BookOpen, UserCheck, Globe } from 'lucide-react';

// Keeping Westkin Design Colors for the requested look
export const BRAND_COLORS = {
  primary: '#009B8F', // Westkin Teal
  secondary: '#011E26', // Deep Dark Green/Black
  accent: '#F3F4F6',
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Admissions',
    href: '#admissions',
    subItems: [
      'University Admissions',
      'College Admissions',
      'Course Selection Guidance',
      'Application Support',
      'SOP / Personal Statement Help',
      'Scholarship Guidance',
      'Document Preparation',
      'Country Options (UK, USA, Canada, Australia, Europe)'
    ]
  },
  {
    label: 'Coaching',
    href: '#coaching',
    subItems: [
      'Academic Preparation',
      'Skills Training',
      'Interview Preparation',
      'Language Support (IELTS, TOEFL, Duolingo)',
      'Course Selection Guidance',
      'Student Readiness Programs',
      'Cultural Orientation',
      'Pre-Arrival Coaching'
    ]
  },
  {
    label: 'Immigration & Legal',
    href: '#legal',
    subItems: [
      'Immigration Advisory',
      'Student Visa Guidance',
      'Document Verification',
      'Legal Consultation (via Registered Solicitors)',
      'Compliance & Documentation',
      'Dependent & Family Visa Support',
      'Appeals Support'
    ]
  },
  {
    label: 'Travel & Transport',
    href: '#travel',
    subItems: [
      'Pre-Departure Checklist',
      'Flight & Travel Assistance',
      'Travel Insurance Guidance',
      'Accommodation Support',
      'Airport Pickup',
      'Local Transport Guidance'
    ]
  },
  {
    label: 'Accommodation',
    href: '#accommodation',
    subItems: [
      'Student Accommodation Placement',
      'Temporary Housing Support',
      'Long-Term Rental Assistance',
      'Homestay Arrangements',
      'Accommodation Guidance',
      'Safety & Location Advice'
    ]
  },
  {
    label: 'About',
    href: '#about',
    subItems: ['About Nex Overseas']
  },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'admissions',
    title: 'Admissions',
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    description: 'Expert guidance for University and College admissions, course selection, and application support.',
    link: '#admissions'
  },
  {
    id: 'coaching',
    title: 'Coaching',
    icon: <BookOpen className="w-8 h-8 text-white" />,
    description: 'Comprehensive academic preparation, skills training, and language support (IELTS, TOEFL, Duolingo).',
    link: '#coaching'
  },
  {
    id: 'visa',
    title: 'Visa',
    icon: <MapPin className="w-8 h-8 text-white" />,
    description: 'Specialized visa guidance for students, dependents, and families, including compliance support.',
    link: '#visa'
  },
  {
    id: 'accommodation',
    title: 'Accommodation',
    icon: <Anchor className="w-8 h-8 text-white" />, // Using Anchor for Accommodation as placeholder, usually Home/House icon is better but sticking to imports
    description: 'Full support for student accommodation, temporary housing, and long-term rentals.',
    link: '#accommodation'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    visaType: "Canada Student Visa",
    message: "NexOverseas made my university application process seamless. The course selection guidance was spot on!",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    visaType: "UK Student Visa",
    message: "The coaching for IELTS was excellent. I got the band score I needed for my dream university.",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    visaType: "Accommodation Support",
    message: "Found great student housing thanks to their accommodation placement service. Safe and convenient!",
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