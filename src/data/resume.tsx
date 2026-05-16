import { Icons } from "@/components/icons";
import { HomeIcon,Zap} from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

import { Prisma } from "@/components/ui/svgs/prisma";
import { Shadcn } from "@/components/ui/svgs/shadcn";
import { Magic } from "@/components/ui/svgs/magic";
import { Expressjs } from "@/components/ui/svgs/express";
import { SocketIO } from "@/components/ui/svgs/socketio";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Postman } from "@/components/ui/svgs/postman";
import { Figma } from "@/components/ui/svgs/figma";
import { Playwright } from "@/components/ui/svgs/playwright";
import { ReactLight } from "@/components/ui/svgs/reactLight";

export const DATA = {
  name: "Mekin Jemal",
  initials: "MJ",
  url: "https://yourwebsite.com",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addis+ababa",
  description:
    "Software Engineer at Safaricom | DevOps Engineer | Full Stack Developer",

  summary:
    "Computer Engineering graduate from Addis Ababa University with strong experience in Full Stack Development, DevOps, Cloud, QA Automation, and IoT systems. Passionate about solving real-world problems through scalable software, smart systems, and cloud technologies.",

  avatarUrl: "/me.png",

  skills: [
    // Frontend
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Shadcn/ui", icon: Shadcn },
    { name: "Magic UI", icon: Magic },

    // Backend
    { name: "Node.js", icon: Nodejs },
    { name: "Express", icon: Expressjs },
    { name: "Prisma", icon: Prisma },
    { name: "Socket.IO", icon: SocketIO },

    // Databases
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "Redis", icon: Redis },

    // DevOps & Tools
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "GitHub Actions", icon: Icons.github },
    { name: "Jenkins", icon: Zap },

    // Testing
    { name:"Playwright", icon: Playwright },
    { name: "Postman", icon: Postman },




    // Other languages
   {name:"Figma", icon: Figma }, 
    { name: "Python", icon: Python },

  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "mekinjemal999@gmail.com",
    tel: "+251920064543",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mekin-jema",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mekin-jemal/",
        icon: Icons.linkedin,
        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/Mekin_Jemal",
        icon: Icons.x,
        navbar: true,
      },

      // Youtube: {
      //   name: "Youtube",
      //   url: "https://youtube.com/@yourchannel",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },

      email: {
        name: "Send Email",
        url: "mailto:mekinjemal999@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // Quick public links
  portfolio: "https://yourwebsite.com",
  connect: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
    { name: "Gmail", url: "mailto:mekinjemal999@gmail.com" },
    { name: "Twitter", url: "https://x.com/yourusername" },
    { name: "Instagram", url: "https://instagram.com/yourusername" },
    { name: "BuyMeACoffee", url: "https://buymeacoffee.com/yourusername" },
  ],

  work: [
    {
      company: "Safaricom Ethiopia",
      href: "https://www.safaricom.et",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Business Analyst",
      logoUrl: "/safaricom.png",
      start: "Apr 2026",
      end: "Present",
      description:
        "Working on digital solutions and business processes within telecommunications while collaborating with technical teams to improve software systems and workflows.",
    },
    {
      company: "Safaricom Ethiopia",
      href: "https://www.safaricom.et",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "QA Engineer",
      logoUrl: "/safaricom.png",
      start: "Dec 2025",
      end: "Mar 2026",
      description:
        "Worked on automation testing using Robot Framework, Jenkins, and CI/CD pipelines to improve software quality and deployment workflows.",
    },
    {
      company: "Power Ethiopia",
      href: "#",
      badges: [],
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineer",
      logoUrl: "/powerethiopia.png",
      start: "Oct 2025",
      end: "Apr 2026",
      description:
        "Built scalable web applications and contributed to backend/frontend integrations, deployment pipelines, and cloud-based workflows.",
    },
    {
      company: "Ambalay Maps",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/ambalay.png",
      start: "Jan 2025",
      end: "Sep 2025",
      description:
        "Contributed to building an Ethiopian alternative to Google Maps, focusing on frontend development, React applications, and Dockerized workflows.",
    },
    {
      company: "Prodigy InfoTech",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/prodigy.png",
      start: "May 2024",
      end: "Jun 2024",
      description:
        "Assisted in building responsive web applications using JavaScript and React while improving UI responsiveness and application performance.",
    },
  ],

  education: [
    {
      school: "Addis Ababa University",
      href: "https://www.aau.edu.et",
      degree: "Bachelor's Degree in Computer Engineering",
      logoUrl: "/aau.png",
      start: "2021",
      end: "2025",
    },
  ],

  // Tech stack / focus areas
  techStack: {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Magic UI",
    ],
    backend: ["Node.js", "Express", "Prisma", "Socket.IO"],
    databases: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM"],
    devops: ["Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    testing: ["Jest", "Supertest", "Cypress", "Postman"],
    gis: ["MapLibre", "OpenMapTiles", "Valhalla"],
  },
  
  projects: [
    {
      title: "Fullstack Todo App Deployment",
      href: "https://github.com/Mekin-jema/devops-k8s-pipeline",
      dates: "2026",
      active: true,
      description:
        "Built and documented a full-stack Todo application deployment pipeline with Next.js, Express.js, MongoDB, Docker, Jenkins, and Kubernetes for automated build and rollout.",
      technologies: [
        "Next.js",
        "Express",
        "MongoDB",
        "Docker",
        "Jenkins",
        "Kubernetes",
        "AWS",
      ],
      links: [],
      image: "todo.png",
      video: "",
    },
        {
      title: "Platform Automation (Playwright)",
      href: "https://github.com/Mekin-jema/end_to_end_automation",
      dates: "2026",
      active: true,
      description:
        "Advanced Playwright-based E2E automation suite with Allure reporting, structured test suites, and Jenkins CI via Docker.",
      technologies: [
        "Playwright Test",
        "TypeScript",
        "Allure Report",
        "Docker",
        "Jenkins",
        "kubernetes",
        "Gitlab"
      ],
      links: [],
      image: "playwright.png",
      video: "",
    },
    {
      title: "EIC Frontend",
      href: "https://github.com/Mekin-jema/eic-frontend",
      dates: "2026",
      active: true,
      description:
        "Public-facing event and registration frontend for Invest in Ethiopia, featuring a motion-rich landing page, a three-step attendee registration flow, multipart form submission, and success page handling.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion",
        "React Hook Form",
        "Zod",
        "RTK Query",
      ],
      links: [],
      image: "eic.png",
      video: "",
    },
    {
      title: "IoT Smart Sewage Monitoring System",
      href: "https://github.com/Mekin-jema/SmartDrainage-Monitering-System",
      dates: "2025",
      active: true,
      description:
        "Built an IoT-based smart sewage monitoring system using ESP32, gas, pH, and ultrasonic sensors integrated with MongoDB Atlas and React dashboard for real-time monitoring.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "ESP32",
        "IoT",
        "TailwindCSS",
      ],
      links: [],
      image: "iot.png",
      video: "",
    },

    {
      title: "TalentHub",
      href: "https://github.com/Mekin-jema/talent-hub",
      dates: "2026",
      active: true,
      description:
        "Comprehensive job board API connecting developers with employers, featuring JWT authentication, job management, application workflows, notifications, pagination, and WebSocket events.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "JWT",
        "WebSocket",
        "Docker",
        "Render",
      ],
      links: [],
      image: "talent_hub.png",
      video: "",
    },
    {
      title: "MyMap",
      href: "https://github.com/Mekin-jema/Ambalay-Maps-v2",
      dates: "2026",
      active: true,
      description:
        "Feature-rich interactive mapping application built with Next.js, TypeScript, MapLibre GL JS, and Redux Toolkit. Includes multi-waypoint routing, POI discovery, elevation profiling, dynamic map styles, geolocation tracking, and responsive UI enhancements.",
      technologies: [
        "Next.js",
        "TypeScript",
        "MapLibre GL JS",
        "Redux Toolkit",
        "Framer Motion",
        "Valhalla",
        "OSRM",
        "Geoapify",
  
      ],
      links: [],
      image: "myMap.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "African Robotics Championship",
      dates: "2025",
      location: "Africa",
      description:
        "Won 1st place in African Robotics Competition with AAU Robotics Team (5K Bots), earning scholarship opportunity to Texas, USA.",
      image: "ethio_robotics.png",
      links: [],
    },

  ],
} as const;