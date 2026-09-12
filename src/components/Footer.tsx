import React from 'react';
import { DiamondLogo } from './DiamondLogo';
import { DOWNLOAD_URL, TELEGRAM_URL } from '../data/content';
import { Heart, ArrowUp } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-slate-950/80 backdrop-blur-xl border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10">
              <DiamondLogo size={28} />
            </div>
            <div>
              <span className="font-black text-xl text-white block tracking-tight">الماس داشبورد</span>
              <p className="text-sm text-slate-400 mt-1">داشبورد شخصی‌سازی شده مرورگر</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
            <a href="#features" className="hover:text-cyan-400 transition-colors">امکانات</a>
            <a href="#install" className="hover:text-cyan-400 transition-colors">آموزش نصب</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">نظرات کاربران</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <TelegramIcon className="w-4 h-4" />
              <span>کانال تلگرام</span>
            </a>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-cyan-400 transition-colors">
              دانلود افزونه
            </a>
          </div>

          <button onClick={scrollToTop} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-sm font-semibold">
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col items-center justify-center text-sm text-slate-500 font-medium gap-3">
          <div className="flex items-center gap-2">
            <span>توسعه‌داده شده با</span>
            <Heart className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500 animate-pulse" />
            <span>برای جامعه کاربران فارسی‌زبان</span>
          </div>
          <div className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} تمامی حقوق برای الماس داشبورد محفوظ است.
          </div>
        </div>
      </div>
    </footer>
  );
};
