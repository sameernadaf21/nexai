import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  return (
    <div className="relative bg-[#011E26] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80" 
          alt="Legal Meeting" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#011E26] via-[#011E26]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#011E26]/50 to-[#011E26]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-20">
        <div className="w-full lg:w-3/5 space-y-8">
          
          {/* Google Reviews Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="flex gap-0.5 text-[#009B8F]">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" stroke="none"/>)}
             </div>
             <div className="flex flex-col leading-none">
                 <span className="text-sm font-bold">4.8</span>
                 <span className="text-[10px] text-slate-300">
                    <span className="font-semibold text-white underline decoration-slate-500 underline-offset-2">404 Google Reviews</span> from satisfied clients
                 </span>
             </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-serif font-light tracking-tight">
            An Immigration Law <br/>
            Firm You Can <span className="italic font-normal">Trust</span>
          </h1>
          
          {/* Description */}
          <div className="space-y-6 max-w-xl text-slate-300 font-light text-lg">
            <p>
              We build our immigration service around the concept of project managing every step of the application process.
            </p>
            <p className="italic border-l-2 border-[#009B8F] pl-4 text-slate-400">
              "Westkin are an ambitious enterprise which operates efficiently and effectively, managing cases in a manner which is convenient and accessible."
            </p>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <button 
              onClick={onConsultClick}
              className="group inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm border-b border-[#009B8F] pb-1 hover:text-[#009B8F] transition-colors"
            >
              Read More
              <span className="w-8 h-[1px] bg-[#009B8F] group-hover:w-12 transition-all"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
