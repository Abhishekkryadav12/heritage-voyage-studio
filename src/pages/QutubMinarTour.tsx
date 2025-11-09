import { ARTourExperience } from "@/components/ARTourExperience";
import { QutubMinarModel } from "@/components/3d-models/QutubMinarModel";

const hotspots = [
  {
    position: [0, 4.7, 0] as [number, number, number],
    title: "Tower Top",
    description: "The tower originally had five stories reaching 72.5 meters, making it the tallest brick minaret in the world. Each story is marked by a projecting balcony.",
  },
  {
    position: [0, 2.5, 0] as [number, number, number],
    title: "Decorative Bands",
    description: "The tower features alternating angular and rounded fluting, with intricate calligraphy from the Quran carved in beautiful Arabic script.",
  },
  {
    position: [2, 0.5, 0.8] as [number, number, number],
    title: "Quwwat-ul-Islam Mosque",
    description: "Adjacent to the minaret stands India's first mosque, built using materials from 27 demolished Hindu and Jain temples, creating a unique architectural fusion.",
  },
  {
    position: [0, 1, 0] as [number, number, number],
    title: "Main Tower Base",
    description: "Started by Qutb-ud-din Aibak in 1192 CE, the tower was built to celebrate Muslim dominance in Delhi and as a victory tower after defeating the last Hindu kingdom.",
  },
];

const narrationText = `Welcome to Qutub Minar, Delhi's iconic victory tower and UNESCO World Heritage Site. 
Construction began in 1192 CE under Qutb-ud-din Aibak and was completed by his successor Iltutmish. 
Standing at 72.5 meters, it remains the world's tallest brick minaret. The tower features five distinct 
stories, each marked by a balcony and decorated with intricate carvings and verses from the Quran. 
The complex also houses the mysterious Iron Pillar, which has resisted rust for over 1,600 years.`;

export default function QutubMinarTour() {
  return (
    <ARTourExperience
      title="Qutub Minar - Victory Tower of Delhi"
      model={<QutubMinarModel />}
      hotspots={hotspots}
      narrationText={narrationText}
      cameraPosition={[5, 5, 5]}
    />
  );
}
