import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone } from 'lucide-react';
import { NAV_ITEMS, BRAND_COLORS } from '../constants';

// WhatsApp icon component
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white hover:text-[#25D366] transition-colors cursor-pointer"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#011E26] shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
             <div className="w-10 h-10 border border-white flex items-center justify-center relative bg-white/10 group-hover:bg-white/20 transition-all">
                <span className="text-white font-serif font-bold text-xl">W</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#009B8F]"></span>
             </div>
             <div className="flex flex-col leading-none text-white">
                <span className="font-bold tracking-wide text-lg">westkin</span>
                <span className="text-[10px] tracking-[0.2em] text-slate-300">associates</span>
             </div>
          </div>

          {/* Desktop Nav - Center */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-white text-xs font-bold tracking-widest hover:text-[#009B8F] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
            <button className="text-white hover:text-[#009B8F] transition-colors">
              <Search size={18} />
            </button>
          </nav>

          {/* Actions - Right */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right text-white hidden xl:block">
              <div className="text-[10px] uppercase tracking-wider text-slate-400">Call Us</div>
              <div className="text-sm font-bold tracking-wide">+44 (0) 207 118 4546</div>
            </div>
            
            <WhatsAppIcon />

            <button 
              className="bg-[#009B8F] hover:bg-[#00857a] text-white text-xs font-bold py-3 px-6 uppercase tracking-widest transition-colors"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#011E26] border-t border-slate-800 shadow-xl z-50">
          <div className="flex flex-col p-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="block text-sm font-bold tracking-widest text-white uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-slate-700"/>
            <div className="flex flex-col gap-4 text-white">
                <div>
                   <span className="block text-xs text-slate-400 uppercase">Call Us</span>
                   <span className="font-bold">+44 (0) 207 118 4546</span>
                </div>
                <button className="w-full py-4 text-center bg-[#009B8F] text-white text-xs font-bold uppercase tracking-widest">
                    Book Appointment
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
