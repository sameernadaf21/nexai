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
                <span className="font-serif font-bold text-2xl tracking-wide">westkin</span>
                <span className="text-[10px] tracking-[0.3em] uppercase opacity-70">associates</span>
             </div>
             <p className="leading-relaxed text-sm">
               Westkin Associates is a leading immigration law firm based in Mayfair, London. We provide specialized legal advice for both corporate and private clients.
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
            <h4 className="text-white font-serif font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-3">
              {['Corporate Immigration', 'Sponsor Licences', 'Skilled Worker Visa', 'Spouse Visa', 'British Citizenship', 'Appeals'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-[#009B8F] transition-colors block text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Support */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">The Firm</h4>
            <ul className="space-y-3">
              {['About Westkin', 'Our Team', 'Careers', 'Client Reviews', 'News & Insights', 'Contact Us'].map(link => (
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
                <span className="leading-relaxed">5th Floor, Maddox House,<br/>1 Maddox Street,<br/>Mayfair, London, W1S 2PZ</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-[#009B8F] flex-shrink-0" size={20} />
                <span className="text-white font-bold">+44 (0) 207 118 4546</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-[#009B8F] flex-shrink-0" size={20} />
                <span>info@westkin.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#000f13] py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Westkin Associates. Regulated by OISC (F200900067).</p>
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
