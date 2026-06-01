import { useState, useEffect } from 'react';

const words = [
  'AI Builder',
  'Educator',
  'Engineer',
  'IoT Teacher',
  'ML Explorer',
  'Innovator',
  'Problem Solver',
  'Workshop Leader',
];

export default function RotatingWordWheel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Build rotating circle of words
  const radius = 110;
  const centerSize = 240;
  const totalWords = words.length;

  return (
    <div className="relative flex items-center justify-center" style={{ width: centerSize, height: centerSize }}>
      {/* Outer rotating ring */}
      <div className="absolute inset-0 animate-spin-slow">
        {words.map((word, i) => {
          const angle = (i / totalWords) * 2 * Math.PI - Math.PI / 2;
          const x = Math.cos(angle) * radius + centerSize / 2;
          const y = Math.sin(angle) * radius + centerSize / 2;
          const isActive = i === currentIndex;
          return (
            <div
              key={word}
              className="absolute transition-all duration-500"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span
                className={`text-[10px] font-mono font-semibold tracking-widest uppercase whitespace-nowrap transition-all duration-500 ${
                  isActive
                    ? 'text-primary opacity-100 scale-110'
                    : 'text-muted-foreground/50 opacity-60'
                }`}
                style={{
                  transform: `rotate(${(i / totalWords) * 360 + 90}deg)`,
                  display: 'inline-block',
                }}
              >
                {isActive ? '◆' : '·'}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dashed orbit ring */}
      <div
        className="absolute rounded-full border border-dashed border-primary/20"
        style={{ width: radius * 2, height: radius * 2, left: centerSize / 2 - radius, top: centerSize / 2 - radius }}
      />

      {/* Inner glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: 100,
          height: 100,
          left: centerSize / 2 - 50,
          top: centerSize / 2 - 50,
          background: 'radial-gradient(circle, hsla(158,75%,52%,0.15) 0%, transparent 70%)',
        }}
      />

      {/* Center word display */}
      <div className="relative z-10 w-28 h-28 rounded-full border border-primary/30 flex items-center justify-center"
           style={{ background: 'radial-gradient(circle, hsla(175,60%,12%,0.9), hsla(185,50%,9%,0.95))' }}>
        <div
          className={`text-center transition-all duration-400 ${
            isAnimating ? 'opacity-0 scale-90 -translate-y-1' : 'opacity-100 scale-100 translate-y-0'
          }`}
          style={{ transition: 'all 0.3s ease' }}
        >
          <span className="gradient-text font-inter font-bold text-sm leading-tight block text-center px-2">
            {words[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}