import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timelineEvents = [
  {
    year: "1632-1653",
    title: "Taj Mahal Construction",
    description: "Emperor Shah Jahan builds this monument of love in memory of his wife Mumtaz Mahal.",
  },
  {
    year: "14th Century",
    title: "Vijayanagara Empire",
    description: "Hampi flourishes as the capital of one of the greatest Hindu empires.",
  },
  {
    year: "1250 CE",
    title: "Konark Sun Temple",
    description: "King Narasimhadeva I constructs this architectural marvel dedicated to the Sun God.",
  },
  {
    year: "2nd Century BCE",
    title: "Ajanta Caves",
    description: "Buddhist monks create magnificent rock-cut cave monuments and paintings.",
  },
  {
    year: "1192 CE",
    title: "Qutub Minar",
    description: "Qutb-ud-din Aibak begins construction of Delhi's iconic victory tower.",
  },
];

export const HeritageTimeline = () => {
  return (
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
            <span className="text-foreground">Journey Through</span>
            <br />
            <span className="text-gradient-gold">Time</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the rich history and timeline of India's magnificent heritage sites.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {/* Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <motion.div
                    className="glass-card p-6 rounded-2xl inline-block max-w-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-primary font-bold">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gradient-gold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <motion.div
                  className="relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary glow-gold border-4 border-background" />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
