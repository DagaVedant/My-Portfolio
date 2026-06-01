import RevealSection from './RevealSection';
import { education } from '@/data/portfolio-data';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(195 90% 50%), transparent)', filter: 'blur(80px)' }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(195 90% 55%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(195 90% 60%)' }}>
              Education
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            Where I&apos;ve <span className="gradient-text">studied.</span>
          </h2>
        </RevealSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, hsl(158 75% 52% / 0.4), hsl(195 90% 55% / 0.4), transparent)' }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <RevealSection key={edu.degree} delay={index * 120}>
                  <div className="flex gap-6">
                    {/* Icon dot on timeline */}
                    <div
                      className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                      style={{ background: edu.bg, border: `1px solid ${edu.color}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: edu.color }} />
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                        borderColor: 'hsla(180, 30%, 20%, 0.8)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = edu.color + '45';
                        e.currentTarget.style.boxShadow = `0 8px 30px -8px ${edu.color}35`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-inter font-bold text-lg text-foreground">{edu.degree}</h3>
                        <span
                          className="text-xs font-mono px-2.5 py-1 rounded-lg flex-shrink-0"
                          style={{ background: edu.bg, color: edu.color }}
                        >
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-inter font-medium text-sm mb-3" style={{ color: edu.color }}>
                        {edu.school}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(175 20% 58%)' }}>
                        {edu.details}
                      </p>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}