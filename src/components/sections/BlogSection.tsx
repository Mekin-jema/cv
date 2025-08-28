"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, MapPin, Briefcase, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  // Dummy software engineering experience data
  const dummyExperiences: Experience[] = [
    {
      title: "React Module Instructor & Group Mentor",
      company: "Google Developer Group (GDG AAU)",
      location: "Both (remote and in person)",
      duration: "March 2025 – Present",
      description:
        "Mentoring students in the GDG AAU MERN Stack Bootcamp by leading structured exercises, reviewing submissions, and providing personalized guidance. Collaborating with fellow mentors to deliver React.js training sessions, promote engagement, and foster a collaborative learning environment both online and on campus.",
      skills: ["React", "JavaScript", "Mentorship", "Teaching", "Curriculum Design", "State Management", "API Integration"],
    },
    {
      title: "Frontend Engineer",
      company: "Ambalay Maps",
      location: "Remote",
      duration: "January 2025 – Present",
      description:
        "Core contributor to Ambalay Maps, specializing in geospatial web applications. Designed and developed an advanced map dashboard with route planning, geocoding, and traffic analysis. Built tools like customizable markers, POI, distance/time matrix, and VRP-based route optimization. Collaborated with backend teams on production-ready APIs and localization, including voice integration.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MapLibre", "OpenMapTiles", "Valhalla", "Docker", "Vercel", "UI/UX Design"],
    },
    {
      title: "Web Developer Intern",
      company: "Ministry of Industry – Ethiopia",
      location: "Ethiopia",
      duration: "October 2024 – January 2025",
      description:
        "Contributed to the Ministry’s mission by developing a responsive website showcasing services and strategic goals. Built HS code management and product specification tools, streamlining workflows to support transparent and efficient import regulation.",
      skills: ["Web Development", "JavaScript", "Responsive Design", "Database Integration", "UI/UX", "Information Architecture"],
    },
    {
      title: "Frontend Developer Intern",
      company: "Prodigy InfoTech & Oasis Infobyte",
      location: "India (Remote)",
      duration: "May 2024 – June 2024",
      description:
        "First internship experience where I contributed to responsive web interfaces using JavaScript, HTML, CSS, and React. Sparked my passion for software engineering and encouraged me to dive deeper into full-stack development.",
      skills: ["JavaScript", "HTML", "CSS", "React", "Web Design", "Version Control"],
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

            <CardFooter>
              <Button variant="outline" className="w-full group">
                Learn More
                <Code className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
