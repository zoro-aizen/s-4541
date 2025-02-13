import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
const Features = () => {
  const features = [{
    title: "Smart Career Planning",
    description: "Plan your professional growth with AI-powered insights and personalized career roadmaps.",
    points: ["Personalized Career Paths", "Skill Gap Analysis", "Industry Insights"]
  }, {
    title: "Progress Tracking",
    description: "Track your career development with comprehensive analytics and milestone achievements.",
    points: ["Achievement Tracking", "Progress Analytics", "Goal Setting"]
  }];
  return <section className="py-24">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            CAREER DEVELOPMENT
          </span>
          <h2 className="heading-lg mt-6">Navigate Your Career Journey</h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
            Take control of your professional development with our comprehensive career planning tools.
          </p>
        </div>

        {features.map((feature, index) => <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-neutral-600 mb-6">{feature.description}</p>
              <ul className="space-y-4">
                {feature.points.map(point => <li key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    {point}
                  </li>)}
              </ul>
              <div className="mt-8 flex gap-4">
                <button className="button-primary">TRY FREE</button>
                <button className="px-6 py-3 text-neutral-600 hover:text-primary transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1">
              <Card className="glass-panel p-6 rounded-2xl">
                <img alt={feature.title} className="w-full h-auto rounded-lg" src="/lovable-uploads/87eedefe-bc8a-48a2-b729-a547bcb77b4f.png" />
              </Card>
            </div>
          </div>)}
      </div>
    </section>;
};
export default Features;