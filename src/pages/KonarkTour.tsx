import { ARTourExperience } from "@/components/ARTourExperience";
import { KonarkModel } from "@/components/3d-models/KonarkModel";

const hotspots = [
  {
    position: [0, 3, 0] as [number, number, number],
    title: "Sun Temple Tower",
    description: "The main tower, or Vimana, was designed to represent the celestial chariot of Surya, the Sun God, reaching towards the heavens.",
  },
  {
    position: [-1.6, 0, 1.8] as [number, number, number],
    title: "Chariot Wheel",
    description: "The temple features 24 elaborately carved stone wheels, each about 12 feet in diameter, representing the hours of the day. These wheels also functioned as sundials.",
  },
  {
    position: [0, 0.5, 2.2] as [number, number, number],
    title: "Stone Carvings",
    description: "Intricate erotic sculptures and depictions of daily life from the 13th century adorn the temple walls, showcasing the artistic excellence of ancient Kalinga architecture.",
  },
  {
    position: [0, 1, 0] as [number, number, number],
    title: "Main Temple Body",
    description: "Built in 1250 CE by King Narasimhadeva I, this structure was designed as a massive chariot with horses pulling the temple towards the east.",
  },
];

const narrationText = `Welcome to the Konark Sun Temple, a 13th-century marvel dedicated to the Sun God Surya. 
Built by King Narasimhadeva I, this temple is conceived as a gigantic chariot with 24 elaborately 
carved stone wheels pulled by seven horses. The temple's position was designed so that the first 
rays of the sun would illuminate the main entrance. The intricate carvings depict the entire 
spectrum of life in ancient India, making it a masterpiece of Kalinga architecture.`;

export default function KonarkTour() {
  return (
    <ARTourExperience
      title="Konark Sun Temple - Chariot of the Sun"
      model={<KonarkModel />}
      hotspots={hotspots}
      narrationText={narrationText}
      cameraPosition={[6, 4, 6]}
    />
  );
}
