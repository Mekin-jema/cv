export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Ambalay Maps",
    description:
      "An interactive geospatial dashboard featuring route planning, geocoding, traffic updates, and VRP-based route optimization. Integrated customizable layers and markers using MapLibre, OpenMapTiles, and Valhalla for rendering and routing.",
    tech: [
      "MapLibre",
      "OpenMapTiles",
      "Valhalla",
      "TypeScript",
      "Next.js",
      "Zustand",
      "Redux Toolkit",
      "Zod",
      "Recharts",
      "shadcn/ui",
      "Lucide React"
    ],
    image: "../ambalay-maps.png",
    link: "https://ambalaymaps.com", // replace with actual link
  },
  {
    title: "TalentHub",
    description:
      "A multi-role job portal for developers, employers, and admins. Features job postings, applications, dashboards, and real-time notifications with a polished UI and authentication system.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Prisma ORM",
      "Neon Postgres",
      "Redux Toolkit",
      "Socket.IO",
      "shadcn/ui",
      "Tailwind CSS",
      "Zod"
    ],
    image: "../talenthub.png",
    link: "https://talenthub-fawn.vercel.app", // replace if different
  },
  {
    title: "Food Delivery Platform",
    description:
      "A full-stack e-commerce and food delivery platform with store and driver tracking, real-time order updates, advanced search, and payment integration. Built with a focus on scalability and user experience.",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Prisma ORM",
      "MongoDB Atlas",
      "Redux Toolkit",
      "Socket.IO",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary"
    ],
    image: "../food-delivery.png",
    link: "https://chopi-chopi.vercel.app", // replace if different
  },
  {
    title: "Real Estate App",
    description:
      "A real estate platform with advanced search, JWT authentication, Google OAuth, and Firebase image uploads. Includes responsive design, secure user authentication, and modern UI components.",
    tech: [
      "MERN Stack",
      "TypeScript",
      "Redux Toolkit",
      "JWT",
      "bcrypt.js",
      "Firebase",
      "Tailwind CSS",
      "Google Auth"
    ],
    image: "../real-estate.png",
    link: "https://real-estate.vercel.app", // replace with actual
  },
  {
    title: "IoT Sewage Monitoring System",
    description:
      "An IoT-based system for monitoring sewage levels and toxic gases. Features real-time dashboards, worker assignment, shortest-path routing, and QR-enabled user feedback. Incorporates machine learning for predictions and spam detection.",
    tech: [
      "Arduino",
      "ESP8266",
      "MongoDB Atlas",
      "Express.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Machine Learning"
    ],
    image: "../iot-sewage.png",
    link: "https://github.com/zestdev/smart-sewage", // replace with actual
  },
];
