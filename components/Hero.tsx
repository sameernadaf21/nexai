import React from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  return (
    <div className="relative bg-[#011E26] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="World Travel" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011E26] via-[#011E26]/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-12 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* Content Side */}
        <div className="w-full lg:w-2/3 space-y-8">
          
          <div className="inline-flex items-center gap-2 mb-2 bg-[#009B8F]/10 px-3 py-1 rounded border border-[#009B8F]/30">
             <div className="w-2 h-2 rounded-full bg-[#009B8F] animate-pulse"></div>
             <span className="text-xs font-bold tracking-widest text-[#009B8F] uppercase">#1 Overseas Career Consultant</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-serif font-light tracking-tight">
            Create A Life You Love <br/>
            <span className="text-[#009B8F] font-normal italic">Across Borders.</span>
          </h1>
          
          <p className="text-slate-400 font-light text-lg md:text-xl max-w-xl leading-relaxed">
            Counseling | Visas | Coaching | Job Search. <br/>
            We have helped over 1 million professionals achieve their global ambitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onConsultClick}
              className="px-8 py-4 bg-[#009B8F] hover:bg-[#00857a] text-white text-sm font-bold tracking-widest uppercase transition-all transform hover:translate-y-[-2px] shadow-lg shadow-[#009B8F]/20 flex items-center justify-center gap-2"
            >
              Free Counseling <ArrowRight size={16} />
            </button>
            <button className="px-8 py-4 bg-transparent border border-slate-600 hover:border-white text-white hover:bg-white hover:text-[#011E26] text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2">
              Check Eligibility
            </button>
          </div>

          <div className="flex flex-wrap gap-6 pt-8 text-xs font-bold tracking-widest uppercase text-slate-500">
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#009B8F]"/> 50+ Offices
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#009B8F]"/> 1500+ Employees
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#009B8F]"/> 1 Million+ Success Stories
            </div>
          </div>
        </div>

        {/* Floating Card - Functional Element from Y-Axis, styled Westkin */}
        <div className="w-full lg:w-1/3 pl-0 lg:pl-12">
            <div className="bg-[#00151a]/80 backdrop-blur-md border border-[#009B8F]/30 p-8 rounded-sm shadow-2xl relative transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-[#009B8F] rounded-tr-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-2xl font-serif text-white mb-6 flex items-center gap-2">
                   Trending Visas
                   <span className="h-px flex-grow bg-slate-700 ml-4"></span>
                </h3>
                
                <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 group/item cursor-pointer">
                        <span className="text-slate-300 font-sans text-sm group-hover/item:text-white transition-colors">Canada Express Entry</span>
                        <span className="text-[#009B8F] text-[10px] uppercase font-bold tracking-widest bg-[#009B8F]/10 px-2 py-1">Open</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 group/item cursor-pointer">
                        <span className="text-slate-300 font-sans text-sm group-hover/item:text-white transition-colors">Australia PR 189/190</span>
                        <span className="text-yellow-500 text-[10px] uppercase font-bold tracking-widest bg-yellow-500/10 px-2 py-1">Hot</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 group/item cursor-pointer">
                        <span className="text-slate-300 font-sans text-sm group-hover/item:text-white transition-colors">Germany Opportunity Card</span>
                        <span className="text-blue-400 text-[10px] uppercase font-bold tracking-widest bg-blue-400/10 px-2 py-1">New</span>
                    </li>
                    <li className="flex justify-between items-center group/item cursor-pointer">
                        <span className="text-slate-300 font-sans text-sm group-hover/item:text-white transition-colors">UK Skilled Worker</span>
                        <span className="text-[#009B8F] text-[10px] uppercase font-bold tracking-widest bg-[#009B8F]/10 px-2 py-1">Open</span>
                    </li>
                </ul>

                <button className="mt-8 w-full py-3 bg-white hover:bg-[#009B8F] text-[#011E26] hover:text-white font-bold text-xs uppercase tracking-widest transition-colors">
                    Calculate Points Score
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
