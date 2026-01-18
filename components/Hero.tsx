import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onConsultClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onConsultClick }) => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="World Travel" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-32 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="w-full md:w-2/3 space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase border border-red-600/30">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            #1 Overseas Career Consultant
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Create a life you love <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Across borders.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl">
            Counseling | Visas | Coaching | Job Search. <br/>
            We have helped over 1 million professionals achieve their global ambitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onConsultClick}
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-900/50 flex items-center justify-center gap-2"
            >
              Free Counseling <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
              Check Eligibility
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500"/> 50+ Offices
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500"/> 1500+ Employees
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500"/> 1 Million+ Success Stories
            </div>
          </div>
        </div>

        {/* Floating Form / Card - Visual Interest */}
        <div className="hidden md:block w-1/3 pl-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-4">Trending Visas</h3>
                <ul className="space-y-3">
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Canada Express Entry</span>
                        <span className="text-green-400 text-sm">Open</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Australia PR 189/190</span>
                        <span className="text-yellow-400 text-sm">High Demand</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span>Germany Opportunity Card</span>
                        <span className="text-blue-400 text-sm">New</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <span>UK Skilled Worker</span>
                        <span className="text-green-400 text-sm">Open</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
