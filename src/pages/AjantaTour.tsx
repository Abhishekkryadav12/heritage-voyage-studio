import { ARTourExperience } from "@/components/ARTourExperience";
import { AjantaModel } from "@/components/3d-models/AjantaModel";

const hotspots = [
  {
    position: [0, 1.2, -1.4] as [number, number, number],
    title: "Central Cave Entrance",
    description: "This main cave entrance leads to a Chaitya hall, featuring magnificent paintings and sculptures dating back to the 2nd century BCE.",
  },
  {
    position: [0, 1, -0.5] as [number, number, number],
    title: "Buddhist Stupa",
    description: "The stupa represents the Buddha and is the focal point of worship in these rock-cut caves. Monks would circumambulate around it during their prayers.",
  },
  {
    position: [-3.5, 0.8, -1.2] as [number, number, number],
    title: "Decorative Pillars",
    description: "These intricately carved pillars showcase the architectural brilliance of ancient Indian craftsmen, each pillar unique in its design.",
  },
  {
    position: [0, 1.5, -2] as [number, number, number],
    title: "Cave Paintings",
    description: "The Ajanta caves contain some of the finest surviving examples of ancient Indian art, depicting the life of Buddha and various Jataka tales.",
  },
];

const narrationText = `Welcome to the Ajanta Caves, a UNESCO World Heritage Site and one of the greatest 
achievements of ancient Indian art. Dating from the 2nd century BCE to the 5th century CE, these 
30 rock-cut Buddhist cave monuments were carved into the side of a cliff. The caves contain some 
of the finest masterpieces of Buddhist religious art, including paintings and sculptures that have 
survived for over two millennia. Rediscovered in 1819, they provide invaluable insights into 
ancient Indian civilization and Buddhist traditions.`;

export default function AjantaTour() {
  return (
    <ARTourExperience
      title="Ajanta Caves - Ancient Buddhist Sanctuary"
      model={<AjantaModel />}
      hotspots={hotspots}
      narrationText={narrationText}
      cameraPosition={[0, 3, 8]}
    />
  );
}
