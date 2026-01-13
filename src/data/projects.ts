import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Nasvi Street Food",
    subtitle: "Festival Booking Platform",
    description: "Scaled booking system for 30,000+ users during peak festival season with zero downtime.",
    longDescription: "Built a comprehensive festival booking platform that handles massive traffic spikes during food festivals. Implemented advanced caching strategies, load balancing, and real-time inventory management to ensure seamless user experience even during peak hours.",
    stats: "30k+ Users",
    tags: ["AWS", "Docker", "Node.js", "Redis", "PostgreSQL"],
    gradient: "bg-orange-600",
    link: "https://nasvistreetfood.com/",
    image: "/nasvistreetfood.webp",
    testimonial: {
      text: "Deepak delivered a robust platform that handled our festival traffic flawlessly. Zero downtime during our busiest weekend!",
      author: "Nasvi Team",
      role: "Festival Organizers"
    },
    metrics: {
      users: "30,000+",
      performance: "99.9% uptime",
      revenue: "₹50L+ processed"
    }
  },
  {
    id: 2,
    title: "Health Insurance Pathshala",
    subtitle: "Insurance Education App",
    description: "Mobile app with paid user base for health insurance education and policy management.",
    longDescription: "Developed a comprehensive mobile application that educates users about health insurance policies, helps them compare plans, and manage their existing policies. Features include claim tracking, premium reminders, and personalized recommendations.",
    stats: "Paid Users",
    tags: ["React Native", "Firebase", "Stripe", "Push Notifications"],
    gradient: "bg-blue-600",
    link: "https://play.google.com/store/apps/details?id=com.kilobytetech.hip&hl=en_IN",
    image: "/health_insurance_pathshala.webp",
    testimonial: {
      text: "The app simplified insurance for our customers. User engagement increased by 300% after launch.",
      author: "Insurance Partner",
      role: "Business Development"
    },
    metrics: {
      users: "5,000+",
      performance: "4.5★ rating",
      revenue: "Subscription model"
    }
  },
  {
    id: 3,
    title: "Kshetra",
    subtitle: "Uttarakhand Travel Experience",
    description: "Immersive travel platform showcasing Uttarakhand's hidden gems with interactive experiences.",
    longDescription: "Created an immersive travel platform that showcases the beauty of Uttarakhand through interactive maps, virtual tours, and curated travel experiences. Features include trip planning, local guide connections, and cultural storytelling.",
    stats: "Live Platform",
    tags: ["Next.js", "Three.js", "Framer Motion", "Vercel"],
    gradient: "bg-emerald-600",
    link: "https://kshetra.vercel.app/",
    image: "/kshetra.webp",
    testimonial: {
      text: "Beautiful design and smooth user experience. Perfectly captures the essence of Uttarakhand.",
      author: "Tourism Board",
      role: "Marketing Director"
    },
    metrics: {
      users: "10,000+",
      performance: "95+ Lighthouse",
      revenue: "Tourism boost"
    }
  },
  {
    id: 4,
    title: "Veris AI",
    subtitle: "AI Fact Checking Platform",
    description: "Real-time news verification system using multi-agent AI with confidence scoring.",
    longDescription: "Built an advanced fact-checking platform that uses multiple AI agents to verify news articles in real-time. Features include source credibility analysis, bias detection, and confidence scoring to help users make informed decisions about news consumption.",
    stats: "AI Powered",
    tags: ["OpenAI", "Python", "FastAPI", "Vector DB"],
    gradient: "bg-purple-600",
    link: "http://veris.luex.shop",
    image: "/veris.webp",
    testimonial: {
      text: "Impressive AI implementation. The fact-checking accuracy is remarkable and helps combat misinformation.",
      author: "Media House",
      role: "Editor-in-Chief"
    },
    metrics: {
      users: "1,000+",
      performance: "92% accuracy",
      revenue: "B2B licensing"
    }
  },
  {
    id: 5,
    title: "Pungda",
    subtitle: "AI-Powered Farming Assistant",
    description: "Project for Google AI Hackathon. A Global AI farming assistant providing crop suitability, yield prediction, and actionable recommendations.",
    longDescription: "Built a global AI farming assistant providing crop suitability, yield prediction, and actionable recommendations. Trained ML models on 50,000+ data points using Google Alpha Earth satellite embeddings and NASA POWER data. Designed a six-agent system using Google ADK, Gemini, and Vertex AI Imagen.",
    stats: "Google AI Hackathon",
    tags: ["Google ADK", "Gemini", "Vertex AI", "Python", "ML"],
    gradient: "bg-green-600",
    link: "#",
    image: "/pungda.webp",
    testimonial: {
      text: "An innovative use of satellite data and AI to solve real-world agricultural problems at scale.",
      author: "Hackathon Judge",
      role: "Google AI Panel"
    },
    metrics: {
      users: "Hackathon Win",
      performance: "50k+ Data Points",
      revenue: "Agri-Tech"
    }
  }
];