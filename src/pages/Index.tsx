import { HeroSection } from "@/components/HeroSection";
import { HeritageCard } from "@/components/HeritageCard";
import { TajMahal3D } from "@/components/TajMahal3D";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heritageSites = [
  {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    year: "1632-1653",
    description:
      "An ivory-white marble mausoleum, a UNESCO World Heritage Site, and symbol of eternal love.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    title: "Hampi",
    location: "Karnataka",
    year: "14th Century",
    description:
      "Ancient village with magnificent ruins of the Vijayanagara Empire, showcasing exquisite temple architecture.",
    image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
  },
  {
    title: "Konark Sun Temple",
    location: "Odisha",
    year: "1250 CE",
    description:
      "A 13th-century temple shaped like a giant chariot with intricately carved stone wheels and horses.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  },
  {
    title: "Ajanta Caves",
    location: "Maharashtra",
    year: "2nd Century BCE",
    description:
      "Rock-cut Buddhist cave monuments featuring ancient paintings and sculptures of unparalleled beauty.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
  },
  {
    title: "Qutub Minar",
    location: "Delhi",
    year: "1192 CE",
    description:
      "A soaring 73-meter tall victory tower, the tallest brick minaret in the world with intricate carvings.",
    image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&q=80",
  },
];

const Index = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".heritage-card");
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect for section background
    gsap.to(".heritage-section-bg", {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navigation />
      {/* Hero Section */}
      <HeroSection />

      {/* Heritage Sites Section */}
      <section ref={sectionRef} className="relative py-32 px-6">
        {/* Background gradient effect */}
        <div className="heritage-section-bg absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Discover India's</span>
              <br />
              <span className="text-gradient-gold">Magnificent Heritage</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Step into the past and explore architectural marvels that have stood the test of time.
              Each site tells a unique story of art, culture, and human achievement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site, index) => (
              <div key={index} className="heritage-card">
                <HeritageCard {...site} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Experience Section */}
      <TajMahal3D />

      {/* Timeline Section */}
      <div id="timeline">
        <HeritageTimeline />
      </div>

      {/* AR CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-3xl glow-gold"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-gold">Ready to Enter</span>
              <br />
              <span className="text-foreground">the AR Experience?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              View these magnificent structures in your own space using augmented reality.
              Point your device camera and watch history come alive.
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-4 rounded-full font-semibold glow-gold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Launch AR Mode
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 AR Heritage Odyssey. Preserving history through technology.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
