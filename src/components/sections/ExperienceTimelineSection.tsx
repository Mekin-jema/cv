"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Quality Assurance Engineer",
    company: "Safaricom Ethiopia – Technology Group",
    location: "Addis Ababa, Ethiopia",
    duration: "12/2025 – Present",
    description: `Executed end-to-end automated tests for digital financial services including M-Pesa using Playwright with TypeScript. Developed and maintained CI/CD pipelines in Jenkins, integrated automated test suites, and managed application deployments in Kubernetes pods. Collaborated with cross-functional teams to identify defects and contributed to QA best practices across fintech and telecom projects.`,
    skills: [
      "Playwright",
      "TypeScript",
      "CI/CD",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "AWS",
      "Automation Testing",
    ],
  },
  {
    title: "Software Developer",
    company: "Power Ethiopia",
    location: "Remote",
    duration: "11/2025 – Present",
    description: `Served as the lead developer for the Power Ethiopia WordPress website handling core development, Elementor customization, plugin configuration, and performance optimization. Designed and managed a training registration system (frontend & backend) and integrated FenanPay as a local payment gateway. Supported Node.js backend and React frontend teams by reviewing features and improving API integrations.`,
    skills: [
      "WordPress",
      "Elementor",
      "PHP",
      "Node.js",
      "React",
      "API Integration",
      "Payment Gateway",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Ambalay Maps",
    location: "Remote / Addis Ababa",
    duration: "Jan 2025 – Aug 2025",
    description: `Worked as a core frontend developer on a geospatial web platform with advanced map dashboards, real-time route planning, geocoding/reverse-geocoding, traffic analysis, and distance/time matrix tools. Designed features including customizable markers, POI mapping, and VRP-based route optimization. Collaborated on production-ready geospatial APIs and led localization efforts.`,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "MapLibre",
      "OpenMapTiles",
      "Valhalla",
      "Docker",
      "Vercel",
    ],
  },
];

export function ExperienceTimelineSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Spacer for alignment with header image column */}
          <div className="hidden md:block md:col-span-3"></div>

          {/* Experience Content */}
          <div className="md:col-span-9">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Experience</h2>
              <p className="text-muted-foreground text-lg">
                My career journey and key professional milestones
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="md:ml-24">
                      {/* Timeline Dot */}
                      <div className="hidden md:flex absolute left-2 top-2 w-12 h-12 bg-background border-4 border-primary rounded-full items-center justify-center z-10">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                      </div>

                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <div className="space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                              <CardTitle className="text-xl">{exp.title}</CardTitle>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
