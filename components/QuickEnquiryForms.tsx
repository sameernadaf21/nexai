import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

type TabType = 'migrate' | 'work' | 'study' | 'visa';

const QuickEnquiryForms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('migrate');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const TabButton = ({ id, label }: { id: TabType; label: string }) => (
    <button
      onClick={() => { setActiveTab(id); setSubmitted(false); }}
      className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-all border-b-2 ${
        activeTab === id
          ? 'border-[#009B8F] text-[#009B8F] bg-white'
          : 'border-transparent text-slate-400 hover:text-[#011E26] bg-gray-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <section className="py-20 bg-[#F3F4F6]" id="enquiry">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
           <span className="text-[#009B8F] font-bold tracking-widest text-xs uppercase mb-2 block">Free Counseling</span>
           <h2 className="text-3xl md:text-4xl font-serif text-[#011E26]">Check Your Eligibility</h2>
           <p className="mt-4 text-slate-600 font-light">Select a category below to start your free assessment.</p>
        </div>

        <div className="bg-white shadow-xl rounded-sm overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b border-gray-100">
            <TabButton id="migrate" label="Migrate" />
            <TabButton id="work" label="Work" />
            <TabButton id="study" label="Study" />
            <TabButton id="visa" label="Visas" />
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#009B8F]/10 text-[#009B8F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif text-[#011E26] mb-2">Request Received</h3>
                <p className="text-slate-600">A Y-Axis consultant will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Common Fields */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Full Name</label>
                    <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] focus:ring-1 focus:ring-[#009B8F] outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Email Address</label>
                    <input required type="email" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] focus:ring-1 focus:ring-[#009B8F] outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Phone Number</label>
                    <input required type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] focus:ring-1 focus:ring-[#009B8F] outline-none transition-all" placeholder="+44 7700 900000" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">City</label>
                    <input required type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] focus:ring-1 focus:ring-[#009B8F] outline-none transition-all" placeholder="London" />
                  </div>

                  {/* Dynamic Fields based on Tab */}
                  {activeTab === 'migrate' && (
                    <>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Destination</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>Australia</option>
                           <option>Canada</option>
                           <option>Germany</option>
                           <option>UK</option>
                           <option>USA</option>
                         </select>
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Highest Qualification</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>PhD</option>
                           <option>Masters</option>
                           <option>Bachelors</option>
                           <option>Diploma</option>
                           <option>Other</option>
                         </select>
                      </div>
                    </>
                  )}

                  {activeTab === 'work' && (
                    <>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Job Title</label>
                         <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none" placeholder="Software Engineer" />
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Years of Experience</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>0-2 Years</option>
                           <option>3-5 Years</option>
                           <option>5-10 Years</option>
                           <option>10+ Years</option>
                         </select>
                      </div>
                    </>
                  )}

                  {activeTab === 'study' && (
                    <>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Preferred Country</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>USA</option>
                           <option>UK</option>
                           <option>Canada</option>
                           <option>Australia</option>
                           <option>Germany</option>
                         </select>
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Intake Year</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>2024</option>
                           <option>2025</option>
                           <option>2026</option>
                         </select>
                      </div>
                    </>
                  )}

                  {activeTab === 'visa' && (
                    <>
                       <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Visa Type</label>
                         <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                           <option>Tourist / Visitor</option>
                           <option>Business</option>
                           <option>Dependent</option>
                         </select>
                      </div>
                      <div className="space-y-1">
                         <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Destination</label>
                         <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none" placeholder="Enter Country" />
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full md:w-auto px-8 py-4 bg-[#009B8F] hover:bg-[#00857a] text-white text-sm font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2">
                    Check My Eligibility <ArrowRight size={16} />
                  </button>
                  <p className="mt-4 text-xs text-slate-400 text-center md:text-left">
                    By clicking submit, you agree to our Terms of Use and Privacy Policy.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickEnquiryForms;
