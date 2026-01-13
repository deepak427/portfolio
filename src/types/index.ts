export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  stats: string;
  tags: string[];
  gradient: string;
  link: string;
  image: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  metrics?: {
    users?: string;
    performance?: string;
    revenue?: string;
  };
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  details: string[];
  stack: string;
  type: "full-time" | "freelance" | "contract";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools";
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}