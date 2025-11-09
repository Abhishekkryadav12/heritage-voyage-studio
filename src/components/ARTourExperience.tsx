import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Html } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Play, Pause, Volume2, VolumeX, Info } from "lucide-react";
import { useSoundManager } from "@/hooks/useSoundManager";
import { useNavigate } from "react-router-dom";

interface Hotspot {
  position: [number, number, number];
  title: string;
  description: string;
}

interface ARTourExperienceProps {
  title: string;
  model: React.ReactNode;
  hotspots: Hotspot[];
  narrationText: string;
  ambientSound?: string;
  cameraPosition?: [number, number, number];
}

const Hotspot3D = ({ 
  position, 
  title, 
  description, 
  onClick 
}: { 
  position: [number, number, number]; 
  title: string; 
  description: string;
  onClick: () => void;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <Html>
        <motion.div
          className="relative cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={onClick}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/80 backdrop-blur-sm border-2 border-primary glow-gold flex items-center justify-center">
            <Info className="w-4 h-4 text-primary-foreground" />
          </div>
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 glass-card p-4 rounded-xl z-50"
              >
                <h4 className="text-sm font-bold text-gradient-gold mb-2">{title}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Html>
    </group>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const ARTourExperience = ({
  title,
  model,
  hotspots,
  narrationText,
  ambientSound,
  cameraPosition = [5, 3, 5],
}: ARTourExperienceProps) => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const { playNarration, playAmbient, stopAmbient, stopNarration } = useSoundManager({
    ambient: ambientSound,
    volume: 0.7,
  });

  useEffect(() => {
    if (soundEnabled) {
      playAmbient();
    } else {
      stopAmbient();
    }
  }, [soundEnabled]);

  const handlePlayTour = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && soundEnabled) {
      playNarration(narrationText);
    } else {
      stopNarration();
    }
  };

  const handleExit = () => {
    stopAmbient();
    stopNarration();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-background z-50">
      {/* Header Controls */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center glass-card border-b border-border/50"
      >
        <h1 className="text-2xl font-bold text-gradient-gold">{title}</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="glow-teal"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handlePlayTour}
            className="glow-gold"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleExit}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <div className="w-full h-full">
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={50} />
            <OrbitControls
              enablePan={true}
              minDistance={3}
              maxDistance={20}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 1.5}
            />

            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1.2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-10, 10, -10]} intensity={0.5} color="#fbbf24" />
            <spotLight
              position={[0, 15, 0]}
              angle={0.3}
              penumbra={0.5}
              intensity={0.5}
              color="#fbbf24"
            />

            <Environment preset="sunset" />

            {/* Model */}
            {model}

            {/* Hotspots */}
            {hotspots.map((hotspot, index) => (
              <Hotspot3D
                key={index}
                position={hotspot.position}
                title={hotspot.title}
                description={hotspot.description}
                onClick={() => setSelectedHotspot(hotspot)}
              />
            ))}

            {/* Ground */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.8} />
            </mesh>
          </Canvas>
        </Suspense>
      </div>

      {/* Hotspot Detail Panel */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="absolute right-0 top-24 bottom-0 w-96 glass-card border-l border-border/50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gradient-gold">{selectedHotspot.title}</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedHotspot(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-muted-foreground leading-relaxed">{selectedHotspot.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full text-sm text-muted-foreground"
      >
        Click and drag to rotate • Scroll to zoom • Click hotspots for details
      </motion.div>
    </div>
  );
};
