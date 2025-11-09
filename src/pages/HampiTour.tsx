import { ARTourExperience } from "@/components/ARTourExperience";
import { HampiModel } from "@/components/3d-models/HampiModel";

const hotspots = [
  {
    position: [0, 3.5, 0] as [number, number, number],
    title: "Temple Tower",
    description: "The Gopuram or temple tower showcases the distinctive Dravidian architecture style with intricate stone carvings depicting various deities.",
  },
  {
    position: [1.5, 0.5, 2] as [number, number, number],
    title: "Stone Pillars",
    description: "These musical pillars produce different notes when struck, demonstrating the advanced acoustic engineering of the Vijayanagara Empire.",
  },
  {
    position: [-2, 0, -1] as [number, number, number],
    title: "Ancient Ruins",
    description: "The scattered ruins represent the once-glorious capital that was larger than Rome at its peak in the 14th century.",
  },
  {
    position: [0, 1.5, 0] as [number, number, number],
    title: "Main Temple Structure",
    description: "The main sanctum was the heart of religious activities during the Vijayanagara period, dedicated to Lord Shiva.",
  },
];

const narrationText = `Welcome to Hampi, the magnificent capital of the Vijayanagara Empire. 
Flourishing in the 14th century, this UNESCO World Heritage Site was one of the richest and 
largest cities in the world. The ruins span over 4,100 hectares and contain more than 1,600 
monuments. The temples here showcase remarkable Dravidian architecture with intricate carvings 
and innovative engineering, including the famous musical pillars.`;

export default function HampiTour() {
  return (
    <ARTourExperience
      title="Hampi - Ancient Empire Capital"
      model={<HampiModel />}
      hotspots={hotspots}
      narrationText={narrationText}
      cameraPosition={[7, 5, 7]}
    />
  );
}
