import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickEnquiryForms from './components/QuickEnquiryForms';
import ServicesSection from './components/ServicesSection';
import { NewsSection, TestimonialsSection } from './components/InfoSections';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import AIAssistant from './components/AIAssistant';
import { MessageSquareText } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Auto-open chat after a delay for engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only open if user hasn't interacted with it yet
      setIsChatOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-grow">
        <Hero onConsultClick={() => setIsChatOpen(true)} />
        <QuickEnquiryForms />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <NewsSection />
      </main>

      <Footer />

      {/* Chat Bot Interface */}
      <AIAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Floating Chat Button (when chat is closed) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#009B8F] hover:bg-[#00857a] text-white p-4 shadow-2xl transition-all transform hover:scale-105"
        >
          <MessageSquareText size={28} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default App;
