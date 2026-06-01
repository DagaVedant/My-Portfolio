import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { personal } from '@/data/portfolio-data';


const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Education', href: '#education' },
  { label: 'Toolkit', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Awards', href: '#recognitions' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-xl border-b'
          : 'bg-transparent'
      )}
      style={scrolled ? {
        background: 'hsla(170, 60%, 6%, 0.8)',
        borderColor: 'hsla(180, 30%, 20%, 0.6)',
      } : {}}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-inter font-black text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          {personal.initials}<span className="gradient-text">.</span>
        </a>
        <div className="flex items-center gap-5 overflow-x-auto scrollbar-none">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-inter font-medium transition-colors duration-300"
              style={{ color: 'hsl(175 20% 60%)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'hsl(158 75% 62%)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'hsl(175 20% 60%)'; }}
            >
              {link.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}