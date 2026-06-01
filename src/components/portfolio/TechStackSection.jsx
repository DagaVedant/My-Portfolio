import RevealSection from './RevealSection';
import { techCategories } from '@/data/portfolio-data';

export default function TechStackSection() {
  return (
    <section id="tech" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(175 70% 45%), transparent)', filter: 'blur(70px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(175 70% 52%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(175 70% 58%)' }}>
              Tech Stack
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            My <span className="gradient-text">toolkit.</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <RevealSection key={cat.category} delay={index * 80}>
                <div
                  className="p-6 rounded-2xl border h-full"
                  style={{
                    background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                    borderColor: cat.dashed ? cat.color + '40' : 'hsla(180, 30%, 20%, 0.8)',
                    borderStyle: cat.dashed ? 'dashed' : 'solid',
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {Icon && (
                      <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: cat.bg }}>
                        <Icon className="w-3.5 h-3.5" style={{ color: cat.color }} />
                      </div>
                    )}
                    <h3 className="font-inter font-bold text-sm" style={{ color: cat.color }}>
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-inter px-3 py-1.5 rounded-xl border transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: cat.bg,
                          color: cat.dashed ? cat.color : 'hsl(175 20% 80%)',
                          borderColor: cat.border,
                          borderStyle: cat.dashed ? 'dashed' : 'solid',
                        }}
                      >
                        {item}
                      </span>
                    ))}
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