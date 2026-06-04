import RevealSection from './RevealSection';
import { recognitions } from '@/data/portfolio-data';

export default function RecognitionsSection() {
  return (
    <section id="recognitions" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-72 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(158 75% 52%), transparent)', filter: 'blur(70px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(158 75% 52%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(158 75% 55%)' }}>
              Recognitions
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {recognitions.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealSection key={item.title} delay={index * 80}>
                <div
                  className="group flex gap-4 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] h-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                    borderColor: 'hsla(180, 30%, 20%, 0.8)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color + '50';
                    e.currentTarget.style.boxShadow = `0 8px 30px -8px ${item.color}35`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: item.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-inter font-bold text-foreground text-sm leading-snug">{item.title}</h3>
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-md flex-shrink-0"
                        style={{ background: item.bg, color: item.color }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: 'hsl(175 20% 55%)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}