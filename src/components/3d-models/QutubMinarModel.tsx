export const QutubMinarModel = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Main Tower - Tapered cylinder */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.8, 5, 16]} />
        <meshStandardMaterial color="#d4a574" metalness={0.15} roughness={0.65} />
      </mesh>

      {/* Decorative Bands */}
      {[0.5, 1.5, 2.5, 3.5].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} castShadow>
          <cylinderGeometry args={[0.42 + (3.5 - y) * 0.1, 0.42 + (3.5 - y) * 0.1, 0.15, 16]} />
          <meshStandardMaterial color="#c49060" metalness={0.25} roughness={0.55} />
        </mesh>
      ))}

      {/* Top Dome */}
      <mesh position={[0, 4.7, 0]} castShadow>
        <sphereGeometry args={[0.45, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#8b7355" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Small adjacent structure */}
      <mesh position={[2, 0.5, 0]} castShadow>
        <boxGeometry args={[1.5, 1, 1.5]} />
        <meshStandardMaterial color="#b89968" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Arches on adjacent structure */}
      <mesh position={[2, 0.5, 0.8]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.1]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.05} roughness={0.9} />
      </mesh>

      {/* Platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[6, 0.3, 6]} />
        <meshStandardMaterial color="#c4a870" metalness={0.05} roughness={0.9} />
      </mesh>
    </group>
  );
};
