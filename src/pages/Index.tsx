import { motion } from "framer-motion";
import { ArrowRight, Check, Menu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Intelligent Task Management",
      description: "Streamline your tasks and collaborate seamlessly with our cutting-edge SaaS startup platform.",
      points: ["Smart Task Assignment", "Real-time Collaboration", "Data Security & Privacy"]
    },
    {
      title: "Advanced Analytics",
      description: "Harness the power of AI-driven analytics to optimize your campaigns and understand your audience better.",
      points: ["Smart Audience Segmentation", "Predictive Performance", "Real-time Visualization"]
    }
  ];

  const trustedBy = [
    { name: "Stripe", className: "w-24" },
    { name: "HubSpot", className: "w-28" },
    { name: "Intercom", className: "w-28" },
    { name: "Asana", className: "w-24" }
  ];

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <header className="container-padding py-6">
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
          <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full"></div>
              <span className="text-xl font-semibold">Astroship™</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-neutral-600 hover:text-primary transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-neutral-600 hover:text-primary transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-neutral-600 hover:text-primary transition-colors font-medium">About</a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <button className="px-4 py-2 text-primary hover:text-primary/80 transition-colors font-medium">
                Log in
              </button>
              <button className="button-secondary">
                Try for Free
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4">
                <a href="#features" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Features</a>
                <a href="#pricing" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">Pricing</a>
                <a href="#about" className="text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg">About</a>
                <hr className="border-neutral-200" />
                <button className="text-primary hover:text-primary/80 transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg text-left">
                  Log in
                </button>
                <button className="button-secondary w-full">
                  Try for Free
                </button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Rest of the hero section */}
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-32">
          <motion.h1 
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create websites with Astroship™
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Pro version of popular Astroship starter template made for startups. Built with Astro and Tailwind CSS.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="button-primary flex items-center gap-2">
              Buy Template — $49
            </button>
            <button className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-200/50 transition-colors">
              Free Version
            </button>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="glass-panel rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Dashboard Preview" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </header>

      {/* Trusted By Section */}
      <section className="py-24 bg-neutral-200/50">
        <div className="container-padding">
          <p className="text-center text-neutral-600 mb-12">Trusted by popular startups you know</p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedBy.map((company) => (
              <div key={company.name} className={`${company.className} h-8 bg-neutral-400/20 rounded-lg`} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
              TWO-COL FEATURES
            </span>
            <h2 className="heading-lg mt-6">Supercharge Your Workflows</h2>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Unlock your team's true potential with our state-of-the-art SaaS platform.
            </p>
          </div>

          {features.map((feature, index) => (
            <div key={feature.title} className={`flex flex-col md:flex-row gap-12 items-center mb-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-neutral-600 mb-6">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent-purple" />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-4">
                  <button className="button-primary">Start 14-day trial</button>
                  <button className="px-6 py-3 text-neutral-600 hover:text-primary transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <Card className="glass-panel p-6 rounded-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt={feature.title}
                    className="w-full h-auto rounded-lg"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
