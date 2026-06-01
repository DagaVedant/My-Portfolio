import { useEffect, useState } from 'react';
import RotatingWordWheel from './RotatingWordWheel';
import { personal, taglineParts } from '@/data/portfolio-data';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-16">
      {/* Animated blobs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, hsl(158 75% 45%), hsl(175 70% 35%))', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] opacity-15 animate-blob"
        style={{ background: 'radial-gradient(circle, hsl(195 90% 50%), hsl(210 80% 55%))', filter: 'blur(60px)', animationDelay: '3s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 animate-blob"
        style={{ background: 'radial-gradient(circle, hsl(175 80% 50%), transparent)', filter: 'blur(80px)', animationDelay: '1.5s' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(hsl(175 80% 60% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 60% / 0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 max-w-5xl mx-auto w-full">
        {/* Left — text content */}
        <div className="text-center lg:text-left flex-1">
          {/* Name */}
          <h1
            className={`font-inter font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4 transition-all duration-700 delay-150 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-foreground">{personal.firstName}</span>
            <br />
            <span className="gradient-text">{personal.lastName}</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-lg sm:text-xl leading-relaxed max-w-md mb-8 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ color: 'hsl(175 25% 65%)' }}
          >
            {taglineParts.map((part, i) =>
              part.color
                ? <span key={i} style={{ color: part.color }} className="font-semibold">{part.text}</span>
                : <span key={i}>{part.text}</span>
            )}
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-3 justify-center lg:justify-start transition-all duration-700 delay-[450ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-2.5 rounded-xl font-inter font-semibold text-sm transition-all duration-300 hover:scale-105 hover:glow-green"
              style={{
                background: 'linear-gradient(135deg, hsl(158 75% 52%), hsl(185 80% 50%))',
                color: 'hsl(170 60% 6%)',
              }}
            >
              See my work →
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-2.5 rounded-xl font-inter font-semibold text-sm border border-primary/30 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
              style={{ color: 'hsl(158 75% 62%)' }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — rotating word wheel */}
        <div
          className={`flex-shrink-0 transition-all duration-700 delay-[500ms] ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <RotatingWordWheel />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[800ms] ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-mono" style={{ color: 'hsl(175 25% 45%)' }}>scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, hsl(158 75% 52% / 0.5), transparent)' }} />
        </div>
      </div>
    </section>
  );
}