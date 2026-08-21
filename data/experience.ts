export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  technologies: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    period: "Feb 2025 — Present",
    role: "Senior Software Engineer",
    company: "Incedo",
    location: "Gurugram, India",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Material UI",
    ],
    highlights: [
      "Working on enterprise frontend applications.",
      "Developing scalable and reusable React interfaces.",
      "Working with role-based experiences and complex UI workflows.",
      "Contributing to performance, maintainability and frontend architecture.",
    ],
  },

  {
    period: "May 2023 — Dec 2024",
    role: "React Developer",
    company: "Atomic North",
    location: "India",
    technologies: [
      "React",
      "React Query",
      "Material UI",
      "REST APIs",
    ],
    highlights: [
      "Developed enterprise dashboards for delivery operations.",
      "Worked on monthly billing functionality.",
      "Implemented multi-level approval workflows.",
      "Built reusable and maintainable frontend components.",
    ],
  },

  {
    period: "May 2021 — May 2023",
    role: "React Developer",
    company: "Krya Innovation",
    location: "India",
    technologies: [
      "React",
      "JavaScript",
      "State Management",
      "Reusable Components",
    ],
    highlights: [
      "Worked on the Rippl gamification platform.",
      "Built interactive quizzes and user-generated content features.",
      "Implemented rewards, badges, vouchers and points experiences.",
      "Developed reusable frontend components.",
    ],
  },

  {
    period: "Sep 2018 — Mar 2020",
    role: "QA Associate",
    company: "Expleo",
    location: "India",
    technologies: [
      "Testing",
      "JIRA",
      "Regression Testing",
      "QA",
    ],
    highlights: [
      "Worked on software quality assurance and testing.",
      "Performed regression and functional testing.",
      "Collaborated with development teams to identify and resolve issues.",
    ],
  },
];