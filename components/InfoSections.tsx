import React from 'react';
import { LATEST_NEWS, TESTIMONIALS } from '../constants';
import { Star, ArrowRight, Quote } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
            <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-2 block">Learning Centre</span>
            <h2 className="text-4xl font-serif text-[#011E26]">Latest News & Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_NEWS.map(news => (
            <div key={news.id} className="group bg-white shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden h-64 relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#011E26] px-4 py-2 text-white text-[10px] font-bold tracking-widest uppercase">
                    {news.category}
                </div>
              </div>
              <div className="p-8">
                <div className="text-[#009B8F] text-xs font-bold uppercase tracking-widest mb-3">{news.date}</div>
                <h3 className="text-xl font-serif text-[#011E26] group-hover:text-[#009B8F] transition-colors leading-snug mb-4">
                    {news.title}
                </h3>
                <a href="#" className="text-slate-500 text-sm font-semibold flex items-center gap-2 hover:text-[#011E26] transition-colors">
                    Read Article <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#011E26] text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
                <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-2 block">Client Success</span>
                <h2 className="text-4xl lg:text-5xl font-serif mb-6">What Our Clients Say</h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                    We pride ourselves on our client-centric approach. Read about the experiences of those we've helped settle in the UK.
                </p>
                <button className="border border-[#009B8F] text-[#009B8F] px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#009B8F] hover:text-white transition-colors">
                    View All Reviews
                </button>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map(t => (
                <div key={t.id} className="bg-[#022B36] p-8 border-t-4 border-[#009B8F] relative">
                <Quote className="absolute top-6 right-6 text-[#009B8F]/20" size={48} />
                <div className="flex gap-1 mb-6 text-[#009B8F]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 mb-6 font-serif italic text-lg leading-relaxed">"{t.message}"</p>
                <div>
                    <h4 className="font-bold text-white tracking-wide uppercase text-sm">{t.name}</h4>
                    <p className="text-xs text-[#009B8F] uppercase tracking-wider mt-1">{t.visaType}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};
