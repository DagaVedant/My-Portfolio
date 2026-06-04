import {
  Brain, Lightbulb, BarChart3,
  Mail, Phone, Linkedin, Github,
  Zap, BookOpen, Globe,
  GraduationCap,
  Headphones, Gamepad2, BookMarked, Mountain, Microscope,
  Trophy, Target,
  Activity, Mic, Shield, MapPin, Bot,
} from 'lucide-react';

/** @param {any} props */
const TennisBallIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#c8e619" />
    <path d="M9 3C5.5 5.5 4 8.5 4 12C4 15.5 5.5 18.5 9 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 3C18.5 5.5 20 8.5 20 12C20 15.5 18.5 18.5 15 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const personal = {
  firstName: 'Vedant',
  lastName: 'Daga',
  initials: 'VD',
};

export const taglineParts = [
  { text: 'Building across ' },
  { text: 'AI/ML', color: 'hsl(158 75% 62%)' },
  { text: ', ' },
  { text: 'full-stack', color: 'hsl(195 90% 65%)' },
  { text: ', and ' },
  { text: 'IoT', color: 'hsl(175 70% 60%)' },
];

export const rotatingWords = [
  'Builder',
  'AI Engineer',
  'ML Developer',
  'Full-Stack Dev',
  'IoT Tinkerer',
  'Problem Solver',
  'Innovator',
];

export const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vedantdaga04@gmail.com',
    href: 'mailto:vedantdaga04@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (609) 608-8060',
    href: 'tel:+16096088060',
  },
  {
    icon: Globe,
    label: 'Devpost',
    value: 'https://devpost.com/Vedant-Daga',
    href: 'https://devpost.com/Vedant-Daga',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/DagaVedant',
    href: 'https://github.com/DagaVedant',
  },
];

export const aboutBio = `Aspiring software engineer constantly building, learning, and shipping. I work on AI/ML, full-stack development, IoT, and automation, and I'm always picking up new technologies.`;

export const aboutHighlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Building deep learning systems — from LSTM/Transformer models for finance to CNNs for character recognition and NLP pipelines.',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Zap,
    title: 'Full-Stack Development',
    description:
      'Shipping end-to-end web apps with React, Node.js, FastAPI, and TypeScript — from interactive dashboards to AI-powered platforms.',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Microscope,
    title: 'IoT & Embedded Systems',
    description:
      'Working with Arduino and embedded hardware to build real-world connected systems and automation tools.',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Lightbulb,
    title: 'Always Shipping',
    description:
      'From healthcare optimization platforms to open-source autoclickers — constantly building, iterating, and releasing projects.',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
];

export const techCategories = [
  {
    category: 'Languages',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
    border: 'hsla(158, 75%, 52%, 0.2)',
    items: ['Python', 'TypeScript', 'JavaScript', 'HTML/CSS', 'C/C++'],
  },
  {
    category: 'AI / ML',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
    border: 'hsla(195, 90%, 55%, 0.2)',
    items: ['PyTorch', 'scikit-learn', 'Transformers', 'NumPy', 'Pandas', 'WandB', 'Jupyter'],
  },
  {
    category: 'Web & Backend',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
    border: 'hsla(175, 70%, 52%, 0.2)',
    items: ['React', 'Node.js', 'FastAPI', 'Streamlit', 'Tailwind CSS'],
  },
  {
    category: 'AI Tools & APIs',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
    border: 'hsla(145, 65%, 52%, 0.2)',
    items: ['OpenAI API', 'Ollama', 'OR-Tools', 'SimPy'],
  },
  {
    category: 'Hardware & IoT',
    color: 'hsl(210 80% 62%)',
    bg: 'hsla(210, 80%, 62%, 0.08)',
    border: 'hsla(210, 80%, 62%, 0.2)',
    items: ['Arduino', 'IoT', 'Raspberry Pi', 'Embedded Systems'],
  },
  {
    category: 'Learning Next',
    color: 'hsl(165 70% 55%)',
    bg: 'hsla(165, 70%, 55%, 0.08)',
    border: 'hsla(165, 70%, 55%, 0.2)',
    items: ['Deep Learning', 'LLM Fine-tuning', 'Reinforcement Learning', 'AI Fundamentals'],
    dashed: true,
  },
];

