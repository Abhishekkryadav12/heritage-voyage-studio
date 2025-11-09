export const TajMahalModel = () => {
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
