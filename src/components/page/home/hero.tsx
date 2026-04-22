"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "3+", label: "Tahun Berdiri" },
  { value: "10+", label: "Tim Ahli" },
];

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1a2b]">
      <div className="absolute inset-0 bg-[url('/img/footer_grid.png')] bg-cover opacity-10"></div>
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#4C9DAE]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#223650]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 py-32 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 w-fit bg-[#4C9DAE]/10 border border-[#4C9DAE]/30 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C9DAE] animate-pulse"></span>
              <span className="text-[#4C9DAE] text-sm font-medium tracking-wide">
                Startup Teknologi Indonesia
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Transformasi
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4C9DAE] to-[#D5E1E9]">
                Digital
              </span>
              <br />
              Dimulai Sini
            </h1>

            <p className="text-slate-400 text-base lg:text-lg leading-relaxed max-w-md">
              <strong className="text-white">ANI Technology</strong>{" "}
              menghadirkan inovasi melalui pengembangan produk digital unggulan
              — menggabungkan keahlian teknis dengan solusi yang relevan dan
              berdampak.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#4C9DAE] hover:bg-[#3d8a9b] text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#4C9DAE]/30 hover:-translate-y-0.5"
              >
                Mulai Sekarang
                <ArrowRight size={18} />
              </Link>
              <a
                href="https://anisolution.anitech.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 hover:border-[#4C9DAE]/50 text-slate-300 hover:text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:bg-white/5"
              >
                ANI Solution
                <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.08] hover:border-[#4C9DAE]/30 transition-all duration-300 ${i % 2 === 1 ? "mt-6" : ""}`}
              >
                <div className="text-4xl font-bold text-[#4C9DAE] mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
