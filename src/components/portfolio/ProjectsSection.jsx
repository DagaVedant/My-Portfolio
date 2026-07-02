import RevealSection from "./RevealSection";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative blob */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(158 75% 45%), transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-5xl mx-auto">
        <RevealSection className="">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="h-px w-10 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, hsl(195 90% 55%), transparent)",
              }}
            />
            <span
              className="text-xs font-mono font-semibold tracking-widest uppercase"
              style={{ color: "hsl(195 90% 60%)" }}
            >
              Projects
            </span>
          </div>
          <h2 className="font-inter font-black text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
            Things I&apos;ve <span className="gradient-text">built.</span>
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mb-16"
            style={{ color: "hsl(175 20% 62%)" }}
          >
            A collection of projects that reflect my focus on AI, education
            technology, and real-world impact.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <RevealSection key={project.title} className="" delay={index * 100}>
                <div
                  className="group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full"
                  style={{
                    background: `linear-gradient(135deg, hsl(175 45% 9%), hsl(185 40% 11%))`,
                    borderColor: "hsla(180, 30%, 20%, 0.8)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.accent + "55";
                    e.currentTarget.style.boxShadow = `0 12px 40px -10px ${project.accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "hsla(180, 30%, 20%, 0.8)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => {
                    if (project.github)
                      window.open(
                        project.github,
                        "_blank",
                        "noopener,noreferrer",
                      );
                  }}
                >
                  {/* Project image */}
                  {project.image ? (
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full h-40 rounded-xl mb-4 flex items-center justify-center border border-dashed"
                      style={{
                        background: project.accentBg,
                        borderColor: project.accent + "30",
                      }}
                    >
                      <span
                        className="text-xs font-mono"
                        style={{ color: project.accent + "80" }}
                      >
                        add project image
                      </span>
                    </div>
                  )}

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: project.accentBg }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: project.accent }}
                      />
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 mt-1"
                      style={{ color: project.accent }}
                    />
                  </div>

                  <h3 className="font-inter font-bold text-lg text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "hsl(175 20% 58%)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg"
                        style={{
                          background: project.accentBg,
                          color: project.accent,
                          border: `1px solid ${project.accent}25`,
                        }}
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
                      className="inline-flex items-center gap-2 text-xs font-inter font-medium px-3 py-1.5 rounded-xl border transition-all duration-200 hover:scale-105"
                      style={{
                        background: project.accentBg,
                        color: project.accent,
                        borderColor: project.accent + "30",
                      }}
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