export const projects = [
  {
    icon: Activity,
    title: 'PulseFlow-AI',
    github: 'https://github.com/DagaVedant/PulseFlow-AI',
    image: null,
    description:
      'Healthcare operations platform combining optimization, simulation, forecasting, and AI to proactively identify and resolve hospital bottlenecks.',
    tags: ['OR-Tools', 'SimPy', 'AI', 'Healthcare', 'Python'],
    accent: 'hsl(158 75% 52%)',
    accentBg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: BarChart3,
    title: 'AI Portfolio Analyzer',
    github: 'https://github.com/DagaVedant/AI-Portfolio-Analyzer',
    image: null,
    description:
      'Deep learning platform using LSTM and Transformer models to analyze returns, volatility, downside risk, and market sentiment across 46 stocks.',
    tags: ['LSTM', 'Transformers', 'PyTorch', 'Finance', 'Deep Learning'],
    accent: 'hsl(195 90% 55%)',
    accentBg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Bot,
    title: 'FRC Chatbot — Team 10600',
    github: 'https://github.com/DagaVedant/FRC-Chatbot-Team-10600',
    image: null,
    description:
      'RAG-powered AI pit assistant for an FRC robotics team using FastAPI, Ollama, and hybrid semantic search to answer real-time competition questions.',
    tags: ['RAG', 'FastAPI', 'Ollama', 'Robotics', 'Python'],
    accent: 'hsl(175 70% 52%)',
    accentBg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Mic,
    title: 'VoiceGPT',
    github: 'https://github.com/DagaVedant/VoiceGPT',
    image: null,
    description:
      'Voice-controlled GPT assistant with speech recognition, text-to-speech, and image generation. Showcased at Maker Fair 2024.',
    tags: ['OpenAI API', 'Speech Recognition', 'TTS', 'Python'],
    accent: 'hsl(145 65% 52%)',
    accentBg: 'hsla(145, 65%, 52%, 0.08)',
  },
  {
    icon: Brain,
    title: 'EMNIST Character Classifier',
    github: 'https://github.com/DagaVedant/EMNIST-Character-Classifier',
    image: null,
    description:
      'CNN trained on the EMNIST Balanced dataset using PyTorch, Flask, and WandB — with an interactive drawing interface for real-time predictions.',
    tags: ['CNN', 'PyTorch', 'Flask', 'WandB', 'Computer Vision'],
    accent: 'hsl(210 80% 62%)',
    accentBg: 'hsla(210, 80%, 62%, 0.08)',
  },
  {
    icon: MapPin,
    title: 'California House Price Predictor',
    github: 'https://github.com/DagaVedant/California-House-Price-Predictor',
    image: null,
    description:
      'XGBoost-powered housing price prediction platform with interactive mapping and confidence intervals.',
    tags: ['XGBoost', 'scikit-learn', 'Streamlit', 'ML', 'Python'],
    accent: 'hsl(165 70% 50%)',
    accentBg: 'hsla(165, 70%, 50%, 0.08)',
  },
  {
    icon: Shield,
    title: 'Spam Message AI Classifier',
    github: 'https://github.com/DagaVedant/Spam-Message-AI-Classifier',
    image: null,
    description:
      'NLP spam detector using Multinomial Naive Bayes and custom preprocessing pipelines to classify messages with high accuracy.',
    tags: ['NLP', 'Naive Bayes', 'scikit-learn', 'Python'],
    accent: 'hsl(158 75% 52%)',
    accentBg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Globe,
    title: 'Lección 7 de Español',
    github: 'https://github.com/DagaVedant/Leccion-7-de-Espanol',
    image: null,
    description:
      'Interactive Spanish learning web app built with React, Node.js, and TypeScript.',
    tags: ['React', 'Node.js', 'TypeScript', 'Education'],
    accent: 'hsl(175 70% 52%)',
    accentBg: 'hsla(175, 70%, 52%, 0.08)',
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: 'Freshman at Edison Academy Magnet School',
    school: 'Edison Academy Magnet School',
    period: '2025 – 2029',
    details: 'Middlesex County\'s most Elite public high school.',
    icon: GraduationCap,
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    degree: 'Independent Learning',
    school: 'Online Courses and Personal Projects',
    period: '2023 – Present',
    details:
      'Independent study in AI/ML, deep learning, full-stack development, and embedded systems through hands-on projects.',
    icon: BookOpen,
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
];

// ── Certifications ────────────────────────────────────────────
/** @type {never[]} */
export const certifications = [];

/** @type {never[]} */
export const certificationsInProgress = [];

// ── Hobbies ───────────────────────────────────────────────────
export const hobbies = [
  {
    icon: Microscope,
    label: 'Tinkering',
    description: 'Taking things apart, building circuits, and experimenting with hardware.',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: TennisBallIcon,
    label: 'Tennis',
    description: 'I love playing tennis with friends and for school. Season just ended and I was JV first as a freshman. YAY!',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Gamepad2,
    label: 'Gaming',
    description: 'Playing strategy games or really anything that involves thinking and mathematics.',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: BookMarked,
    label: 'Reading',
    description: 'I love reading anything sci-fi, mystery, or just something fantasy. Favorite Series: Inheritance Games by Jennifer Lynn Barnes',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
  {
    icon: Mountain,
    label: 'Outdoors',
    description: 'I love hiking, and just exploring nature. Best trail of all time is definitely Fairy Falls Trail in Yellowstone.',
    color: 'hsl(165 70% 50%)',
    bg: 'hsla(165, 70%, 50%, 0.08)',
  },
  {
    icon: Headphones,
    label: 'Music',
    description: 'Love playing music, when on the bus, chilling in my room, and coding.',
    color: 'hsl(210 75% 58%)',
    bg: 'hsla(210, 75%, 58%, 0.08)',
  },
];

// ── Recognitions ──────────────────────────────────────────────
export const recognitions = [
  {
    icon: Trophy,
    title: 'Maker Fair 2024',
    description:
      'Showcased VoiceGPT, a voice-controlled GPT assistant with speech recognition, text-to-speech, and image generation. Check my github to see the project and test it for yourself',
    year: '2024',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  
  /*
  {
    icon: Trophy,
    title: 'Award 1',
    description: 'Placeholder for another award or recognition.',
    year: '2024',
    color: 'hsl(210 70% 50%)',
    bg: 'hsla(210, 70%, 50%, 0.08)',
  },
  {
    icon: Trophy,
    title: 'Award 2',
    description: 'Placeholder for another award or recognition.',
    year: '2024',
    color: 'hsl(45 85% 55%)',
    bg: 'hsla(45, 85%, 55%, 0.08)',
  },
  {
    icon: Trophy,
    title: 'Award 3',
    description: 'Placeholder for another award or recognition.',
    year: '2024',
    color: 'hsl(320 65% 55%)',
    bg: 'hsla(320, 65%, 55%, 0.08)',
  },
  {
    icon: Trophy,
    title: 'Award 4',
    description: 'Placeholder for another award or recognition.',
    year: '2024',
    color: 'hsl(80 65% 50%)',
    bg: 'hsla(80, 65%, 50%, 0.08)',
  },
  */
];
