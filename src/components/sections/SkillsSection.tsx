import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';
import { Code, Database, GitBranch, Zap, TestTube, Wrench, Cpu } from 'lucide-react';

// Map categories to icons
const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Frontend Development': Code,
  'State Management': Zap,
  'Backend Development': Database,
  'Version Control & CI/CD': GitBranch,
  'Testing & Containerization': TestTube,
  'Build Tools & Security': Wrench,
  'IoT Development': Cpu,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Skills</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical expertise and tools proficiency
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = categoryIcons[skillGroup.category] || Code;
            
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 overflow-hidden group">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                    
                    {/* Rotating Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"></div>
                      <IconComponent className="w-6 h-6 text-primary animate-spin group-hover:animate-spin" 
                        style={{
                          animationDuration: '4s',
                          animationDirection: index % 2 === 0 ? 'normal' : 'reverse'
                        }}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  {/* Proficiency Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                      {skillGroup.level}%
                    </Badge>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                          i < Math.round((skillGroup.level / 100) * 5)
                            ? 'bg-primary'
                            : 'bg-primary/20'
                        }`}
                      ></div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {skillGroup.items.map((item, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/10">
          <h3 className="font-semibold mb-2">Always Learning</h3>
          <p className="text-sm text-muted-foreground">
            I stay current with industry trends and continuously expand my skill set. 
            Regularly exploring emerging technologies like AI, advanced DevOps practices, and cloud-native solutions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes customSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: customSpin 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
