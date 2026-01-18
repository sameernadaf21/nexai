import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-none">
                <span className="text-3xl font-bold tracking-tighter text-red-600">Y-AXIS</span>
                <span className="text-[10px] tracking-widest text-white font-semibold uppercase">Overseas Careers</span>
             </div>
             <p className="text-slate-400 leading-relaxed">
               Y-Axis is the world’s largest and most trusted overseas career consultant. We have been helping people achieve their global ambitions since 1999.
             </p>
             <div className="flex space-x-4">
                <a href="#" className="hover:text-red-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-red-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-red-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-red-600 transition-colors"><Youtube size={20} /></a>
                <a href="#" className="hover:text-red-600 transition-colors"><Instagram size={20} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Migrate', 'Work', 'Study', 'Visas', 'Invest', 'Coaching', 'Careers'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-red-600 transition-colors block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {['Contact Us', 'Book a Consultation', 'Client Login', 'Privacy Policy', 'Terms & Conditions', 'Refund Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-red-600 transition-colors block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-red-600 flex-shrink-0" size={20} />
                <span>Level 1, 123 Business Park, London, UK SW1A 1AA</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-red-600 flex-shrink-0" size={20} />
                <span>+44 20 300 0000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-red-600 flex-shrink-0" size={20} />
                <span>info@y-axis.co.uk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Y-Axis Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="mt-2 md:mt-0">
            Disclaimer: Y-Axis is a private consultancy and is not affiliated with any government agency.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
