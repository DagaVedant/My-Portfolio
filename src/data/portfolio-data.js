// ════════════════════════════════════════════════════════════
//  PORTFOLIO DATA — edit this file to personalize your site
// ════════════════════════════════════════════════════════════

import {
  Brain, Users, Lightbulb, BarChart3,
  Mail, Phone, Linkedin, Github,
  Zap, BookOpen, Music, Globe,
  GraduationCap,
  Headphones, Camera, Gamepad2, BookMarked, Mountain, Microscope,
  Trophy, Star, Medal, Flame,
  Target, Award,
} from 'lucide-react';

// ── Identity ─────────────────────────────────────────────────
export const personal = {
  firstName: 'Deepak',
  lastName: 'Daga',
  initials: 'DD',
};

// ── Hero tagline (parts with optional highlight color) ────────
export const taglineParts = [
  { text: 'Building smarter futures at the crossroads of ' },
  { text: 'AI', color: 'hsl(158 75% 62%)' },
  { text: ', ' },
  { text: 'education', color: 'hsl(195 90% 65%)' },
  { text: ', and ' },
  { text: 'engineering', color: 'hsl(175 70% 60%)' },
  { text: '.' },
];

// ── Rotating word wheel ───────────────────────────────────────
export const rotatingWords = [
  'AI Builder',
  'Educator',
  'Engineer',
  'IoT Teacher',
  'ML Explorer',
  'Innovator',
  'Problem Solver',
  'Workshop Leader',
];

// ── Contact links ─────────────────────────────────────────────
export const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'deepakdaga@gmail.com',
    href: 'mailto:deepakdaga@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: 'TODO: your phone number',
    href: 'tel:+10000000000',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'TODO: linkedin.com/in/your-profile',
    href: 'https://linkedin.com/in/TODO',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'TODO: github.com/your-username',
    href: 'https://github.com/TODO',
  },
];

// ── About section ─────────────────────────────────────────────
export const aboutBio = `I'm passionate about using technology to create meaningful learning experiences.
My work spans from teaching IoT fundamentals to kids, to building AI-powered tools
that make education more engaging and accessible. I believe the best technology
serves people — and I'm focused on proving that.`;

export const aboutHighlights = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Exploring applied ML with a focus on audio processing, spectrogram-based models, and real-world AI systems.',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Users,
    title: 'Education & Teaching',
    description:
      '2+ years teaching IoT to kids, designing curricula, and running workshops that make technology accessible.',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Lightbulb,
    title: 'Program Leadership',
    description:
      'Managed finances, logistics, and strategy for a 4-H Innovation Lab in India — from fundraising to execution.',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: BarChart3,
    title: 'Systems Thinking',
    description:
      'Building and improving educational program structures, club operations, and scalable learning frameworks.',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
];

