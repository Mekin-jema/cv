import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Mekin Jemal",
  initials: "MJ",
  url: "https://yourwebsite.com",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addis+ababa",
  description:
    "Software Engineer | DevOps Engineer | Full Stack Developer | IoT Enthusiast",

  summary:
    "Computer Engineering graduate from Addis Ababa University with strong experience in Full Stack Development, DevOps, Cloud, QA Automation, and IoT systems. Passionate about solving real-world problems through scalable software, smart systems, and cloud technologies.",

  avatarUrl: "/me.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "mekinjemal999@gmail.com",
    tel: "+251920064543",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourprofile",
        icon: Icons.linkedin,
        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/yourusername",
        icon: Icons.x,
        navbar: true,
      },

      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@yourchannel",
        icon: Icons.youtube,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:mekinjemal999@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

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

  projects: [
    {
      title: "IoT Smart Sewage Monitoring System",
      href: "#",
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
      image: "",
      video: "",
    },
    {
      title: "Learning Management System",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Developed a scalable MERN LMS platform with authentication, course management, notifications, Redis caching, and admin dashboard.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Redis",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "MERN Real Estate App",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a real estate platform with JWT authentication, Firebase image upload, Redux Toolkit, and advanced search functionality.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Firebase",
        "Redux Toolkit",
      ],
      links: [],
      image: "",
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
      image: "/robotics.png",
      links: [],
    },
    {
      title: "Ethiopian Science Museum Robotics Event",
      dates: "2025",
      location: "Addis Ababa, Ethiopia",
      description:
        "Participated and won a 3-day robotics competition focused on innovation, robotics design, and coding challenges.",
      image: "/science-museum.png",
      links: [],
    },
  ],
} as const;