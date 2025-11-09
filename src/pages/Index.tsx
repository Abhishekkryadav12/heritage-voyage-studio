import { HeroSection } from "@/components/HeroSection";
import { HeritageCard } from "@/components/HeritageCard";
import { TajMahal3D } from "@/components/TajMahal3D";
import { HeritageTimeline } from "@/components/HeritageTimeline";
import { motion } from "framer-motion";

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
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Heritage Sites Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
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
              <HeritageCard key={index} {...site} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 3D Experience Section */}
      <TajMahal3D />

      {/* Timeline Section */}
      <HeritageTimeline />

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
