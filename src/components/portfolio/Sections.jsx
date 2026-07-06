import { useState } from "react";
import { RevealSection } from "./Layout";
import { Award, BookOpen, ExternalLink, ArrowUpRight, Github, Sparkles } from "lucide-react";
import {
  aboutBio,
  aboutHighlights as highlights,
  hobbies,
  education,
  leadership,
  leadershipIntro,
  techCategories,
  projects,
  certifications,
  certificationsInProgress as inProgress,
  recognitions,
  contactLinks,
} from "@/data/portfolio-data";

const sortedProjects = [...projects].sort((a, b) => (b.inProgress ? 1 : 0) - (a.inProgress ? 1 : 0));

const DEFAULT_BORDER = "hsla(214, 32%, 88%, 1)";

function useHoverIndex() {
  const [hovered, setHovered] = useState(null);
  const bind = (index) => ({
    onMouseEnter: () => setHovered(index),
    onMouseLeave: () => setHovered(null),
  });
  return { hovered, bind };
}

function cardHoverStyle(isHovered, color, alpha, shadow) {
  return {
    borderColor: isHovered ? `${color}${alpha}` : DEFAULT_BORDER,
    boxShadow: isHovered ? shadow : "none",
  };
}

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
    </>
  );
}

export function AboutSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="about" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(217 75% 52%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(217 75% 48%)" }}>
              About
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            All About <span className="gradient-text">ME.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "hsl(215 16% 32%)" }}>
            {aboutBio}
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealSection key={item.title} delay={(index % 2) * 100}>
                <div
                  className="group p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg h-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                    ...cardHoverStyle(hovered === index, item.color, "55", `0 8px 30px -8px ${item.color}33`),
                  }}
                  {...bind(index)}
                >
                  <div className="w-11 h-11 flex items-center justify-center mb-4 transition-all duration-300" style={{ background: item.bg }}>
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-inter font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(215 16% 38%)" }}>
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

export function HobbiesSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="hobbies" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(210 75% 58%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(210 75% 45%)" }}>
              Hobbies
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            My <span className="gradient-text">Hobbies</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <RevealSection key={hobby.label} delay={(index % 3) * 70}>
                <div
                  className="group p-5 border text-center transition-all duration-300 hover:scale-[1.05] cursor-default h-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                    ...cardHoverStyle(hovered === index, hobby.color, "55", `0 8px 30px -8px ${hobby.color}40`),
                  }}
                  {...bind(index)}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: hobby.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: hobby.color }} />
                  </div>
                  <h3 className="font-inter font-bold text-foreground text-sm mb-1">{hobby.label}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "hsl(215 16% 42%)" }}>
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

export function EducationSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="education" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(199 90% 55%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(199 90% 36%)" }}>
              Education
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            My Education<span className="gradient-text"> Journey</span>
          </h2>
        </RevealSection>

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, hsl(217 75% 52% / 0.4), hsl(199 90% 55% / 0.4), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <RevealSection key={edu.degree} delay={index * 120}>
                  <div className="flex gap-6">
                    <div
                      className="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center z-10"
                      style={{ background: edu.bg, border: `1px solid ${edu.color}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: edu.color }} />
                    </div>

                    <div
                      className="flex-1 p-6 border transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                        ...cardHoverStyle(hovered === index, edu.color, "45", `0 8px 30px -8px ${edu.color}35`),
                      }}
                      {...bind(index)}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-inter font-bold text-lg text-foreground">{edu.degree}</h3>
                        <span className="text-xs font-mono px-2.5 py-1 flex-shrink-0" style={{ background: edu.bg, color: edu.color }}>
                          {edu.period}
                        </span>
                      </div>
                      <p className="font-inter font-medium text-sm mb-3" style={{ color: edu.color }}>
                        {edu.school}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(215 16% 38%)" }}>
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

export function LeadershipSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="leadership" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(217 75% 52%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(217 75% 48%)" }}>
              Leadership
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Teaching &amp; <span className="gradient-text">mentoring.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-12" style={{ color: "hsl(215 16% 32%)" }}>
            {leadershipIntro}
          </p>
        </RevealSection>

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, hsl(217 75% 52% / 0.4), hsl(199 90% 55% / 0.4), transparent)" }}
          />
          <div className="flex flex-col gap-8">
            {leadership.map((role, index) => {
              const Icon = role.icon;
              return (
                <RevealSection key={role.org} delay={index * 120}>
                  <div className="flex gap-6">
                    <div
                      className="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center z-10"
                      style={{ background: role.bg, border: `1px solid ${role.color}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: role.color }} />
                    </div>
                    <div
                      className="flex-1 p-6 border transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                        ...cardHoverStyle(hovered === index, role.color, "45", `0 8px 30px -8px ${role.color}35`),
                      }}
                      {...bind(index)}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-inter font-bold text-lg text-foreground">{role.role}</h3>
                        <span className="text-xs font-mono px-2.5 py-1 flex-shrink-0" style={{ background: role.bg, color: role.color }}>
                          {role.period}
                        </span>
                      </div>
                      <p className="font-inter font-medium text-sm mb-3" style={{ color: role.color }}>
                        {role.org}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(215 16% 38%)" }}>
                        {role.details}
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

