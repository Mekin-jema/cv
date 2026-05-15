"use client";

import { useEffect, useState } from "react";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, MapPin, Briefcase} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  github: string;
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
const dummyExperiences: Experience[] = [
  {
    title: "Quality Assurance Engineer",
    company: "Safaricom Ethiopia – Technology Group",
    location: "Addis Ababa, Ethiopia",
    duration: "12/2025 – Present",
    description: `Executed end-to-end automated tests for digital financial services, including M-Pesa, using Playwright with TypeScript, ensuring robust and reliable software. Developed and maintained CI/CD pipelines in Jenkins, integrating automated test suites and generating actionable reports. Managed application deployments and testing in Kubernetes pods, collaborated with cross-functional teams to identify and resolve defects, and contributed to QA best practices and automation strategies across fintech and telecom projects.`,
    skills: [
      "Playwright",
      "TypeScript",
      "CI/CD",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS",
      "Automation Testing",
      "QA Processes",
    ],
    github: "",
  },
  {
    title: "Software Developer",
    company: "Power Ethiopia",
    location: "Remote",
    duration: "11/2025 – Present",
    description: `Served as the lead developer for the Power Ethiopia WordPress website handling core development, Elementor customization, plugin configuration, site structure, and performance optimization. Designed and managed a training registration system (frontend & backend) and integrated FenanPay as a local payment gateway to automate trainee registrations and payments. Supported Node.js backend and React frontend teams by reviewing features, improving API integrations, and ensuring seamless system interoperability.`,
    skills: [
      "WordPress",
      "Elementor",
      "PHP",
      "Node.js",
      "React",
      "API Integration",
      "Payment Gateway (FenanPay)",
      "Performance Optimization",
    ],
    github: "",
  },
  {
    title: "Frontend Engineer",
    company: "Ambalay Maps",
    location: "Remote / Addis Ababa",
    duration: "Jan 2025 – Aug 4, 2025",
    description:
      "Worked as a core frontend developer on a geospatial web platform with advanced map dashboards, real-time route planning, geocoding/reverse-geocoding, traffic analysis, and distance/time matrix tools. Designed and implemented features including customizable markers, POI mapping, and VRP-based route optimization. Collaborated on production-ready geospatial APIs, led localization efforts (including voice integration), and delivered scalable high-performance features using React, Next.js, and TypeScript, deployed via Docker and Vercel.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "MapLibre",
      "OpenMapTiles",
      "Valhalla",
      "Docker",
      "Vercel",
      "Geospatial APIs",
    ],
    github: "https://github.com/zestdev/ambalay-maps",
  },
  {
    title: "Youth Advisory Group (YAG) Member – e-SHE Program",
    company:
      "Ministry of Education, Mastercard Foundation, Arizona State University, Shayashone PLC, and 50 Universities",
    location: "Addis Ababa, Ethiopia",
    duration: "Oct 2024 – Jun 2025",
    description:
      "Represented AAU in national education reform. Advocated digital learning adoption, advised policymakers, and contributed to strategies for student-centered engagement.",
    skills: [
      "Leadership",
      "Policy Advisory",
      "Digital Transformation",
      "Collaboration",
    ],
    github: "",
  },
  {
    title: "Member – AAU Robotics Team '5K Bots'",
    company: "Addis Ababa University AI & Robotics Club",
    location: "Addis Ababa, Ethiopia",
    duration: "Sep 2024 – Mar 2025",
    description:
      "Designed, built, and programmed robots for VEX V5. Won 1st place at African Robotics Competition and Ethiopian Science Museum event. Gained hands-on robotics and teamwork experience.",
    skills: [
      "Robotics",
      "Mechanical Design",
      "Embedded Systems",
      "Problem-Solving",
    ],
    github: "",
  },
  {
    title: "Web Developer Intern",
    company: "Ministry of Industry – Ethiopia",
    location: "Addis Ababa, Ethiopia",
    duration: "Oct 2024 – Jan 2025",
    description:
      "Developed an import management website with HS code tools. Collaborated with audio hardware company and gained insight into manufacturing processes.",
    skills: ["Web Development", "JavaScript", "Database Integration", "UI/UX"],
    github: "https://github.com/zestdev/ministry-industry-web",
  },
  {
    title: "React Module Instructor",
    company: "Google Developer Group (GDG AAU)",
    location: "Addis Ababa, Ethiopia (Remote & In-Person)",
    duration: "Mar 2025 – Jun 2025",
    description:
      "Taught React fundamentals (components, hooks, state, APIs) at AAiT Innovation Center. Mentored participants through projects and guided them to build scalable apps.",
    skills: [
      "React",
      "JavaScript",
      "Teaching",
      "Mentorship",
      "State Management",
    ],
    github: "https://github.com/zestdev/react-course-materials",
  },
];


  // Simulate API fetch with dummy data
  const fetchExperiences = () => {
    setLoading(true);
    setTimeout(() => {
      setExperiences(dummyExperiences);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
              </CardHeader>
              <CardContent>
                <div className="h-24 bg-gray-200 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Experience</h2>
        <Button 
          variant="ghost" 
          size="sm"
          className="gap-2"
          onClick={fetchExperiences}
        >
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl">{exp.title}</CardTitle>
              <div className="flex flex-col text-sm text-muted-foreground mt-2 gap-1">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>

       
          </Card>
        ))}
      </div>
    </section>
  );
}
