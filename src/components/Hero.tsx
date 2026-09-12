import React from 'react';
import { DiamondLogo } from './DiamondLogo';
import { DOWNLOAD_URL, TELEGRAM_URL } from '../data/content';
import { Download, Sparkles, Shield, Zap, ArrowDown } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Version & Release Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="font-semibold">نسخه ۴.۰ منتشر شد</span>
        </div>

        {/* Central Faceted Logo Highlight */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-700 animate-pulse" />
            <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl p-5">
              <DiamondLogo size={80} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight mb-6">
          ارتقای 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"> نیوتب </span>
          مرورگر
        </h1>

        {/* Subtitle description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 font-medium leading-relaxed mb-12">
          صفحه خسته‌کننده تب جدید (New Tab) را به یک محیط کاربری زیبا، سریع و کاربردی تبدیل کنید. دسترسی آسان به سایت‌های دلخواه، تقویم، جستجوی سریع و تصاویر پس‌زمینه خیره‌کننده.
        </p>

        {/* Tech Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" id="hero-cta-group">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-60 blur-lg animate-pulse transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-cyan-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                <Download className="relative w-5 h-5 text-slate-900 stroke-[2.5]" />
              </div>
              <span className="leading-tight">نصب رایگان افزونه</span>
            </a>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-800/50 backdrop-blur-lg text-cyan-400 font-bold text-lg border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/60 transition-all duration-300"
          >
            <TelegramIcon className="w-5 h-5" />
            <span className="leading-tight">کانال پشتیبانی</span>
          </a>

          <a
            href="#install"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-md text-slate-300 font-semibold text-base border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <ArrowDown className="w-5 h-5" />
            <span>راهنمای نصب</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>بدون لگ و تاخیر</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>امن و متن‌باز</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>طراحی خیره‌کننده</span>
          </div>
        </div>
      </div>
    </section>
  );
};
