// Portfolio Data for Siddhi Uttekar
// This file contains all the static data for the portfolio

export interface Profile {
  firstName: string;
  lastName: string;
  headline: string;
  headlineStaticText: string;
  headlineAnimatedWords: string[];
  headlineAnimationDuration: number;
  shortBio: string;
  fullBio: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    medium?: string;
    devto?: string;
    takeuforward?: string;
  };
  yearsOfExperience: number;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  proficiency: string;
  percentage: number;
  yearsOfExperience: number;
  color?: string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  image?: string;
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  order: number;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  gpa?: string;
  description: string;
  achievements: string[];
  order: number;
}

export interface Achievement {
  _id: string;
  title: string;
  type: string;
  issuer: string;
  date: string;
  description: string;
  url?: string;
  featured: boolean;
  order: number;
}

export interface Certification {
  _id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  order: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  date: string;
  linkedinUrl?: string;
  featured: boolean;
  order: number;
  image?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  pricing: {
    startingPrice: number;
    priceType: string;
    description: string;
  };
  timeline: string;
  featured: boolean;
  order: number;
}

// ============================================
// SIDDHI UTTEKAR'S PORTFOLIO DATA
// ============================================

// Profile Data
export const profile: Profile = {
  firstName: "Siddhi",
  lastName: "Uttekar",
  headline: "Full-Stack Developer & GenAI Engineer",
  headlineStaticText: "I build",
  headlineAnimatedWords: [
    "AI-powered applications",
    "RAG pipelines",
    "full-stack web apps",
    "healthcare AI assistants",
    "OCR-driven tools",
  ],
  headlineAnimationDuration: 3000,
  shortBio:
    "B.Tech Information Technology graduate passionate about building full-stack and AI-powered applications. I develop RAG pipelines, intelligent assistants, and scalable web applications using React, FastAPI, PostgreSQL, LangChain, and modern cloud technologies.",
  fullBio: `I'm Siddhi Uttekar, a graduate in B.Tech Information Technology from AISSMS Institute of Information Technology, Pune, with a CGPA of 8.76/10.

💡 Focus Areas: I work across the full stack — React, Next.js, Node.js, and Express.js — while specializing in Generative AI: building RAG pipelines with LangChain, FAISS, and VoyageAI, and integrating LLMs like Llama 3.1 and GROQ into real products.

🚀 Experience: As a Frontend Development Intern at EasyLearning, I built a password-less Email-OTP authentication system and a LaTeX-enabled test attempt engine with MathJax rendering, actively used by real students and teachers.

📄 Research: I co-authored "Mockhire: Adaptive Interview Training and Recruitment Automation Through Objective AI Assessment," published in IEEE Xplore and Scopus-indexed proceedings.

☁️ Certifications: I'm certified in OCI 2025 GenAI Professional, Azure AI Fundamentals (AI-900), Azure Data Fundamentals (DP-900), and am an AWS Academy Graduate — reflecting my focus on cloud and AI technologies.

🤝 Let's Connect: Whether it's about GenAI, full-stack development, or new opportunities, I'm always open to connecting and learning from meaningful conversations.`,
  email: "siddhiuttekar02@gmail.com",
  phone: "",
  location: "Pune, India",
  availability: "Open for opportunities",
  socialLinks: {
    github: "https://github.com/siddhi-uttekar",
    linkedin: "https://www.linkedin.com/in/siddhi-uttekar-b89307274/",
    takeuforward: "https://takeuforward.org/profile/siddhii",
  },
  yearsOfExperience: 1,
  stats: [
    { label: "CGPA", value: "8.76/10" },
    { label: "AI/Web Projects", value: "3+" },
    { label: "Certifications", value: "4" },
    { label: "IEEE Publication", value: "1" },
  ],
};

