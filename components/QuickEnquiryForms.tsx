import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

type TabType = 'admissions' | 'coaching' | 'visa' | 'accommodation';

const QuickEnquiryForms: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('admissions');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const TabButton = ({ id, label }: { id: TabType; label: string }) => (
    <button
      onClick={() => { setActiveTab(id); setSubmitted(false); }}
      className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-all border-b-2 ${activeTab === id
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
            <TabButton id="admissions" label="Admissions" />
            <TabButton id="coaching" label="Coaching" />
            <TabButton id="visa" label="Visa" />
            <TabButton id="accommodation" label="Accommodation" />
          </div>

          {/* Form Area */}
          <div className="p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#009B8F]/10 text-[#009B8F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif text-[#011E26] mb-2">Request Received</h3>
                <p className="text-slate-600">A NexOverseas consultant will contact you shortly.</p>
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
                  {activeTab === 'admissions' && (
                    <>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Target Country</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                          <option>USA</option>
                          <option>UK</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>Europe</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Degree Level</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                          <option>Bachelors</option>
                          <option>Masters</option>
                          <option>PhD</option>
                          <option>Diploma</option>
                        </select>
                      </div>
                    </>
                  )}

                  {activeTab === 'coaching' && (
                    <>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Course Interest</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                          <option>IELTS</option>
                          <option>TOEFL</option>
                          <option>PTE</option>
                          <option>GRE/GMAT</option>
                          <option>Interview Prep</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Preferred Mode</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                          <option>Online</option>
                          <option>Offline</option>
                        </select>
                      </div>
                    </>
                  )}

                  {activeTab === 'visa' && (
                    <div className="col-span-1 md:col-span-2 space-y-1">
                      <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Destination Country</label>
                      <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none" placeholder="e.g. UK, Canada" />
                    </div>
                  )}

                  {activeTab === 'accommodation' && (
                    <>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">City / Location</label>
                        <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none" placeholder="Target City" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-[#011E26] uppercase tracking-wider">Accommodation Type</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#009B8F] outline-none">
                          <option>Student Housing</option>
                          <option>Private Rental</option>
                          <option>Homestay</option>
                        </select>
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