// ── Tech stack ────────────────────────────────────────────────
export const techCategories = [
  {
    category: 'Languages',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
    border: 'hsla(158, 75%, 52%, 0.2)',
    items: ['Python', 'JavaScript', 'HTML/CSS', 'Bash'],
  },
  {
    category: 'AI / ML',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
    border: 'hsla(195, 90%, 55%, 0.2)',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Librosa'],
  },
  {
    category: 'Hardware & IoT',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
    border: 'hsla(175, 70%, 52%, 0.2)',
    items: ['Arduino', 'Raspberry Pi', 'Sensors & Actuators', 'Breadboarding'],
  },
  {
    category: 'Tools & Platforms',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
    border: 'hsla(145, 65%, 52%, 0.2)',
    items: ['Git & GitHub', 'VS Code', 'Jupyter Notebooks', 'Google Colab'],
  },
  {
    category: 'Learning Next',
    color: 'hsl(210 80% 62%)',
    bg: 'hsla(210, 80%, 62%, 0.08)',
    border: 'hsla(210, 80%, 62%, 0.2)',
    items: ['PyTorch', 'LLM Fine-tuning', 'React', 'Docker', 'LangChain'],
    dashed: true,
    icon: Target,
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    icon: Zap,
    title: 'AI Learning Systems',
    github: null, // e.g. 'https://github.com/deepakdaga/repo'
    image: null,  // e.g. 'https://...' or import from assets
    description:
      'Developing intelligent tutoring tools that adapt to individual learning patterns using machine learning models and real-time feedback loops.',
    tags: ['Machine Learning', 'Python', 'Education'],
    accent: 'hsl(158 75% 52%)',
    accentBg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: BookOpen,
    title: 'IoT Education Platform',
    github: null,
    image: null,
    description:
      'Designed and delivered a hands-on IoT curriculum for young learners, covering sensors, microcontrollers, and connected systems over 2 years.',
    tags: ['IoT', 'Teaching', 'Curriculum Design'],
    accent: 'hsl(195 90% 55%)',
    accentBg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Music,
    title: 'Audio ML Research',
    github: null,
    image: null,
    description:
      'Exploring spectrogram-based deep learning models for audio classification and signal processing applications.',
    tags: ['Deep Learning', 'Audio', 'Research'],
    accent: 'hsl(175 70% 52%)',
    accentBg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Globe,
    title: '4-H Innovation Lab',
    github: null,
    image: null,
    description:
      'Led financial planning, logistics, and workshop execution for an innovation lab in India — bridging technology education with community impact.',
    tags: ['Leadership', 'Operations', 'Impact'],
    accent: 'hsl(145 65% 52%)',
    accentBg: 'hsla(145, 65%, 52%, 0.08)',
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: 'TODO: Your Degree / Diploma',
    school: 'TODO: Your School / University',
    period: 'TODO: e.g. 2021 – 2025',
    details:
      'TODO: Brief description of your studies, focus areas, and any notable activities.',
    icon: GraduationCap,
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    degree: 'Self-Directed Learning',
    school: 'Coursera, DeepLearning.AI, Kaggle',
    period: '2023 – Present',
    details:
      'Independent study in machine learning, AI fundamentals, data science, and audio signal processing.',
    icon: BookOpen,
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
];

// ── Certifications ────────────────────────────────────────────
export const certifications = [
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

export const certificationsInProgress = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
    border: 'hsla(145, 65%, 52%, 0.25)',
  },
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
    border: 'hsla(158, 75%, 52%, 0.25)',
  },
];

// ── Hobbies ───────────────────────────────────────────────────
export const hobbies = [
  {
    icon: Headphones,
    label: 'Music & Audio',
    description: 'Deep love for audio — from listening to analyzing sound with ML.',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Microscope,
    label: 'Tinkering',
    description: 'Taking things apart, building circuits, experimenting with hardware.',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: BookMarked,
    label: 'Reading',
    description: 'Science, technology history, and the occasional sci-fi novel.',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Gamepad2,
    label: 'Gaming',
    description: 'Strategy games and anything with good world-building.',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
  {
    icon: Mountain,
    label: 'Outdoors',
    description: 'Hiking, exploring, and getting away from screens (sometimes).',
    color: 'hsl(165 70% 50%)',
    bg: 'hsla(165, 70%, 50%, 0.08)',
  },
  {
    icon: Camera,
    label: 'Photography',
    description: 'Capturing moments and playing with light and composition.',
    color: 'hsl(210 75% 58%)',
    bg: 'hsla(210, 75%, 58%, 0.08)',
  },
];

// ── Recognitions ──────────────────────────────────────────────
export const recognitions = [
  {
    icon: Trophy,
    title: '4-H Innovation Award',
    description:
      'Recognized for outstanding leadership and program development at the 4-H Innovation Lab in India.',
    year: '2024',
    color: 'hsl(158 75% 52%)',
    bg: 'hsla(158, 75%, 52%, 0.08)',
  },
  {
    icon: Star,
    title: 'STEM Workshop Excellence',
    description:
      'Acknowledged for designing and running impactful IoT workshops reaching 50+ students.',
    year: '2023',
    color: 'hsl(195 90% 55%)',
    bg: 'hsla(195, 90%, 55%, 0.08)',
  },
  {
    icon: Medal,
    title: 'Club Leadership Recognition',
    description:
      'Award for restructuring club operations and growing active membership by 3x.',
    year: '2023',
    color: 'hsl(175 70% 52%)',
    bg: 'hsla(175, 70%, 52%, 0.08)',
  },
  {
    icon: Flame,
    title: 'Top Fundraiser',
    description:
      'Led fundraising campaigns that funded lab equipment and educational resources.',
    year: '2022',
    color: 'hsl(145 65% 52%)',
    bg: 'hsla(145, 65%, 52%, 0.08)',
  },
];
