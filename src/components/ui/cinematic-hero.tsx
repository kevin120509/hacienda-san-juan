"use client";

import { useState } from "react";
import { Leaf, Map, Menu, X, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function CinematicHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Espacios", href: "/espacios" },
    { label: "Eventos", href: "/eventos" },
    { label: "Galería", href: "/galeria" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col overflow-hidden bg-[#080b09] -mt-[72px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/verdant.mp4" type="video/mp4" />
      </video>

      {/* Bottom Blur Overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none backdrop-blur-xl"
        style={{
          WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 46%)",
          maskImage: "linear-gradient(to top, black 0%, transparent 46%)"
        }}
      />
      
      {/* Fine Grain Layer */}
      <div 
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Custom Navbar (z-index 50) */}
      <nav className="relative z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 md:py-6 pt-8 md:pt-10">
        {/* Left */}
        <div className="flex items-center gap-2 animate-blur-fade-up" style={{ animationDelay: '0ms' }}>
          <Leaf size={18} className="animate-sway text-accent" />
          <span className="font-[var(--font-ibm)] font-medium tracking-[0.2em] text-white text-xs md:text-sm">HACIENDA SAN JUAN DE LAS FLORES</span>
        </div>

        {/* Center Links (hidden below lg) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${100 + (idx * 50)}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/cotizar"
            className="hidden sm:flex rounded-full liquid-glass px-4 md:px-6 py-2 text-sm text-white hover:text-white/80 transition-colors animate-blur-fade-up items-center justify-center"
            style={{ animationDelay: '300ms' }}
          >
            Agenda un recorrido
          </Link>
          <Link
            href="/#ubicacion"
            className="hidden sm:flex w-10 h-10 rounded-full liquid-glass items-center justify-center text-white animate-blur-fade-up hover:text-accent transition-colors"
            style={{ animationDelay: '350ms' }}
          >
            <Map size={18} />
          </Link>
          
          <button 
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white transition-transform duration-500 animate-blur-fade-up"
            style={{ animationDelay: '300ms' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div 
        className={`lg:hidden absolute top-[80px] left-4 right-4 z-40 bg-[#080b09]/95 backdrop-blur-lg border-t border-b border-white/10 shadow-2xl rounded-lg overflow-hidden transition-all duration-500 ease-out flex flex-col ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="p-2 flex flex-col">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-3 px-4 rounded-lg hover:bg-white/5 text-white/80 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="sm:hidden border-t border-white/10 p-4 flex gap-3">
          <Link href="/cotizar" className="flex-1 rounded-full liquid-glass px-4 py-2 text-sm text-white text-center flex items-center justify-center">
            Recorrido
          </Link>
          <Link href="/#ubicacion" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white shrink-0">
            <Map size={18} />
          </Link>
        </div>
      </div>

      {/* Hero Content (bottom of viewport) */}
      <div className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 z-10">
        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-[11px] font-[var(--font-ibm)] text-white/80 animate-blur-fade-up" style={{ animationDelay: '300ms' }}>
          <div className="vine-line w-8" />
          <span className="uppercase tracking-[0.24em]">YAXKUKUL, YUCATÁN</span>
          <span>·</span>
          <span className="uppercase tracking-[0.24em]">RODEADA DE NATURALEZA</span>
          <span>·</span>
          <span className="uppercase tracking-[0.24em] text-accent">RESERVA AHORA</span>
        </div>

        {/* Headline */}
        <h1 className="font-[var(--font-cormorant)] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 md:mb-6 tracking-[-0.02em] text-white animate-blur-fade-up leading-tight" style={{ animationDelay: '400ms' }}>
          El escenario perfecto para tu <span className="italic text-accent">historia</span>.
        </h1>

        {/* Sub-line */}
        <p className="font-[var(--font-ibm)] text-sm sm:text-base text-white/60 mb-6 md:mb-10 max-w-xl animate-blur-fade-up leading-relaxed" style={{ animationDelay: '500ms' }}>
          Una hacienda donde la historia y la selva yucateca se funden en perfecta armonía. Espacios diseñados para momentos inolvidables.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link 
            href="/contacto"
            className="bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center hover:bg-gray-200 transition-colors animate-blur-fade-up w-full sm:w-auto"
            style={{ animationDelay: '600ms' }}
          >
            Contáctanos <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link 
            href="/cotizar"
            className="rounded-full liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center text-white animate-blur-fade-up w-full sm:w-auto hover:bg-white/5 transition-colors"
            style={{ animationDelay: '700ms' }}
          >
            Cotizar evento <ArrowRight size={18} className="ml-2 text-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
