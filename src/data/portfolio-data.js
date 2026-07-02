import {
  Brain,
  Lightbulb,
  BarChart3,
  Mail,
  Phone,
  Linkedin,
  Github,
  Zap,
  BookOpen,
  Globe,
  GraduationCap,
  Headphones,
  Gamepad2,
  BookMarked,
  Mountain,
  Microscope,
  Target,
  Activity,
  Mic,
  Shield,
  MapPin,
  Bot,
  Sprout,
  Code2,
  MessageSquare,
  Award,
  Calculator,
  Users,
  Medal,
  Star,
  Rocket,
} from "lucide-react";
import TennisBallIcon from "@/components/portfolio/TennisBallIcon";

export const personal = {
  firstName: "Vedant",
  lastName: "Daga",
  initials: "VD",
};

export const taglineParts = [
  { text: "Building across " },
  { text: "AI/ML", color: "hsl(158 75% 62%)" },
  { text: ", " },
  { text: "full-stack", color: "hsl(195 90% 65%)" },
  { text: ", and " },
  { text: "IoT", color: "hsl(175 70% 60%)" },
];

export const rotatingWords = [
  "Builder",
  "AI Engineer",
  "ML Developer",
  "Full-Stack Dev",
  "IoT Tinkerer",
  "Problem Solver",
  "Innovator",
];

export const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "vedantdaga04@gmail.com",
    href: "mailto:vedantdaga04@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (609) 608-8060",
    href: "tel:+16096088060",
  },
  {
    icon: Globe,
    label: "Devpost",
    value: "https://devpost.com/Vedant-Daga",
    href: "https://devpost.com/Vedant-Daga",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DagaVedant",
    href: "https://github.com/DagaVedant",
  },
];

export const aboutBio = `Aspiring software engineer constantly building, learning, and shipping. I work on AI/ML, full-stack development, IoT, and automation, and I'm always picking up new technologies.`;

export const aboutHighlights = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Building deep learning systems — from LSTM/Transformer models for finance to CNNs for character recognition and NLP pipelines.",
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description:
      "Shipping end-to-end web apps with React, Node.js, FastAPI, and TypeScript — from interactive dashboards to AI-powered platforms.",
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    icon: Microscope,
    title: "IoT & Embedded Systems",
    description:
      "Working with Arduino and embedded hardware to build real-world connected systems and automation tools.",
    color: "hsl(175 70% 52%)",
    bg: "hsla(175, 70%, 52%, 0.08)",
  },
  {
    icon: Lightbulb,
    title: "Always Shipping",
    description:
      "From healthcare optimization platforms to open-source autoclickers — constantly building, iterating, and releasing projects.",
    color: "hsl(145 65% 52%)",
    bg: "hsla(145, 65%, 52%, 0.08)",
  },
];

export const techCategories = [
  {
    category: "Languages",
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
    border: "hsla(158, 75%, 52%, 0.2)",
    items: ["Python", "TypeScript", "JavaScript", "HTML/CSS", "C/C++"],
  },
  {
    category: "AI / ML",
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
    border: "hsla(195, 90%, 55%, 0.2)",
    items: [
      "PyTorch",
      "scikit-learn",
      "Transformers",
      "NumPy",
      "Pandas",
      "WandB",
      "Jupyter",
    ],
  },
  {
    category: "Web & Backend",
    color: "hsl(175 70% 52%)",
    bg: "hsla(175, 70%, 52%, 0.08)",
    border: "hsla(175, 70%, 52%, 0.2)",
    items: ["React", "Node.js", "FastAPI", "Streamlit", "Tailwind CSS"],
  },
  {
    category: "AI Tools & APIs",
    color: "hsl(145 65% 52%)",
    bg: "hsla(145, 65%, 52%, 0.08)",
    border: "hsla(145, 65%, 52%, 0.2)",
    items: ["OpenAI API", "Ollama", "OR-Tools", "SimPy"],
  },
  {
    category: "Hardware & IoT",
    color: "hsl(210 80% 62%)",
    bg: "hsla(210, 80%, 62%, 0.08)",
    border: "hsla(210, 80%, 62%, 0.2)",
    items: ["Arduino", "IoT", "Raspberry Pi", "Embedded Systems"],
  },
  {
    category: "Learning Next",
    color: "hsl(165 70% 55%)",
    bg: "hsla(165, 70%, 55%, 0.08)",
    border: "hsla(165, 70%, 55%, 0.2)",
    items: [
      "Deep Learning",
      "LLM Fine-tuning",
      "Reinforcement Learning",
      "AI Fundamentals",
    ],
    dashed: true,
  },
];

