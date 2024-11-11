import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const Index = () => {
  const features = [
    "Intelligent Task Management",
    "Real-time Collaboration",
    "Advanced Analytics",
    "Data Security & Privacy",
  ];

  return (
    <div className="min-h-screen">
      <header className="container-padding py-6">
        <nav className="flex items-center justify-between glass-panel rounded-full px-6 py-4">
          <div className="text-xl font-semibold">Astroship™</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-neutral-600 hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-neutral-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-neutral-600 hover:text-primary transition-colors">About</a>
          </div>
          <button className="button-primary">Get Started</button>
        </nav>
      </header>

      <main>
        <section className="container-padding py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="heading-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Create websites with unmatched elegance
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pro version of popular Astroship starter template made for startups.
              Built with precision and care for exceptional user experience.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="button-primary flex items-center gap-2">
                Try it Free <ArrowRight className="w-4 h-4" />
              </button>
              <button className="button-secondary">Learn More</button>
            </motion.div>
          </div>
        </section>

        <section className="container-padding py-24 bg-neutral-200/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg text-center mb-16">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="glass-panel p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-purple" />
                    </div>
                    <h3 className="font-semibold">{feature}</h3>
                  </div>
                  <p className="text-neutral-600">
                    Experience the power of modern tools designed for efficiency and productivity.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;