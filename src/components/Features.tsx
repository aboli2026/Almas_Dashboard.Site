import React from 'react';
import { FEATURES } from '../data/content';
import { Moon, Calendar, Bookmark, Search, Palette, ShieldCheck, Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Moon': return <Moon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />;
      case 'Bookmark': return <Bookmark className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors" />;
      case 'Search': return <Search className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />;
      case 'Palette': return <Palette className="w-6 h-6 text-fuchsia-400 group-hover:text-white transition-colors" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />;
      default: return <Sparkles className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            امکانات 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"> الماس داشبورد</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            ترکیبی از زیبایی‌شناسی مدرن و ابزارهای کاربردی که تجربه روزمره شما از وب را دگرگون می‌کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-lg">
                  {getIcon(feat.iconName)}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
