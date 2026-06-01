import RevealSection from './RevealSection';
import { Headphones, Camera, Gamepad2, BookMarked, Mountain, Microscope } from 'lucide-react';

const hobbies = [
  {
    icon: Headphones,
    label: 'Music & Audio',
    description: 'Deep love for audio — from listening to analyzing sound with ML.',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Microscope,
    label: 'Tinkering',
    description: 'Taking things apart, building circuits, experimenting with hardware.',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: BookMarked,
    label: 'Reading',
    description: 'Science, technology history, and the occasional sci-fi novel.',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Gamepad2,
    label: 'Gaming',
    description: 'Strategy games and anything with good world-building.',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
  {
    icon: Mountain,
    label: 'Outdoors',
    description: 'Hiking, exploring, and getting away from screens (sometimes).',
    color: 'hsl(165 70% 50%)',
    bg: 'hsla(165, 70%, 50%, 0.08)',
  },
  {
    icon: Camera,
    label: 'Photography',
    description: 'Capturing moments and playing with light and composition.',
    color: 'hsl(210 75% 58%)',
    bg: 'hsla(210, 75%, 58%, 0.08)',
  },
];

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(210 75% 55%), transparent)', filter: 'blur(70px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(210 75% 58%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(210 75% 65%)' }}>
              Hobbies
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            Outside the <span className="gradient-text">code.</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <RevealSection key={hobby.label} delay={index * 70}>
                <div
                  className="group p-5 rounded-2xl border text-center transition-all duration-300 hover:scale-[1.05] cursor-default h-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                    borderColor: 'hsla(180, 30%, 20%, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hobby.color + '55';
                    e.currentTarget.style.boxShadow = `0 8px 30px -8px ${hobby.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: hobby.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: hobby.color }} />
                  </div>
                  <h3 className="font-inter font-bold text-foreground text-sm mb-1">{hobby.label}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'hsl(175 20% 52%)' }}>
                    {hobby.description}
                  </p>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}