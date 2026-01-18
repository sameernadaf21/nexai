import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import { NewsSection, TestimonialsSection } from './components/InfoSections';
import Footer from './components/Footer';
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero onConsultClick={() => setIsChatOpen(true)} />
        <ServicesSection />
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
          className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 animate-bounce"
        >
          <MessageSquareText size={28} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default App;
