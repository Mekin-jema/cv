import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/data/skills';
import { aboutContent } from '@/data/about';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Professional Background */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
          <p className="text-muted-foreground">
            {aboutContent.introduction}
          </p>
        </Card>

        {/* Technical Expertise */}
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
          <div className="space-y-4">
            {skills.map((category) => (
              <div key={category.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{category.category}</span>
                  <span className="text-muted-foreground">{category.level}%</span>
                </div>
                <Progress value={category.level} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
