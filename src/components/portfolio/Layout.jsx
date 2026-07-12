import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { personal, contactLinks } from "@/data/portfolio-data";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#recognitions" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    if (href === "#hero" || href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 border-b transition-all duration-500",
        scrolled && "backdrop-blur-xl",
      )}
      style={{
        background: scrolled
          ? "hsla(0, 0%, 100%, 0.8)"
          : "hsla(0, 0%, 100%, 0.4)",
        borderColor: "hsla(214, 32%, 88%, 0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-inter font-black text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity flex-shrink-0"
        >
          {personal.initials}
          <span className="gradient-text">.</span>
        </a>

        <div className="flex items-center gap-5 overflow-x-auto scrollbar-none min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className="text-sm font-inter font-medium transition-colors duration-300 whitespace-nowrap"
              style={{
                color:
                  hoveredLink === link.href
                    ? "hsl(217 75% 62%)"
                    : "hsl(215 16% 32%)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden sm:inline-flex flex-shrink-0 px-5 py-2 font-inter font-semibold text-sm transition-transform duration-300 hover:scale-105"
          style={{ background: "hsl(217 91% 60%)", color: "hsl(0 0% 100%)" }}
        >
          Let&apos;s Connect
        </a>
      </div>
    </nav>
  );
}

export function SocialRail() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="hidden lg:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-30 border border-border"
      style={{ background: "hsla(0, 0%, 100%, 0.7)" }}
    >
      {contactLinks.map(({ icon: Icon, label, href }, i) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          title={label}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`w-10 h-10 flex items-center justify-center transition-colors duration-200 ${
            i > 0 ? "border-t border-border" : ""
          }`}
          style={{
            color: "hsl(217 75% 48%)",
            background:
              hoveredIndex === i ? "hsla(217, 75%, 52%, 0.08)" : "transparent",
          }}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t py-8 px-6"
      style={{ borderColor: "hsla(214, 32%, 88%, 1)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-sm font-inter"
          style={{ color: "hsl(215 16% 44%)" }}
        >
          © {new Date().getFullYear()} {personal.firstName} {personal.lastName}
        </span>
      </div>
    </footer>
  );
}

export function RevealSection({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
