import React, { useState, useEffect } from 'react';
import { DiamondLogo } from './DiamondLogo';
import { DOWNLOAD_URL, TELEGRAM_URL } from '../data/content';
import { Download, Menu, X } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'امکانات', href: '#features' },
    { label: 'آموزش نصب', href: '#install' },
    { label: 'نظرات کاربران', href: '#testimonials' },
    { label: 'سوالات متداول', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'pt-4 px-4' : 'pt-6 px-6'}`}>
      <div className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${scrolled ? 'bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent border border-transparent'}`}>
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Brand & Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-all shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <DiamondLogo size={22} className="relative z-10" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-100 transition-colors">
              الماس داشبورد
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:bg-white/10 hover:border-cyan-500/30 transition-all" title="کانال تلگرام">
              <TelegramIcon className="w-5 h-5" />
            </a>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur animate-pulse transition duration-1000 group-hover:opacity-100"></div>
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"></span>
                  <Download className="relative w-4 h-4 stroke-[2.5]" />
                </div>
                <span>دانلود رایگان افزونه</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-6xl bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 font-bold text-sm">
              <TelegramIcon className="w-4 h-4" />
              <span>کانال تلگرام</span>
            </a>
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm shadow-lg">
              <Download className="w-4 h-4" />
              <span>دانلود افزونه</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