// Skills Data
export const skills: Skill[] = [
  // Programming Languages
  {
    _id: "skill-java",
    name: "Java",
    category: "languages",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 3,
    color: "#007396",
  },
  {
    _id: "skill-python",
    name: "Python",
    category: "languages",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#3776AB",
  },
  {
    _id: "skill-sql",
    name: "SQL",
    category: "languages",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 2,
    color: "#336791",
  },
  {
    _id: "skill-javascript",
    name: "JavaScript",
    category: "languages",
    proficiency: "advanced",
    percentage: 88,
    yearsOfExperience: 3,
    color: "#F7DF1E",
  },
  {
    _id: "skill-html",
    name: "HTML",
    category: "languages",
    proficiency: "expert",
    percentage: 95,
    yearsOfExperience: 3,
    color: "#E34F26",
  },
  {
    _id: "skill-css",
    name: "CSS",
    category: "languages",
    proficiency: "advanced",
    percentage: 90,
    yearsOfExperience: 3,
    color: "#1572B6",
  },

  // Frameworks & Libraries
  {
    _id: "skill-react",
    name: "React.js",
    category: "frontend",
    proficiency: "advanced",
    percentage: 88,
    yearsOfExperience: 2,
    color: "#61DAFB",
  },
  {
    _id: "skill-nextjs",
    name: "Next.js",
    category: "frontend",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 1,
    color: "#000000",
  },
  {
    _id: "skill-tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "advanced",
    percentage: 88,
    yearsOfExperience: 2,
    color: "#06B6D4",
  },
  {
    _id: "skill-shadcn",
    name: "Shadcn UI",
    category: "frontend",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 1,
    color: "#000000",
  },
  {
    _id: "skill-nodejs",
    name: "Node.js",
    category: "backend",
    proficiency: "advanced",
    percentage: 82,
    yearsOfExperience: 2,
    color: "#339933",
  },
  {
    _id: "skill-fastapi",
    name: "FastAPI",
    category: "backend",
    proficiency: "intermediate",
    percentage: 75,
    yearsOfExperience: 1,
    color: "#009688",
  },

  // Databases & Cloud
  {
    _id: "skill-postgresql",
    name: "PostgreSQL",
    category: "database",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 2,
    color: "#336791",
  },
  {
    _id: "skill-aws",
    name: "AWS (EC2, S3)",
    category: "cloud",
    proficiency: "intermediate",
    percentage: 70,
    yearsOfExperience: 1,
    color: "#FF9900",
  },

  // AI / GenAI & Tools
  {
    _id: "skill-rag",
    name: "RAG",
    category: "ai",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 1,
    color: "#8B5CF6",
  },
  {
    _id: "skill-langchain",
    name: "LangChain",
    category: "ai",
    proficiency: "advanced",
    percentage: 82,
    yearsOfExperience: 1,
    color: "#1C3C3C",
  },
  {
    _id: "skill-faiss",
    name: "FAISS",
    category: "ai",
    proficiency: "advanced",
    percentage: 80,
    yearsOfExperience: 1,
    color: "#0467DF",
  },
  {
    _id: "skill-prompt-engineering",
    name: "Prompt Engineering",
    category: "ai",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 1,
    color: "#10A37F",
  },
  {
    _id: "skill-ocr",
    name: "OCR (Tesseract.js)",
    category: "ai",
    proficiency: "intermediate",
    percentage: 75,
    yearsOfExperience: 1,
    color: "#F4B400",
  },
  {
    _id: "skill-voice-ai",
    name: "Voice AI Integration",
    category: "ai",
    proficiency: "intermediate",
    percentage: 70,
    yearsOfExperience: 1,
    color: "#EA4335",
  },

  // Tools
  {
    _id: "skill-git",
    name: "Git/GitHub",
    category: "tools",
    proficiency: "advanced",
    percentage: 90,
    yearsOfExperience: 3,
    color: "#F05032",
  },
  {
    _id: "skill-postman",
    name: "Postman",
    category: "tools",
    proficiency: "advanced",
    percentage: 85,
    yearsOfExperience: 2,
    color: "#FF6C37",
  },
  {
    _id: "skill-docker",
    name: "Docker",
    category: "tools",
    proficiency: "intermediate",
    percentage: 72,
    yearsOfExperience: 1,
    color: "#2496ED",
  },
];

// Projects Data
export const projects: Project[] = [
  {
    _id: "proj-1",
    title: "AI Codebase Assistant",
    slug: "ai-codebase-assistant",
    tagline:
      "RAG-powered assistant that lets developers query repositories in natural language, tracing logic flow across Python, JS, and Java codebases",
    category: "ai",
    technologies: ["RAG", "FastAPI", "LangChain", "FAISS", "VoyageAI", "React"],
    liveUrl: "https://ai-codebase-assistant.netlify.app/",
    featured: true,
    order: 1,
  },
  {
    _id: "proj-2",
    title: "EatWise",
    slug: "eatwise",
    tagline:
      "AI-powered food safety analyzer that detects harmful or allergen ingredients from packaging images using OCR and GROQ-powered analysis",
    category: "ai-fullstack",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tesseract.js",
      "GROQ API",
    ],
    liveUrl: "https://eat-wise-six.vercel.app",
    featured: true,
    order: 2,
  },
  {
    _id: "proj-3",
    title: "JeevanAI",
    slug: "jeevanai",
    tagline:
      "AI-powered healthcare assistant that analyzes user-reported symptoms and generates objective diagnostic reports with specialist referrals",
    category: "ai-fullstack",
    technologies: ["Next.js", "Groq API (Llama 3.1)", "Tailwind CSS", "jsPDF"],
    liveUrl: "https://jeevan-ai.netlify.app/",
    featured: true,
    order: 3,
  },
  {
    _id: "proj-4",
    title: "Fashion Retail Sales Analytics",
    slug: "fashion-retail-sales-analytics",
    tagline:
      "Built a PostgreSQL-backed retail analytics workflow with 3 Power BI dashboards and Python validation to uncover revenue, retention, and regional sales insights from a 6.4M-row dataset.",
    category: "data-analytics",
    technologies: ["PostgreSQL", "Power BI", "Python", "Pandas", "scikit-learn"],
    githubUrl: "https://github.com/Siddhi-Uttekar/fashion-sales-analysis",
    featured: true,
    order: 4,
  },
];

