'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/about/about_hero.webp')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a2b]/95 via-[#0d1a2b]/65 to-[#0d1a2b]/10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#4C9DAE] to-transparent"></div>

      <div className="relative z-10 min-h-[70vh] flex items-center px-6 lg:px-16 xl:px-24 py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-[#4C9DAE] transition-colors">Beranda</Link>
            <ChevronRight size={14} />
            <span className="text-[#4C9DAE]">Tentang Kami</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#4C9DAE]/10 border border-[#4C9DAE]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4C9DAE] animate-pulse"></span>
            <span className="text-[#4C9DAE] text-sm font-medium">A.N.I Technology</span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Tentang
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C9DAE] to-[#D5E1E9]">
              Kami
            </span>
          </h1>

          <div className="w-16 h-1 bg-[#4C9DAE] rounded-full mb-6"></div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
            <strong className="text-white">A.N.I Technology</strong> berdiri sebagai simbol inovasi yang lahir
            dari komunitas pembelajar yang penuh semangat — membangun masa depan digital bersama.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
