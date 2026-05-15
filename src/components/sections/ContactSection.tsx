
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact2 = ({
  title = "Let's Connect",
  description = "I'm available for collaboration opportunities, questions, or just to say hello. Feel free to reach out!",
  phone = "(+251) 920064543",
  email = "mekinjemal999@gmail.com",
  web = { label: "https://mekinjemal.com", url: "https://mekinjemal2026.vercel.app/" },
}: Contact2Props) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${email}`} className="text-base font-medium hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-base font-medium">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-base font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-3">
                <a href="https://github.com/zestdev" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/50 border border-border rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input type="text" id="firstname" placeholder="Your first name" required />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input type="text" id="lastname" placeholder="Your last name" required />
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="your.email@example.com" required />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" id="subject" placeholder="What is this about?" required />
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea placeholder="Tell me more about your inquiry..." id="message" rows={5} required />
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact2 };