export const projects = [
  {
    icon: Activity,
    title: "PulseFlow-AI",
    github: "https://github.com/DagaVedant/PulseFlow-AI",
    image:
      "https://raw.githubusercontent.com/DagaVedant/PulseFlow-AI/main/frontend/public/pages/Page%204.png",
    description:
      "Healthcare operations platform combining optimization, simulation, forecasting, and AI to proactively identify and resolve hospital bottlenecks.",
    tags: ["OR-Tools", "SimPy", "AI", "Healthcare", "Python"],
    accent: "hsl(158 75% 52%)",
    accentBg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: BarChart3,
    title: "AI Portfolio Analyzer",
    github: "https://github.com/DagaVedant/AI-Portfolio-Analyzer",
    image: `${import.meta.env.BASE_URL}images/ai-portfolio-analyzer.png`,
    description:
      "Deep learning platform that trains LSTM and Transformer models on 46 stocks to predict returns, volatility, and downside risk — with sentiment analysis, portfolio optimization, and a full backtesting engine.",
    tags: ["LSTM", "Transformers", "PyTorch", "Backtesting", "Finance"],
    accent: "hsl(195 90% 55%)",
    accentBg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    icon: Sprout,
    title: "GardenBuddy",
    github: "https://github.com/DagaVedant/GardenBuddy",
    image:
      "https://raw.githubusercontent.com/DagaVedant/GardenBuddy/main/demo/demo_website.png",
    description:
      "Real-time Raspberry Pi garden monitor with dual AI — a custom LSTM classifier plus a local Ollama LLM — surfacing live soil, temperature, humidity, and light insights on a React dashboard.",
    tags: ["Raspberry Pi", "LSTM", "Ollama", "IoT", "React"],
    accent: "hsl(135 60% 48%)",
    accentBg: "hsla(135, 60%, 48%, 0.08)",
  },
  {
    icon: Bot,
    title: "FRC Chatbot — Team 10600",
    github: "https://github.com/DagaVedant/FRC-Chatbot-Team-10600",
    image: `${import.meta.env.BASE_URL}images/frc-chatbot.png`,
    description:
      "Avocado — an AI pit assistant for FRC Team 10600 built with FastAPI, Ollama, and a hybrid TF-IDF + semantic RAG system. Answers questions about the robot, team, and game manual using local LLMs with conversation memory.",
    tags: ["RAG", "FastAPI", "Ollama", "Robotics", "Python"],
    accent: "hsl(175 70% 52%)",
    accentBg: "hsla(175, 70%, 52%, 0.08)",
  },
  {
    icon: Mic,
    title: "VoiceGPT",
    github: "https://github.com/DagaVedant/VoiceGPT",
    image: `${import.meta.env.BASE_URL}images/voicegpt-logo.png`,
    description:
      "Voice-controlled GPT assistant with speech recognition, text-to-speech, and image generation. Showcased at Maker Fair 2024.",
    tags: ["OpenAI API", "Speech Recognition", "TTS", "Python"],
    accent: "hsl(145 65% 52%)",
    accentBg: "hsla(145, 65%, 52%, 0.08)",
  },
  {
    icon: Brain,
    title: "EMNIST Character Classifier",
    github: "https://github.com/DagaVedant/EMNIST-Character-Classifier",
    image: `${import.meta.env.BASE_URL}images/emnist-classifier.png`,
    description:
      "CNN trained on the EMNIST Balanced dataset to classify handwritten digits and letters, with a PyTorch pipeline, WandB experiment tracking, and an interactive drawing web app for real-time predictions.",
    tags: ["CNN", "PyTorch", "Flask", "WandB", "Computer Vision"],
    accent: "hsl(210 80% 62%)",
    accentBg: "hsla(210, 80%, 62%, 0.08)",
  },
  {
    icon: MapPin,
    title: "California House Price Predictor",
    github: "https://github.com/DagaVedant/California-House-Price-Predictor",
    image: `${import.meta.env.BASE_URL}images/california-house-price.png`,
    description:
      "Predict median house prices anywhere in California — click a heatmap or enter an address to get an XGBoost-powered estimate with a confidence range, visualized on Google Maps.",
    tags: ["XGBoost", "scikit-learn", "Streamlit", "Google Maps", "ML"],
    accent: "hsl(165 70% 50%)",
    accentBg: "hsla(165, 70%, 50%, 0.08)",
  },
  {
    icon: Shield,
    title: "Spam Message AI Classifier",
    github: "https://github.com/DagaVedant/Spam-Message-AI-Classifier",
    image:
      "https://raw.githubusercontent.com/DagaVedant/Spam-Message-AI-Classifier/main/images/spam_wordcloud.png",
    description:
      "NLP spam detector using Multinomial Naive Bayes and custom preprocessing pipelines to classify messages with high accuracy.",
    tags: ["NLP", "Naive Bayes", "scikit-learn", "Python"],
    accent: "hsl(158 75% 52%)",
    accentBg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: Globe,
    title: "Lección 7 de Español",
    github: "https://github.com/DagaVedant/Leccion-7-de-Espanol",
    image: `${import.meta.env.BASE_URL}images/leccion-7-espanol.png`,
    description:
      "Interactive Spanish review site that helps students learn job-related vocabulary, the future and future perfect tenses, and the past subjunctive. Built with React, Node.js, and TypeScript.",
    tags: ["React", "Node.js", "TypeScript", "Education"],
    accent: "hsl(175 70% 52%)",
    accentBg: "hsla(175, 70%, 52%, 0.08)",
  },
  {
    icon: Code2,
    title: "Python-Examples",
    github: "https://github.com/DagaVedant/Python-Examples",
    image:
      "https://raw.githubusercontent.com/DagaVedant/Python-Examples/main/public/images/preview.png",
    description:
      "An interactive, browser-based Python course for beginners — no downloads, no paywalls. Bite-sized units with code examples, mini quizzes, practice problems, and projects. Live demo available.",
    tags: ["Python", "Education", "JavaScript", "Interactive"],
    accent: "hsl(210 80% 62%)",
    accentBg: "hsla(210, 80%, 62%, 0.08)",
  },
  {
    icon: MessageSquare,
    title: "Almanac Slack Bot",
    github: "https://github.com/DagaVedant/Almanac-Slack-Bot",
    image:
      "https://raw.githubusercontent.com/DagaVedant/Almanac-Slack-Bot/main/images/screenshot.png",
    description:
      "A daily-digest Slack bot that posts a fun word, fact, historical event, and quote to your channel every day.",
    tags: ["Slack API", "Node.js", "Automation", "Bot"],
    accent: "hsl(165 70% 50%)",
    accentBg: "hsla(165, 70%, 50%, 0.08)",
  },
];

