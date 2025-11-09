import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";

interface HeritageCardProps {
  title: string;
  location: string;
  year: string;
  description: string;
  image: string;
  index: number;
}

export const HeritageCard = ({
  title,
  location,
  year,
  description,
  image,
  index,
}: HeritageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="glass-card overflow-hidden group cursor-pointer h-full">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Shimmer Effect on Hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.2), transparent)",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gradient-gold group-hover:animate-glow">
                {title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{year}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>

            <motion.div
              className="pt-4 flex items-center gap-2 text-primary font-medium"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              <span>Explore in 3D</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};
