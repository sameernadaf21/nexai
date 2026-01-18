import React, { useState } from 'react';
import { Menu, X, Phone, Search, User } from 'lucide-react';
import { NAV_ITEMS, BRAND_COLORS } from '../constants';
import { NavItem } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
              <Phone size={14} /> +44 20 300 0000
            </span>
            <span className="hidden sm:inline hover:text-red-500 cursor-pointer transition-colors">
              info@y-axis.co.uk
            </span>
          </div>
          <div className="flex items-center space-x-4">
             <span className="hover:text-red-500 cursor-pointer transition-colors">Pay Online</span>
             <span className="hover:text-red-500 cursor-pointer transition-colors">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.hash = ''}>
             {/* Simple SVG Logo Placeholder mimicking Y-Axis */}
             <div className="flex flex-col items-start leading-none">
                <span className="text-3xl font-bold tracking-tighter" style={{ color: BRAND_COLORS.primary }}>Y-AXIS</span>
                <span className="text-[10px] tracking-widest text-slate-600 font-semibold uppercase">Overseas Careers</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item: NavItem) => (
              <div key={item.label} className="group relative">
                <a 
                  href={item.href} 
                  className="text-slate-700 font-medium hover:text-red-600 transition-colors py-4 text-sm xl:text-base"
                >
                  {item.label}
                </a>
                {/* Simple dropdown simulation */}
                {item.subItems && (
                  <div className="absolute left-0 mt-4 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-red-600 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2">
                      {item.subItems.map(sub => (
                        <a key={sub} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600">
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
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-slate-600 hover:text-red-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white bg-red-600 px-5 py-2.5 rounded hover:bg-red-700 transition-colors shadow-sm">
              <User size={16} /> Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <a 
                  href={item.href} 
                  className="block text-lg font-medium text-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.subItems && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.subItems.map(sub => (
                      <a key={sub} href="#" className="block text-sm text-slate-500">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-3 text-center text-white bg-red-600 rounded font-semibold">
                Client Login
              </button>
              <button className="w-full py-3 text-center border border-slate-300 rounded font-semibold text-slate-700">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
