import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronDown, User } from 'lucide-react';
import { NAV_ITEMS, BRAND_COLORS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans ${scrolled ? 'shadow-xl' : ''}`}>

      {/* Top Bar */}
      <div className="bg-[#00151a] text-slate-400 text-[10px] md:text-xs py-2 px-6 md:px-8 border-b border-[#011E26]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1 hover:text-[#009B8F] cursor-pointer transition-colors">
              <Phone size={12} /> Call: +44 757 743 6898 / Whatsapp: +44 757 743 6898
            </span>
            <span className="hidden lg:inline hover:text-[#009B8F] cursor-pointer transition-colors">
              nex@nexoverseas.co.uk | admin@nexoverseas.co.uk
            </span>
          </div>
          <div className="flex items-center space-x-6 uppercase tracking-widest font-bold">
            <span className="hover:text-[#009B8F] cursor-pointer transition-colors">Pay Online</span>
            <span className="hover:text-[#009B8F] cursor-pointer transition-colors" onClick={() => window.location.hash = '#enquiry'}>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#011E26] py-3' : 'bg-[#011E26]/90 backdrop-blur-sm py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.location.hash = ''}>
            <div className="w-10 h-10 border border-white flex items-center justify-center relative bg-[#009B8F] group-hover:bg-white transition-all duration-500">
              <span className="text-white group-hover:text-[#009B8F] font-serif font-bold text-xl transition-colors">N</span>
            </div>
            <div className="flex flex-col leading-none text-white">
              <span className="font-serif font-bold tracking-wide text-xl">NEXOVERSEAS</span>
            </div>
          </div>

          {/* Desktop Nav with Dropdowns */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-white text-xs font-bold tracking-widest px-4 py-3 hover:text-[#009B8F] transition-colors uppercase"
                >
                  {item.label}
                  {item.subItems && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />}
                </a>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white border-t-4 border-[#009B8F] shadow-2xl w-56 rounded-b-sm py-2">
                      {item.subItems.map(sub => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 text-xs font-bold text-slate-700 hover:bg-gray-50 hover:text-[#009B8F] tracking-wide uppercase border-b border-gray-50 last:border-0"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-[#009B8F] transition-colors p-2">
              <Search size={18} />
            </button>
            <button className="flex items-center gap-2 bg-[#009B8F] hover:bg-[#00857a] text-white text-xs font-bold py-2.5 px-5 uppercase tracking-widest transition-colors rounded-sm">
              <User size={14} /> Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#009B8F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#011E26] border-t border-[#009B8F] shadow-xl z-50 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-slate-800 pb-2">
                <a
                  href={item.href}
                  className="block text-sm font-bold tracking-widest text-white uppercase mb-2"
                  onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div className="pl-4 space-y-2 border-l border-[#009B8F]/30 ml-1">
                    {item.subItems.map(sub => (
                      <a key={sub} href="#" className="block text-xs text-slate-400 hover:text-[#009B8F] py-1">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-3 text-center bg-[#009B8F] text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                Client Login
              </button>
              <button className="w-full py-3 text-center border border-slate-600 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-sm">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;