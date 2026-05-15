import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { Button } from '@/components/ui/button';

export function ProfessionalHeader() {
  return (
    <section id="home" className="py-16 md:py-24 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Profile Image */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg">
                <OptimizedImage
                  src="/me.png"
                  alt="Mekin Jemal"
                  width={224}
                  height={224}
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Header Info */}
          <div className="md:col-span-9">
            <div className="space-y-6">
              {/* Name and Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Mekin Jemal</h1>
                <p className="text-2xl text-primary font-semibold mb-2">
                  Software Engineer | DevOps Engineer | Full-Stack Developer
                </p>
                <p className="text-muted-foreground">
                  Safaricom Ethiopia – Technology Group
                </p>
              </div>

              {/* Bio */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Experienced software engineer specializing in full-stack development, DevOps practices, and modern frameworks. 
                Proven track record in building scalable applications, implementing CI/CD pipelines, and automation testing. 
                Dedicated to writing clean code, continuous learning, and solving real-world problems.
              </p>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:mekinjemal999@gmail.com" className="hover:text-primary transition-colors">
                    mekinjemal999@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>(+251) 920064543</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Github className="h-4 w-4 text-primary" />
                  <a href="https://github.com/zestdev" className="hover:text-primary transition-colors">
                    github.com/zestdev
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gap-2"
                >
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="gap-2"
                >
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
