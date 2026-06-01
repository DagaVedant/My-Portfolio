import RevealSection from './RevealSection';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { contactLinks } from '@/data/portfolio-data';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, hsl(158 75% 45%), transparent)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="relative rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
               style={{
                 background: 'linear-gradient(135deg, hsla(175,50%,9%,0.95), hsla(185,45%,11%,0.95))',
                 border: '1px solid hsla(158, 75%, 52%, 0.2)',
                 boxShadow: '0 0 80px -20px hsla(158, 75%, 52%, 0.2)',
               }}>
            {/* Decorative elements */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
              style={{ background: 'linear-gradient(to right, transparent, hsl(158 75% 52% / 0.5), transparent)' }}
            />

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                 style={{ background: 'hsla(158, 75%, 52%, 0.12)', border: '1px solid hsla(158, 75%, 52%, 0.25)' }}>
              <Sparkles className="w-6 h-6" style={{ color: 'hsl(158 75% 52%)' }} />
            </div>

            <h2 className="font-inter font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              Let&apos;s build something{' '}
              <span className="gradient-text">together.</span>
            </h2>
            <p className="text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color: 'hsl(175 20% 58%)' }}>
              I&apos;m always open to conversations about AI, education technology, or interesting collaborations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mx-auto">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: 'hsla(158, 75%, 52%, 0.07)',
                    borderColor: 'hsla(158, 75%, 52%, 0.2)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'hsla(158, 75%, 52%, 0.5)'; e.currentTarget.style.background = 'hsla(158, 75%, 52%, 0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'hsla(158, 75%, 52%, 0.2)'; e.currentTarget.style.background = 'hsla(158, 75%, 52%, 0.07)'; }}
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'hsla(158, 75%, 52%, 0.15)' }}>
                    <Icon className="w-4 h-4" style={{ color: 'hsl(158 75% 62%)' }} />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-mono mb-0.5" style={{ color: 'hsl(175 20% 48%)' }}>{label}</p>
                    <p className="text-sm font-inter font-medium truncate" style={{ color: 'hsl(158 75% 72%)' }}>{value}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" style={{ color: 'hsl(158 75% 62%)' }} />
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}