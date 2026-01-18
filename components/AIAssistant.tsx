import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Minimize2, Loader2, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const AIAssistant: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Y-Axis Immigration Assistant. How can I help you achieve your overseas dream today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(input);
    
    const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-[380px] flex flex-col items-end">
      <div className="w-full bg-white rounded-t-lg shadow-2xl border border-[#011E26]/20 overflow-hidden flex flex-col h-[500px] font-sans">
        {/* Header */}
        <div className="bg-[#011E26] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#009B8F] flex items-center justify-center relative">
               <span className="font-serif font-bold text-lg">Y</span>
               <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#011E26] rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">Y-Axis Assistant</h3>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded">
                <Minimize2 size={18} />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded">
                <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#009B8F] text-white rounded-l-xl rounded-tr-xl' 
                  : 'bg-white text-slate-800 border border-gray-100 rounded-r-xl rounded-tl-xl'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white p-4 rounded-r-xl rounded-tl-xl border border-gray-100 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-[#009B8F]" />
                <span className="text-xs text-slate-500">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-3 border border-gray-200 focus-within:border-[#009B8F] transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about visas, PR, etc..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-slate-800 placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="text-[#009B8F] hover:text-[#007a70] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Please verify critical info.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
