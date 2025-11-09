import { ARTourExperience } from "@/components/ARTourExperience";
import { TajMahalModel } from "@/components/3d-models/TajMahalModel";

const hotspots = [
  {
    position: [0, 2, 0] as [number, number, number],
    title: "The Great Dome",
    description: "The central dome stands 35 meters high and is adorned with a lotus design. It represents the vault of heaven and is the most iconic feature of the Taj Mahal.",
  },
  {
    position: [2.5, 1.5, 2.5] as [number, number, number],
    title: "Minaret",
    description: "Each of the four minarets stands over 40 meters tall. They were designed to tilt slightly outward to protect the main tomb in case of collapse.",
  },
  {
    position: [0, 0.5, 1.01] as [number, number, number],
    title: "Main Entrance",
    description: "The entrance features intricate calligraphy and precious stone inlays. The archway is decorated with verses from the Quran.",
  },
  {
    position: [-2, 0, 0] as [number, number, number],
    title: "Marble Platform",
    description: "The entire structure sits on a massive marble platform measuring 95 meters on each side, elevated to enhance its grandeur.",
  },
];

const narrationText = `Welcome to the Taj Mahal, one of the world's most magnificent monuments to love. 
Built by Emperor Shah Jahan between 1632 and 1653, this ivory-white marble mausoleum was created in 
memory of his beloved wife Mumtaz Mahal. The structure took over 20,000 artisans to complete and 
represents the pinnacle of Mughal architecture. The building changes appearance throughout the day, 
reflecting the changing moods from dawn to dusk.`;

export default function TajMahalTour() {
  return (
    <ARTourExperience
      title="Taj Mahal - Monument of Love"
      model={<TajMahalModel />}
      hotspots={hotspots}
      narrationText={narrationText}
      cameraPosition={[6, 4, 6]}
    />
  );
}
