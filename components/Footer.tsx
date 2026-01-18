import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00151a] text-slate-400 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
             <div className="flex flex-col items-start leading-none text-white mb-6">
                <span className="font-serif font-bold text-2xl tracking-wide">Y-AXIS</span>
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">Overseas Careers</span>
             </div>
             <p className="leading-relaxed text-sm">
               Y-Axis is the world’s largest and most trusted overseas career consultant. We have been helping people achieve their global ambitions since 1999.
             </p>
             <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white hover:text-[#009B8F] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-white hover:text-[#009B8F] transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-white hover:text-[#009B8F] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-white hover:text-[#009B8F] transition-colors"><Instagram size={20} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Migrate Overseas', 'Work Overseas', 'Study Abroad', 'Visas', 'Invest', 'Coaching'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#009B8F] transition-colors block text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {['About Y-Axis', 'Contact Us', 'Book a Consultation', 'Client Login', 'Privacy Policy', 'Refund Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#009B8F] transition-colors block text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-[#009B8F] flex-shrink-0" size={20} />
                <span className="leading-relaxed">Level 1, 123 Business Park,<br/>London, UK SW1A 1AA</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#009B8F] flex-shrink-0" size={20} />
                <span className="text-white font-bold">+44 20 300 0000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#009B8F] flex-shrink-0" size={20} />
                <span>info@y-axis.co.uk</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#000f13] py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Y-Axis Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Use</a>
             <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
