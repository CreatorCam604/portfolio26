export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  category: string;
  demoPath?: string;
  demoEntry?: string;
  requiresServer?: boolean;
}

export const projects: Project[] = [
  {
    id: "access-portal",
    title: "Company Access Portal",
    description:
      "Internal access management system built during internship at Cyber1Solutions. Handles authentication, role-based permissions, and employee onboarding flows.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    year: "2024",
    image: "/images/CompanyPortal.png",
    category: "Full Stack",
    demoPath: "/projects/access-portal",
    demoEntry: "/projects/access-portal/LandingPage.html",
    requiresServer: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Product Site",
    description:
      "Multi-page e-commerce storefront for automotive accessories. Features product listings, cart management, checkout flow, and order confirmation.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2024",
    image: "/images/E-CommerceWebsite.png",
    category: "Frontend",
    demoPath: "/projects/ecommerce",
    demoEntry: "/projects/ecommerce/E-Commerce.html",
  },
  {
    id: "calculator",
    title: "Simple Calculator",
    description:
      "Clean, functional calculator with standard arithmetic operations, keyboard support, and a minimal dark UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2025",
    image: "/images/SimpleCalculator.png",
    category: "Frontend",
    demoPath: "/projects/calculator",
    demoEntry: "/projects/calculator/main.html",
  },
  {
    id: "horizon-travel",
    title: "Horizon Travel",
    description:
      "Landing page concept for a travel agency. Responsive layout with destination highlights, booking CTA sections, and immersive hero imagery.",
    tech: ["HTML", "CSS"],
    year: "2025",
    image: "/images/HorizonTravel.svg",
    category: "Frontend",
    demoPath: "/projects/horizon-travel",
    demoEntry: "/projects/horizon-travel/index.html",
  },
];
