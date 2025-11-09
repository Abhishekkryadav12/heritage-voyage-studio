import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense } from "react";

const TajMahalModel = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Main Dome */}
      <mesh position={[0, 2, 0]} castShadow>
        <sphereGeometry args={[1, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.3} roughness={0.2} />
      </mesh>

      {/* Central Structure */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.3} />
      </mesh>

      {/* Four Minarets */}
      {[
        [-2.5, 0, -2.5],
        [2.5, 0, -2.5],
        [-2.5, 0, 2.5],
        [2.5, 0, 2.5],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.15, 0.15, 3, 16]} />
            <meshStandardMaterial color="#f5f5f5" metalness={0.3} roughness={0.2} />
          </mesh>
          <mesh position={[0, 1.7, 0]} castShadow>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial color="#f5f5f5" metalness={0.4} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Platform */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[6, 0.4, 6]} />
        <meshStandardMaterial color="#e8e8e8" metalness={0.1} roughness={0.6} />
      </mesh>

      {/* Decorative Elements */}
      <mesh position={[0, 0.5, 1.01]} castShadow>
        <boxGeometry args={[0.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

export const TajMahal3D = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-gold">Interactive 3D</span>
            <br />
            <span className="text-foreground">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rotate, zoom, and explore the Taj Mahal in stunning 3D.
            Use your mouse or touch to interact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl overflow-hidden h-[600px] glow-gold"
        >
          <Suspense fallback={<LoadingSpinner />}>
            <Canvas shadows>
              <PerspectiveCamera makeDefault position={[5, 3, 5]} fov={50} />
              <OrbitControls
                enablePan={false}
                minDistance={5}
                maxDistance={15}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />

              {/* Lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
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

              <TajMahalModel />

              {/* Ground */}
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
                <planeGeometry args={[20, 20]} />
                <meshStandardMaterial color="#1a1a2e" metalness={0.2} roughness={0.8} />
              </mesh>
            </Canvas>
          </Suspense>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-8"
        >
          Click and drag to rotate • Scroll to zoom
        </motion.p>
      </div>
    </section>
  );
};
