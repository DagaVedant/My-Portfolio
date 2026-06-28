import RevealSection from './RevealSection';
import { leadership, leadershipIntro } from '@/data/portfolio-data';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(158 75% 50%), transparent)', filter: 'blur(80px)' }}
      />
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(158 75% 52%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(158 75% 55%)' }}>
              Leadership
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Teaching &amp; <span className="gradient-text">mentoring.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-12" style={{ color: 'hsl(175 20% 62%)' }}>
            {leadershipIntro}
          </p>
        </RevealSection>
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, hsl(158 75% 52% / 0.4), hsl(195 90% 55% / 0.4), transparent)' }} />
          <div className="flex flex-col gap-8">
            {leadership.map((role, index) => {
              const Icon = role.icon;
              return (
                <RevealSection key={role.org} delay={index * 120}>
                  <div className="flex gap-6">
                    <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                      style={{ background: role.bg, border: `1px solid ${role.color}40` }}>
                      <Icon className="w-4 h-4" style={{ color: role.color }} />
                    </div>
                    <div className="flex-1 p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01]"
                      style={{ background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))', borderColor: 'hsla(180, 30%, 20%, 0.8)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = role.color + '45'; e.currentTarget.style.boxShadow = `0 8px 30px -8px ${role.color}35`; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)'; e.currentTarget.style.boxShadow = 'none'; }}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-inter font-bold text-lg text-foreground">{role.role}</h3>
                        <span className="text-xs font-mono px-2.5 py-1 rounded-lg flex-shrink-0" style={{ background: role.bg, color: role.color }}>
                          {role.period}
                        </span>
                      </div>
                      <p className="font-inter font-medium text-sm mb-3" style={{ color: role.color }}>{role.org}</p>
                      <p className="text-sm leading-relaxed" style={{ color: 'hsl(175 20% 58%)' }}>{role.details}</p>
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