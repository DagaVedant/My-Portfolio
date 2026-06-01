import RevealSection from './RevealSection';
import { Award, BookOpen } from 'lucide-react';

const certifications = [
  {
    title: 'AI for Everyone',
    issuer: 'DeepLearning.AI / Coursera',
    year: '2024',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
    border: 'hsla(158, 75%, 52%, 0.25)',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM / Coursera',
    year: '2024',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
    border: 'hsla(195, 90%, 55%, 0.25)',
  },
  {
    title: 'IoT Fundamentals',
    issuer: 'Cisco Networking Academy',
    year: '2023',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
    border: 'hsla(175, 70%, 52%, 0.25)',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford / Coursera',
    year: '2024',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
    border: 'hsla(145, 65%, 52%, 0.25)',
  },
];

const inProgress = [
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', color: 'hsl(145 65% 52%)', bg: 'hsla(145, 65%, 52%, 0.08)', border: 'hsla(145, 65%, 52%, 0.25)' },
  { title: 'TensorFlow Developer Certificate', issuer: 'Google', color: 'hsl(158 75% 52%)', bg: 'hsla(158, 75%, 52%, 0.08)', border: 'hsla(158, 75%, 52%, 0.25)' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, hsl(145 65% 52%), transparent)' }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: 'hsl(145 65% 58%)' }}>
              Certifications
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            Always <span className="gradient-text">learning.</span>
          </h2>
        </RevealSection>

        {/* Two-column layout: timeline left, in-progress right */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Vertical timeline */}
          <div className="flex-1">
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, hsl(145 65% 52% / 0.4), hsl(158 75% 52% / 0.2), transparent)' }}
              />

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <RevealSection key={cert.title} delay={index * 80}>
                    <div className="flex gap-6 items-start group">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                          style={{ background: cert.bg, borderColor: cert.color + '60' }}
                        >
                          <Award className="w-4 h-4" style={{ color: cert.color }} />
                        </div>
                      </div>

                      {/* Card */}
                      <div
                        className="flex-1 p-5 rounded-2xl border transition-all duration-300 group-hover:scale-[1.01] mb-1"
                        style={{
                          background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                          borderColor: 'hsla(180, 30%, 20%, 0.8)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = cert.color + '55';
                          e.currentTarget.style.boxShadow = `0 4px 20px -6px ${cert.color}35`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'hsla(180, 30%, 20%, 0.8)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-inter font-bold text-foreground text-sm mb-1 leading-snug">{cert.title}</h3>
                            <p className="text-xs" style={{ color: 'hsl(175 20% 52%)' }}>{cert.issuer}</p>
                          </div>
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-md flex-shrink-0"
                            style={{ background: cert.bg, color: cert.color }}
                          >
                            {cert.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </div>

          {/* Currently pursuing — same card shape */}
          <div className="lg:w-72 flex-shrink-0">
            <RevealSection delay={400}>
              <div
                className="p-6 rounded-2xl border h-full"
                style={{
                  background: 'linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))',
                  borderColor: 'hsla(145, 65%, 52%, 0.25)',
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen className="w-4 h-4" style={{ color: 'hsl(145 65% 62%)' }} />
                  <h3 className="font-inter font-bold text-sm" style={{ color: 'hsl(145 65% 62%)' }}>
                    Currently pursuing
                  </h3>
                </div>
                <div className="space-y-3">
                  {inProgress.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-4 rounded-xl border"
                      style={{
                        background: cert.bg,
                        borderColor: cert.border,
                        borderStyle: 'dashed',
                      }}
                    >
                      <p className="text-sm font-inter font-semibold leading-snug mb-1" style={{ color: 'hsl(145 65% 70%)' }}>{cert.title}</p>
                      <p className="text-xs" style={{ color: 'hsl(175 20% 50%)' }}>{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}