export function TechStackSection() {
  return (
    <section id="tech" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(189 70% 52%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(189 70% 36%)" }}>
              Tech Stack
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <RevealSection key={cat.category} delay={(index % 3) * 80}>
                <div
                  className="p-6 border h-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                    borderColor: cat.dashed ? cat.color + "40" : "hsla(214, 32%, 88%, 1)",
                    borderStyle: cat.dashed ? "dashed" : "solid",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {Icon && (
                      <div className="w-6 h-6 flex items-center justify-center" style={{ background: cat.bg }}>
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
                        className="text-sm font-inter px-3 py-1.5 border transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: cat.bg,
                          color: cat.dashed ? cat.color : "hsl(215 16% 20%)",
                          borderColor: cat.border,
                          borderStyle: cat.dashed ? "dashed" : "solid",
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

export function ProjectsSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="projects" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(199 90% 55%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(199 90% 36%)" }}>
              Projects
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Things I&apos;ve <span className="gradient-text">built.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mb-16" style={{ color: "hsl(215 16% 32%)" }}>
            A collection of projects that reflect my focus on AI, education technology, and real-world impact.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {sortedProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <RevealSection key={project.title} delay={(index % 2) * 100}>
                <div
                  className="group relative p-6 border transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                    ...cardHoverStyle(hovered === index, project.accent, "55", `0 12px 40px -10px ${project.accent}40`),
                  }}
                  {...bind(index)}
                  onClick={() => {
                    if (project.github) window.open(project.github, "_blank", "noopener,noreferrer");
                  }}
                >
                  {project.image ? (
                    <div className="w-full h-40 overflow-hidden mb-4" style={{ background: project.accentBg }}>
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div
                      className="w-full h-40 mb-4 flex items-center justify-center border border-dashed"
                      style={{ background: project.accentBg, borderColor: project.accent + "30" }}
                    >
                      <span className="text-xs font-mono" style={{ color: project.accent + "80" }}>
                        add project image
                      </span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 flex items-center justify-center" style={{ background: project.accentBg }}>
                      <Icon className="w-5 h-5" style={{ color: project.accent }} />
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1"
                      style={{ color: project.accent }}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-inter font-bold text-lg text-foreground group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.inProgress && (
                      <span
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide flex-shrink-0"
                        style={{
                          background: "hsla(38, 90%, 55%, 0.12)",
                          color: "hsl(38 90% 62%)",
                          border: "1px solid hsla(38, 90%, 55%, 0.3)",
                        }}
                      >
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "hsl(215 16% 38%)" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1"
                        style={{ background: project.accentBg, color: project.accent, border: `1px solid ${project.accent}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-inter font-medium px-3 py-1.5 border transition-all duration-200 hover:scale-105"
                      style={{ background: project.accentBg, color: project.accent, borderColor: project.accent + "30" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CertificationsSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="certifications" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(217 65% 52%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(217 65% 48%)" }}>
              Certifications
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            Always <span className="gradient-text">learning.</span>
          </h2>
        </RevealSection>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="relative">
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, hsl(217 65% 52% / 0.4), hsl(217 75% 52% / 0.2), transparent)" }}
              />

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <RevealSection key={cert.title} delay={(index % 4) * 80}>
                    <div className="flex gap-6 items-start group">
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className="w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                          style={{ background: cert.bg, borderColor: cert.color + "60" }}
                        >
                          <Award className="w-4 h-4" style={{ color: cert.color }} />
                        </div>
                      </div>

                      <div
                        className="flex-1 p-5 border transition-all duration-300 group-hover:scale-[1.01] mb-1"
                        style={{
                          background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                          ...cardHoverStyle(hovered === index, cert.color, "55", `0 4px 20px -6px ${cert.color}35`),
                        }}
                        {...bind(index)}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-inter font-bold text-foreground text-sm mb-1 leading-snug">{cert.title}</h3>
                            <p className="text-xs" style={{ color: "hsl(215 16% 42%)" }}>
                              {cert.issuer}
                            </p>
                          </div>
                          <span className="text-xs font-mono px-2 py-0.5 flex-shrink-0" style={{ background: cert.bg, color: cert.color }}>
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

          <div className="lg:w-72 flex-shrink-0">
            <RevealSection delay={400}>
              <div
                className="p-6 border h-full"
                style={{
                  background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                  borderColor: "hsla(217, 65%, 52%, 0.25)",
                }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen className="w-4 h-4" style={{ color: "hsl(217 65% 48%)" }} />
                  <h3 className="font-inter font-bold text-sm" style={{ color: "hsl(217 65% 48%)" }}>
                    Currently pursuing
                  </h3>
                </div>
                <div className="space-y-3">
                  {inProgress.map((cert) => {
                    const CardTag = cert.href ? "a" : "div";
                    return (
                      <CardTag
                        key={cert.title}
                        {...(cert.href ? { href: cert.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block p-4 border transition-all duration-200 hover:scale-[1.02]"
                        style={{ background: cert.bg, borderColor: cert.border, borderStyle: "dashed" }}
                      >
                        {cert.image && <img src={cert.image} alt={cert.issuer} className="h-6 mb-3 object-contain object-left" />}
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-inter font-semibold leading-snug mb-1" style={{ color: "hsl(217 65% 40%)" }}>
                              {cert.title}
                            </p>
                            <p className="text-xs" style={{ color: "hsl(215 16% 45%)" }}>
                              {cert.issuer}
                            </p>
                          </div>
                          {cert.href && <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: "hsl(217 65% 48%)" }} />}
                        </div>
                      </CardTag>
                    );
                  })}
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RecognitionsSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="recognitions" className="py-10 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative" style={{ background: "hsla(0, 0%, 100%, 0.5)" }}>
        <CornerBrackets />
        <RevealSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 flex-shrink-0" style={{ background: "hsl(217 75% 52%)" }} />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "hsl(217 75% 48%)" }}>
              Recognitions
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-12">
            My <span className="gradient-text">Achievements</span>
          </h2>
        </RevealSection>

        <div className="relative">
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, hsl(217 75% 52% / 0.4), hsl(199 90% 55% / 0.4), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {recognitions.map((item, index) => {
              const Icon = item.icon;
              return (
                <RevealSection key={item.title} delay={(index % 4) * 80}>
                  <div className="flex gap-6">
                    <div
                      className="hidden sm:flex flex-shrink-0 w-10 h-10 items-center justify-center z-10"
                      style={{ background: item.bg, border: `1px solid ${item.color}40` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>

                    <div
                      className="flex-1 p-6 border transition-all duration-300 hover:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, hsl(0 0% 100%), hsl(210 40% 97%))",
                        ...cardHoverStyle(hovered === index, item.color, "45", `0 8px 30px -8px ${item.color}35`),
                      }}
                      {...bind(index)}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h3 className="font-inter font-bold text-lg text-foreground">{item.title}</h3>
                        <span className="text-xs font-mono px-2.5 py-1 flex-shrink-0" style={{ background: item.bg, color: item.color }}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: "hsl(215 16% 38%)" }}>
                        {item.description}
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

export function ContactSection() {
  const { hovered, bind } = useHoverIndex();

  return (
    <section id="contact" className="py-10 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, hsl(217 75% 45%), transparent)" }}
      />

      <div
        className="max-w-6xl mx-auto border border-border p-8 sm:p-12 relative text-center overflow-hidden"
        style={{ background: "hsla(0, 0%, 100%, 0.5)" }}
      >
        <CornerBrackets />
        <RevealSection>
          <div className="relative">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
              style={{ background: "linear-gradient(to right, transparent, hsl(217 75% 52% / 0.5), transparent)" }}
            />

            <div
              className="inline-flex items-center justify-center w-14 h-14 mb-6"
              style={{ background: "hsla(217, 75%, 52%, 0.12)", border: "1px solid hsla(217, 75%, 52%, 0.25)" }}
            >
              <Sparkles className="w-6 h-6" style={{ color: "hsl(217 75% 52%)" }} />
            </div>

            <h2 className="font-inter font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              Connect with <span className="gradient-text">me!</span>
            </h2>
            <p className="text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color: "hsl(215 16% 38%)" }}>
              I love talking about AI, new technologies, or fun project ideas. Contact me through my number or email!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg mx-auto">
              {contactLinks.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 border transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: hovered === index ? "hsla(217, 75%, 52%, 0.12)" : "hsla(217, 75%, 52%, 0.07)",
                    borderColor: hovered === index ? "hsla(217, 75%, 52%, 0.5)" : "hsla(217, 75%, 52%, 0.2)",
                  }}
                  {...bind(index)}
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: "hsla(217, 75%, 52%, 0.15)" }}>
                    <Icon className="w-4 h-4" style={{ color: "hsl(217 75% 48%)" }} />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xs font-mono mb-0.5" style={{ color: "hsl(215 16% 48%)" }}>
                      {label}
                    </p>
                    <p className="text-sm font-inter font-medium truncate" style={{ color: "hsl(217 75% 40%)" }}>
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0"
                    style={{ color: "hsl(217 75% 48%)" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}