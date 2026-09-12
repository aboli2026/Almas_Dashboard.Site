import React from 'react';
import { DiamondLogo } from './DiamondLogo';
import { DOWNLOAD_URL } from '../data/content';
import { Download, ArrowDown } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[3rem] p-8 sm:p-16 overflow-hidden bg-gradient-to-br from-cyan-900/40 via-indigo-900/40 to-fuchsia-900/40 border border-white/10 backdrop-blur-xl shadow-2xl text-center">
          {/* Inner ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 border border-white/20 mb-8 shadow-2xl backdrop-blur-md">
              <DiamondLogo size={48} className="drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6">
              زمان ارتقای وبگردی فرا رسیده
            </h2>
            <p className="text-cyan-100 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              الماس داشبورد کاملاً رایگان، متن‌باز و بدون هیچ تبلیغاتی است. همین حالا مرورگر خود را به یک ابزار مدرن تبدیل کنید.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-60 blur-lg animate-pulse transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-extrabold text-xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 transition-all">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                    <Download className="relative w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span>دانلود مستقیم افزونه</span>
                </a>
              </div>
              <a href="#install" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/10 text-white font-bold text-xl border border-white/20 hover:bg-white/20 transition-all">
                <ArrowDown className="w-6 h-6" />
                <span>آموزش نصب</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