export const education = [
  {
    degree: "Freshman at Edison Academy Magnet School",
    school: "Edison Academy Magnet School",
    period: "2025 – 2029",
    details: "Middlesex County's most Elite public high school.",
    icon: GraduationCap,
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    degree: "Independent Learning",
    school: "Online Courses and Personal Projects",
    period: "2023 – Present",
    details:
      "Independent study in AI/ML, deep learning, full-stack development, and embedded systems through hands-on projects.",
    icon: BookOpen,
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
];

export const leadershipIntro =
  "Beyond building software, I teach and lead — with 600+ volunteer hours focused on STEM education and youth mentoring across New Jersey.";

export const leadership = [
  {
    role: "Secretary & Mentor",
    org: "Robbinsville 4-H Innovation Club",
    period: "2022 – Present",
    details:
      "Lead and mentor a team of student teachers — planning lessons and materials, teaching 70+ students, and running outreach at schools, libraries, and senior centers. Co-designed and co-taught a 6-month IoT curriculum for students in India.",
    icon: Users,
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    role: "Lead",
    org: "4-H Curriculum Redesign",
    period: "2024 – Present",
    details:
      "Restructured the club's teaching framework for better learning progression and engagement, and introduced a peer-teaching model where senior students mentor newer participants.",
    icon: BookOpen,
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    role: "Co-founder & Teacher",
    org: "4-H Summer Learning Program",
    period: "2026 – Present",
    details:
      "Co-founding a community STEM summer program — building the curriculum and program structure ahead of its first session this summer.",
    icon: Lightbulb,
    color: "hsl(175 70% 52%)",
    bg: "hsla(175, 70%, 52%, 0.08)",
  },
];

/** @type {never[]} */
export const certifications = [];

/** @type {never[]} */
export const certificationsInProgress = [];

export const hobbies = [
  {
    icon: Microscope,
    label: "Tinkering",
    description:
      "Taking things apart, building circuits, and experimenting with hardware.",
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: TennisBallIcon,
    label: "Tennis",
    description:
      "I love playing tennis with friends and for school. Season just ended and I was JV first as a freshman. YAY!",
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    icon: Gamepad2,
    label: "Gaming",
    description:
      "Playing strategy games or really anything that involves thinking and mathematics.",
    color: "hsl(175 70% 52%)",
    bg: "hsla(175, 70%, 52%, 0.08)",
  },
  {
    icon: BookMarked,
    label: "Reading",
    description:
      "I love reading anything sci-fi, mystery, or just something fantasy. Favorite Series: Inheritance Games by Jennifer Lynn Barnes",
    color: "hsl(145 65% 52%)",
    bg: "hsla(145, 65%, 52%, 0.08)",
  },
  {
    icon: Mountain,
    label: "Outdoors",
    description:
      "I love hiking, and just exploring nature. Best trail of all time is definitely Fairy Falls Trail in Yellowstone.",
    color: "hsl(165 70% 50%)",
    bg: "hsla(165, 70%, 50%, 0.08)",
  },
  {
    icon: Headphones,
    label: "Music",
    description:
      "Love playing music, when on the bus, chilling in my room, and coding.",
    color: "hsl(210 75% 58%)",
    bg: "hsla(210, 75%, 58%, 0.08)",
  },
];

export const recognitions = [
  {
    icon: Medal,
    title: "3rd Place — TSA TEAMS Nationals",
    description:
      "Placed 3rd in the Multiple Choice round at the TSA TEAMS National Conference.",
    year: "2026",
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: Star,
    title: "Edison Academy Tech Expo Winner",
    description: "Won the Edison Academy Tech Expo.",
    year: "2026",
    color: "hsl(165 70% 50%)",
    bg: "hsla(165, 70%, 50%, 0.08)",
  },
  {
    icon: Activity,
    title: "HackJPS 2026 — PulseFlow-AI",
    description:
      "Built PulseFlow-AI, a hospital digital-twin platform simulating patient flow and predicting bottlenecks with optimization and forecasting.",
    year: "2026",
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    icon: Zap,
    title: "Top 10 Overall — MakeNJIT",
    description: "Finished in the top 10 overall at the MakeNJIT hackathon.",
    year: "2026",
    color: "hsl(210 80% 62%)",
    bg: "hsla(210, 80%, 62%, 0.08)",
  },
  {
    icon: Globe,
    title: "Honorable Mention — ILMUNC",
    description:
      "Recognized at the Ivy League Model United Nations Conference.",
    year: "2026",
    color: "hsl(145 65% 52%)",
    bg: "hsla(145, 65%, 52%, 0.08)",
  },
  {
    icon: Rocket,
    title: "NASA TechRise",
    description: "Participated in the NASA TechRise Student Challenge.",
    year: "2025",
    color: "hsl(175 70% 52%)",
    bg: "hsla(175, 70%, 52%, 0.08)",
  },
  {
    icon: Bot,
    title: "VEX IQ World Championship",
    description: "Qualified for and competed at the VEX IQ World Championship.",
    year: "2025",
    color: "hsl(195 90% 55%)",
    bg: "hsla(195, 90%, 55%, 0.08)",
  },
  {
    icon: Calculator,
    title: "MCAMC Math Competition",
    description:
      "4th place individual and 3rd place team at the MCAMC math competition.",
    year: "2025",
    color: "hsl(158 75% 52%)",
    bg: "hsla(158, 75%, 52%, 0.08)",
  },
  {
    icon: Award,
    title: "Best AI/ML Project — HackJPS",
    description:
      "Won Best AI/ML Project for VeggieBuddy, an AI diet-recommendation platform built with React, Flask, and the Google Maps Places API.",
    year: "2025",
    color: "hsl(145 65% 52%)",
    bg: "hsla(145, 65%, 52%, 0.08)",
  },
];
