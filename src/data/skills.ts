export interface SkillCategory {
  category: string;
  level: number; // overall level of expertise
  items: string[]; // list of tools/technologies
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    level: 85,
    items: [
      "HTML", "CSS", "JavaScript (ES6+)", "TypeScript",
      "React.js", "React Native", "Next.js", "Angular",
      "Tailwind CSS", "Styled Components", "Emotion",
      "Shadcn", "Magic UI"
    ],
  },
  {
    category: "State Management",
    level: 75,
    items: ["Redux", "Redux Toolkit", "Recoil", "Zustand", "React Context API"],
  },
  {
    category: "Backend Development",
    level: 70,
    items: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "Prisma", "Drizzle", "SQLite"],
  },
  {
    category: "Version Control & CI/CD",
    level: 80,
    items: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    category: "Testing & Containerization",
    level: 65,
    items: ["Jest", "Cypress", "React Testing Library", "Docker"],
  },
  {
    category: "Build Tools & Security",
    level: 70,
    items: ["Webpack", "Vite", "Babel"],
  },
  {
    category: "IoT Development",
    level: 60,
    items: ["ESP32", "Arduino", "Raspberry Pi", "MQTT", "Firebase", "AWS IoT", "Azure IoT Hub"],
  },
];
