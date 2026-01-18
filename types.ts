export interface NavItem {
  label: string;
  href: string;
  subItems?: string[];
}

export interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  visaType: string;
  message: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}
