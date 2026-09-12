import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { InstallGuide } from './components/InstallGuide';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-50 flex flex-col font-sans relative overflow-hidden" dir="rtl">
      {/* Global Ambient Tech Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[120px]" />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Features />
          <InstallGuide />
          <Testimonials />
          <FAQ />
          <DownloadCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
