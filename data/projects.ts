export type Project = {
  slug: string;
  title: string;
  category: string;
  company: string;
  type: string;
  description: string;
  technologies: string[];
  contribution: string[];
  focus: string[];
};

export const projects: Project[] = [
  {
    slug: "elan",
    title: "ELAN",
    category: "Fintech Platform",
    company: "Incedo",
    type: "Professional",
    description:
      "A secure and scalable web platform for displaying and managing credit card offerings with role-based user experiences.",

    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "RBAC",
      "CI/CD",
    ],

    contribution: [
      "Designed and implemented role-based access control experiences.",
      "Developed responsive frontend interfaces using React.",
      "Worked on scalable frontend architecture and performance.",
      "Contributed to CI/CD integration and deployment improvements.",
      "Collaborated with cross-functional teams on product improvements.",
    ],

    focus: [
      "Role-based experiences",
      "Frontend scalability",
      "Responsive UI",
      "Performance",
      "Deployment",
    ],
  },

  {
    slug: "mip-box-label",
    title: "MIP Box Label",
    category: "AI / Data Labeling",
    company: "Incedo",
    type: "Professional",
    description:
      "An AI-based data labeling system designed to support scalable data labeling workflows.",

    technologies: [
      "React",
      "TypeScript",
      "AI",
      "Data Labeling",
    ],

    contribution: [
      "Contributed to the frontend experience for the data labeling system.",
      "Built reusable and maintainable UI components.",
      "Worked on interactive labeling workflows.",
      "Focused on responsive and scalable frontend development.",
    ],

    focus: [
      "AI workflows",
      "Data labeling",
      "Reusable UI",
      "Scalability",
    ],
  },

  {
    slug: "delivery-operations",
    title: "Delivery Operations",
    category: "Enterprise Dashboard",
    company: "Atomic North",
    type: "Professional",
    description:
      "An operations dashboard for truck deliveries, monthly billing and multi-level approval workflows.",

    technologies: [
      "React",
      "React Query",
      "Dashboards",
      "Workflows",
    ],

    contribution: [
      "Developed the truck delivery operations dashboard.",
      "Implemented monthly billing functionality.",
      "Built multi-level approval workflows.",
      "Designed scalable and maintainable UI architecture.",
      "Implemented efficient data-flow patterns.",
    ],

    focus: [
      "Enterprise dashboards",
      "Billing",
      "Approval workflows",
      "Data flow",
      "Scalable UI",
    ],
  },

  {
    slug: "rippl",
    title: "Rippl",
    category: "Gamification Platform",
    company: "Krya Innovation",
    type: "Professional",
    description:
      "A gamification platform featuring quizzes, user-generated content, rewards, badges, vouchers and points.",

    technologies: [
      "React",
      "Gamification",
      "Reusable Components",
      "State Management",
    ],

    contribution: [
      "Developed interactive gamification features.",
      "Built quiz and user-generated content modules.",
      "Implemented rewards, badges, vouchers and points systems.",
      "Focused on reusable components and scalable frontend development.",
    ],

    focus: [
      "Gamification",
      "Interactive UI",
      "Reusable components",
      "Scalable frontend",
    ],
  },
];