import RevealSection from './RevealSection';
import { aboutBio, aboutHighlights as highlights } from '@/data/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(195 90% 55%), transparent)', filter: 'blur(70px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(158 75% 52%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(158 75% 55%)' }}>
              About
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Where AI meets{' '}
            <span className="gradient-text">education.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: 'hsl(175 20% 62%)' }}>
            {aboutBio}
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealSection key={item.title} delay={index * 100}>
                <div
                  className="group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full"
                  style={{
                    background: `linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))`,
                    borderColor: 'hsla(180, 30%, 20%, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color + '55';
                    e.currentTarget.style.boxShadow = `0 8px 30px -8px ${item.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{ background: item.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-inter font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(175 20% 58%)' }}>
                    {item.description}
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