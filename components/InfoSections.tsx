import React from 'react';
import { LATEST_NEWS, TESTIMONIALS } from '../constants';
import { Star, ArrowRight } from 'lucide-react';

export const NewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl font-bold text-slate-900">Latest News & Updates</h2>
                <div className="h-1 w-16 bg-red-600 mt-2 rounded-full"></div>
            </div>
            <a href="#" className="text-red-600 font-semibold text-sm flex items-center gap-1 hover:underline">
                View All News <ArrowRight size={16} />
            </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LATEST_NEWS.map(news => (
            <div key={news.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-xl mb-4 relative h-56">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-lg">
                    {news.category}
                </div>
              </div>
              <div className="text-slate-500 text-xs mb-2 font-medium uppercase tracking-wide">{news.date}</div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                {news.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="h-1 w-20 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 mb-8 italic text-lg leading-relaxed">"{t.message}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-red-600 object-cover" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-red-400">{t.visaType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
