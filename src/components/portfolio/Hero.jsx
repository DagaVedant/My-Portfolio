import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  personal,
  taglineParts,
  rotatingWords as words,
} from "@/data/portfolio-data";

function CoreMesh() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.22;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.3, 1]} />
      <meshStandardMaterial
        color="#3b82f6"
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function WordRing({ currentIndex, total }) {
  const groupRef = useRef();
  const radius = 2.3;

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef} rotation={[-0.35, 0, 0]}>
      {Array.from({ length: total }).map((_, i) => {
        const angle = (i / total) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const isActive = i === currentIndex;

        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[isActive ? 0.09 : 0.045, 16, 16]} />
            <meshStandardMaterial
              color={isActive ? "#3b82f6" : "#94a3b8"}
              emissive={isActive ? "#3b82f6" : "#000000"}
              emissiveIntensity={isActive ? 0.6 : 0}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function RotatingWordWheel() {
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

  return (
    <div className="relative" style={{ width: 420, height: 420 }}>
      <Canvas camera={{ position: [0, 1.4, 5.5], fov: 42 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[4, 4, 4]}
            intensity={1}
            color="#3b82f6"
          />
          <directionalLight
            position={[-4, -2, -4]}
            intensity={0.35}
            color="#38bdf8"
          />
          <CoreMesh />
          <WordRing currentIndex={currentIndex} total={words.length} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.7}
          />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-40 h-40 border flex items-center justify-center"
          style={{
            borderColor: "hsla(217, 91%, 60%, 0.3)",
            background: "hsla(0, 0%, 100%, 0.7)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            className={`gradient-text font-inter font-bold text-xl leading-tight block text-center px-3 transition-all duration-300 ${
              isAnimating
                ? "opacity-0 scale-90 -translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {words[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const roles = [
    "AI Engineer",
    "ML Developer",
    "Full-Stack Dev",
    "IoT Tinkerer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 1000);
      return () => clearTimeout(t);
    }

    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }

    setRoleIndex((i) => (i + 1) % roles.length);
    setTyping(true);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-24 pb-12">
      <div
        className={`relative z-10 w-full max-w-6xl mx-auto border border-border overflow-hidden transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ background: "hsla(0, 0%, 100%, 0.6)" }}
      >
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{
            left: "33.33%",
            width: 1,
            background: "hsla(214, 32%, 88%, 1)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{
            left: "66.66%",
            width: 1,
            background: "hsla(214, 32%, 88%, 1)",
          }}
        />

        <div className="px-6 sm:px-10 pt-8 pb-8 border-b border-border">
          <h1 className="font-mono font-black uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
            <span className="text-foreground">{personal.firstName}</span>{" "}
            <span className="gradient-text">{personal.lastName}</span>
          </h1>
          <p
            className="flex items-center gap-1.5 text-sm mt-4"
            style={{ color: "hsl(215 20% 45%)" }}
          >
            <span></span>
            <span>Monroe Township, New Jersey</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
          <div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-border">
            <p
              className="text-xl sm:text-2xl font-mono mb-4"
              style={{ color: "hsl(217 75% 48%)" }}
            >
              {displayed}
              <span className="animate-pulse">|</span>
            </p>

            <p
              className="text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ color: "hsl(215 20% 30%)" }}
            >
              {taglineParts.map((part, i) =>
                part.color ? (
                  <span
                    key={i}
                    style={{ color: part.color }}
                    className="font-semibold"
                  >
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={scrollTo("#projects")}
                className="px-8 py-3.5 font-inter font-semibold transition-all duration-300 hover:scale-105 hover:glow-primary"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(217 75% 52%), hsl(199 80% 50%))",
                  color: "hsl(0 0% 100%)",
                }}
              >
                See my projects!
              </a>
              <a
                href="#contact"
                onClick={scrollTo("#contact")}
                className="px-8 py-3.5 font-inter font-semibold border border-primary/30 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
                style={{ color: "hsl(217 75% 48%)" }}
              >
                Contact Me!
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 font-inter font-semibold border border-primary/30 transition-all duration-300 hover:border-primary/60 hover:bg-primary/10"
                style={{ color: "hsl(217 75% 48%)" }}
              >
                Resume
              </a>
            </div>
          </div>

          <div
            className="flex items-center justify-center p-6 sm:p-10"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.1, 40)}px)`,
            }}
          >
            <RotatingWordWheel />
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-border">
          {["AI / ML", "Full-Stack", "IoT"].map((label, i) => (
            <span
              key={label}
              className={`text-center text-xs font-mono tracking-widest uppercase py-4 ${
                i > 0 ? "border-l border-border" : ""
              }`}
              style={{ color: "hsl(215 16% 42%)" }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
