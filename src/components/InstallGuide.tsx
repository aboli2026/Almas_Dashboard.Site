import React, { useState } from 'react';
import { INSTALL_STEPS, DOWNLOAD_URL } from '../data/content';
import { Download, Copy, Check, Terminal } from 'lucide-react';

export const InstallGuide: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUrl(text);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <section id="install" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            نصب و راه‌اندازی در 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> ۲ دقیقه</span>
          </h2>
          <p className="text-slate-400 text-lg">
            بدون نیاز به فروشگاه‌های تحریم‌شده، افزونه را مستقیم نصب کنید.
          </p>
        </div>

        <div className="space-y-6 relative">
          {/* Timeline Line */}
          <div className="hidden sm:block absolute top-10 bottom-10 right-[39px] w-0.5 bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-transparent" />

          {INSTALL_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:bg-slate-800/60 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-500 text-white font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0 z-10">
                  {step.stepNumber}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed mb-4">{step.description}</p>
                  
                  {step.codeSnippet && (
                    <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-sm text-cyan-400 max-w-md" dir="ltr">
                      <span>{step.codeSnippet}</span>
                      <button onClick={() => copyToClipboard(step.codeSnippet!)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                        {copiedUrl === step.codeSnippet ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedUrl === step.codeSnippet ? 'کپی شد' : 'کپی'}</span>
                      </button>
                    </div>
                  )}

                  {step.stepNumber === 1 && (
                    <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-cyan-50 transition-colors shadow-lg">
                      <Download className="w-4 h-4" />
                      <span>دانلود فایل افزونه</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
