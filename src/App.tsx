import { useEffect, useState, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProfessionalHeader } from '@/components/sections/ProfessionalHeader';
import { ExperienceTimelineSection } from '@/components/sections/ExperienceTimelineSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ThemeProvider, useTheme } from '@/providers/theme-provider';
import Squares from '@/components/ui/Squares';
import { navItems } from '@/data/navigation';
import ReactGA from 'react-ga4';
import { Contact2 } from './components/sections/ContactSection';

function AppContent() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
  // Initialize Google Analytics
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      ReactGA.initialize(gaId);
  // Send initial page view event
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }

  // Use IntersectionObserver to detect current active section
    const sections = ['home', 'experience', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Log page view event per section
            ReactGA.send({ 
              hitType: "pageview", 
              page: `/${entry.target.id}`,
              title: entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            });
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  // Log theme toggle event
    ReactGA.event({
      category: 'Theme',
      action: 'Toggle',
      label: theme === 'light' ? 'Dark' : 'Light'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <Squares 
        speed={0.2} 
        squareSize={50}
        direction='diagonal'
        borderColor={theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}
        hoverFillColor={theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'}
      />
      
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
        navItems={navItems} 
        setActiveSection={setActiveSection}
      />

      <main ref={mainRef} className="relative z-10">
        <ProfessionalHeader />
        <ExperienceTimelineSection />
        <ProjectsSection />
        <Contact2 />
      </main>
       
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;