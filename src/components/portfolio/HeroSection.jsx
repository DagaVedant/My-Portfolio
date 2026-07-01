import { useEffect, useState } from 'react';
import RotatingWordWheel from './RotatingWordWheel';
import { personal, taglineParts } from '@/data/portfolio-data';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

const roles = ['AI Engineer', 'ML Developer', 'Full-Stack Dev', 'IoT Tinkerer'];
const [roleIndex, setRoleIndex] = useState(0);
const [displayed, setDisplayed] = useState('');
const [typing, setTyping] = useState(true);

useEffect(() => {
  const current = roles[roleIndex];
  if (typing) {
    if (displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setTyping(false), 1000);
      return () => clearTimeout(t);
    }
  } else {
    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    } else {
      setRoleIndex((i) => (i+1) % roles.length);
      setTyping(true);
    }
  }
}, [displayed, typing, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-12 lg:px-24 overflow-hidden pt-16">
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

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        {/* Left — text content */}
        <div className="text-center lg:text-left flex-1">
          {/* Name */}
          <h1
            className={`font-inter font-black text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-none mb-6 transition-all duration-700 delay-150 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-foreground">{personal.firstName}</span>
            <br />
            <span className="gradient-text">{personal.lastName}</span>
          </h1>
          <p
            className={`flex items-center gap-1.5 justify-center lg:justify-start text-sm mb-4 transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}
              style={{color: 'hsl(175 25% 50%)'}}
          >
            <span>📍</span>
            <span>Monroe Township, New Jersey</span>
          </p>

          {/* Typewriter */}
          <p
            className={`text-xl sm:text-2xl font-mono mb-6 transition-all duration-700 delay-250 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ color: 'hsl(158 75% 62%)' }}
          >
            {displayed}<span className="animate-pulse">|</span>
          </p>

          {/* Tagline */}
          <p
            className={`text-2xl sm:text-3xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
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
            className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 delay-[450ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-4 rounded-xl font-inter font-semibold text-lg transition-all duration-300 hover:scale-105 hover:glow-green"
              style={{
                background: 'linear-gradient(135deg, hsl(158 75% 52%), hsl(185 80% 50%))',
                color: 'hsl(170 60% 6%)',
              }}
            >
              See my projects!
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-4 rounded-xl font-inter font-semibold text-lg border border-primary/30 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
              style={{ color: 'hsl(158 75% 62%)' }}
            >
              Contact Me!
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-xl font-inter font-semibold text-lg border border-primary/30 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
              style={{ color: 'hsl(158 75% 62%)' }}
            >
              Check out my Resume!
            </a>
          </div>
        </div>

        <div
          className={`flex-shrink-0 transition-all duration-700 delay-[500ms] ${
            mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <RotatingWordWheel />
        </div>
      </div>
    </section>
  );
}