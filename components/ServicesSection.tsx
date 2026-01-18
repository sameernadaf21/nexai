import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
             <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-2 block">Our Expertise</span>
             <h2 className="text-4xl md:text-5xl font-serif text-[#011E26] leading-tight">
                Comprehensive Immigration Services
             </h2>
          </div>
          <div className="hidden md:block">
              <a href="#" className="inline-flex items-center gap-2 text-[#011E26] font-bold hover:text-[#009B8F] transition-colors uppercase text-xs tracking-widest">
                View All Services <ArrowRight size={16} />
              </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group border-t border-gray-200 pt-8 hover:border-[#009B8F] transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#011E26] group-hover:bg-[#009B8F] transition-colors duration-300 flex items-center justify-center mb-6">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 text-white" })}
              </div>
              <h3 className="text-2xl font-serif text-[#011E26] mb-3 group-hover:text-[#009B8F] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="inline-flex items-center text-[#011E26] font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300"
              >
                Learn More <ArrowRight size={14} className="ml-2"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;