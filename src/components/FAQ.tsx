import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">سوالات متداول</h2>
          <p className="text-slate-400 text-lg">پاسخ به پرتکرارترین پرسش‌های شما.</p>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300">
                <button
                  className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-bold text-white text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