// Experience Data
export const experiences: Experience[] = [
  {
    _id: "exp-1",
    company: "EasyLearning",
    position: "Frontend Development Intern",
    employmentType: "internship",
    location: "Remote",
    startDate: "2025-06-01",
    endDate: "2025-08-31",
    current: false,
    description:
      "Built authentication and assessment features for a live e-learning platform used by real students and teachers.",
    responsibilities: [
      "Engineer password-less Email-OTP authentication using TanStack Router guards, Axios interceptors, and secure JWT cookies",
      "Build a LaTeX-enabled test attempt engine with MathJax rendering and real-time answer tracking",
    ],
    achievements: [
      "Eliminated passwords entirely, enabling secure instant access via Email-OTP",
      "Shipped a test attempt engine actively used by real students and teachers in a live learning environment",
    ],
    technologies: ["TanStack Router", "Axios", "JWT", "MathJax", "React"],
    order: 1,
  },
];

// Education Data
export const education: Education[] = [
  {
    _id: "edu-1",
    institution: "AISSMS Institute of Information Technology",
    degree: "B.Tech in Information Technology",
    fieldOfStudy: "Graduate",
    startDate: "2022-11-01",
    endDate: "2026-06-30",
    current: false,
    gpa: "8.76/10",
    description:"Coursework : Data structures & Algorithms, DBMS, Web Development, Operating System, Computer Networks, Cloud Computing",

    achievements: [
      "3rd Rank in T.Y.B.Tech Information Technology for academic excellence in the IT department",
      'Co-authored and published "Mockhire: Adaptive Interview Training and Recruitment Automation Through Objective AI Assessment" in IEEE Xplore and Scopus-indexed proceedings',
    ],
    order: 1,
  },
];

// Achievements Data
export const achievements: Achievement[] = [
  {
    _id: "achieve-1",
    title:
      "Mockhire: Adaptive Interview Training and Recruitment Automation Through Objective AI Assessment",
    type: "publication",
    issuer: "IEEE Xplore (Scopus Indexed)",
    date: "2025-01-01",
    description:
      "Co-authored and published a research paper on adaptive interview training and recruitment automation through objective AI assessment.",
    url: "https://ieeexplore.ieee.org/document/11465541",
    featured: true,
    order: 1,
  },
  {
    _id: "achieve-2",
    title: "3rd Rank - T.Y.B.Tech Information Technology",
    type: "award",
    issuer: "AISSMS Institute of Information Technology",
    date: "2025-01-01",
    description:
      "Ranked 3rd in T.Y.B.Tech Information Technology for academic excellence in the IT department.",
    featured: true,
    order: 2,
  },
];

// Certifications Data
export const certifications: Certification[] = [
  {
    _id: "cert-1",
    name: "OCI 2025 GenAI Professional",
    issuer: "Oracle",
    issueDate: "2025-01-01",
    description:
      "Certified in LLMs, RAG pipelines, and OCI AI services on Oracle Cloud Infrastructure.",
    credentialUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4857AF1ACB5CA079061CBE5D4D4AE01F86C00E2E9FCCCCD22F4155ED641AA64",
    skills: ["LLMs", "RAG Pipelines", "OCI AI Services"],
    order: 1,
  },
  {
    _id: "cert-2",
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    issueDate: "2025-01-01",
    description:
      "Validates foundational knowledge of NLP, Computer Vision, and Azure AI services.",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-gb/siddhiuttekar-6138/23B4FF1DCE140223?sharingId=A74E0670665BDEDC",
    skills: ["NLP", "Computer Vision", "Azure AI Services"],
    order: 2,
  },
  {
    _id: "cert-3",
    name: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    issueDate: "2025-01-01",
    description:
      "Validates knowledge of core data concepts and Azure data services.",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-gb/siddhiuttekar-6138/A7B1F90011EE4C96?sharingId=A74E0670665BDEDC",
    skills: ["Core Data Concepts", "Azure Data Services"],
    order: 3,
  },
  {
    _id: "cert-4",
    name: "AWS Academy Graduate",
    issuer: "Amazon Web Services",
    issueDate: "2025-01-01",
    description:
      "Completed AWS Academy Cloud Foundations, covering core services and security fundamentals.",
    credentialUrl:
      "https://www.credly.com/badges/cb101cfc-7dad-4aff-91c8-74b7855a8817/public_url",
    skills: ["Cloud Foundations", "Core AWS Services", "Security Fundamentals"],
    order: 4,
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [];

// Blog Posts Data
export const blogPosts: BlogPost[] = [];

// Services Data
export const services: Service[] = [];
