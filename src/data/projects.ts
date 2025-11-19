export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
  title: "Power Ethiopia",
  description:
    "A modern, corporate WordPress website built with Elementor, showcasing Power Ethiopia’s services, projects, and renewable energy initiatives. Includes dynamic sliders, service sections, blog integration, and a fully responsive design tailored for clean energy innovation.",
   tech: [
    "WordPress",
    "Elementor",
    "Elementor Pro",
    "Depicter Slider",
    "Post Grid",
    "Advanced Custom Fields (ACF)",
    "JetEngine",
    "UpdraftPlus",
    "Yoast SEO",
    "PHP",
    "JavaScript",
    "CSS",
    "HTML5"
  ],
  image: "./power-ethiopia.png",
  link: "https://powerethiopia.com/"
},

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
    image: "./ambalay-mps.png",
    link: "https://ambalaymaps.com", // replace with actual link
  },
    {
    title: "IoT Sewage Monitoring System",
    description:
      "An IoT-based system for monitoring sewage levels and toxic gases. Features real-time dashboards, worker assignment, shortest-path routing, and QR-enabled user feedback. ",
    tech: [
      "Arduino",
      "ESP32",
      "MongoDB Atlas",
      "Express.js",
      "React",
      "Tailwind CSS",
      "Shadcn/ui",
      "Tailwind CSS"
    ],
    image: "./smart-drainage.png",
    link: "https://final-project-wz7h.onrender.com/", // replace with actual
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
    image: "./talent-hub.png",
    link: "https://talent-hub-git-main-mekin-jemals-projects.vercel.app/", // replace if different
  },

  {
  title: "Zumer Islamic Media Platform",
  description:
    "A comprehensive media platform for Islamic content, featuring live updates, articles, videos, and community engagement. Designed with a focus on accessibility, user experience, and seamless content delivery across devices.",
  tech: [
    "Next.js 15",
    "TypeScript",
    "Prisma ORM",
    "Neon",
    "Zustand",
    "Better-Auth",
    "Tailwind CSS",
    "shadcn/ui",
    "Cloudinary",
    "Zod"
  ],
  image: "./zumer.png",
  link: "https://zumer-islamic-media.vercel.app/", // replace if different
},



    {
    title: "Workshop Booking System",
    description:
      "A full-stack system to manage workshop bookings. Admins can create workshops, add time slots, and monitor bookings via a dashboard with stats and charts. Customers can register, view available workshops, and book specific time slots. The system implements secure JWT authentication, form validation, and clean architecture principles.",
    tech: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Rechart",
      "Zod",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Docker",
      "Jest",
      "Supertest",
    ],
     image:"./workshop.png",
     link:"https://workshop-booking-customer.vercel.app/"
  },
  // {
  //   title: "Real Estate App",
  //   description:
  //     "A real estate platform with advanced search, JWT authentication, Google OAuth, and Firebase image uploads. Includes responsive design, secure user authentication, and modern UI components.",
  //   tech: [
  //     "MERN Stack",
  //     "TypeScript",
  //     "Zustand",
  //     "JWT",
  //     "bcrypt.js",
  //     "Firebase",
  //     "Tailwind CSS",
  //     "Google Auth",
  //     "Zod",
  //     "Shadcn/ui",
  //   ],
  //   image: "./real-esate.png",
  //   link: "https://real-estate.vercel.app", // replace with actual
  // },

];
