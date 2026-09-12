import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            مورد اعتماد 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400"> هزاران کاربر</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-fuchsia-500/30 hover:bg-slate-800/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                  ))}
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-8 font-medium">
                  «{item.comment}»
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-bold text-white">{item.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" title="کاربر تایید شده" />
                  </div>
                  <span className="text-sm text-slate-400">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
