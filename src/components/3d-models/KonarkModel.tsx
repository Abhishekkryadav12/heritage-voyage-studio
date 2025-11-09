export const KonarkModel = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Main Temple Body */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[3, 2, 4]} />
        <meshStandardMaterial color="#d4a574" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Tower (Vimana) */}
      <mesh position={[0, 3, 0]} castShadow>
        <cylinderGeometry args={[1, 1.5, 2.5, 8]} />
        <meshStandardMaterial color="#c49060" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Chariot Wheels */}
      {[-1.8, 1.8].map((z, i) => (
        <group key={i} position={[-1.6, 0, z]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <torusGeometry args={[0.5, 0.1, 8, 16]} />
            <meshStandardMaterial color="#8b7355" metalness={0.3} roughness={0.5} />
          </mesh>
          {/* Wheel spokes */}
          {[0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4].map((angle, j) => (
            <mesh
              key={j}
              position={[
                Math.cos(angle) * 0.25,
                0,
                Math.sin(angle) * 0.25,
              ]}
              rotation={[0, angle, Math.PI / 2]}
              castShadow
            >
              <boxGeometry args={[0.5, 0.05, 0.05]} />
              <meshStandardMaterial color="#8b7355" metalness={0.2} roughness={0.6} />
            </mesh>
          ))}
        </group>
      ))}

      {/* Stone Carvings (decorative blocks) */}
      <mesh position={[0, 0.5, 2.2]} castShadow>
        <boxGeometry args={[2, 0.8, 0.2]} />
        <meshStandardMaterial color="#b89968" metalness={0.15} roughness={0.65} />
      </mesh>

      {/* Platform */}
      <mesh position={[0, -0.4, 0]} receiveShadow>
        <boxGeometry args={[5, 0.3, 6]} />
        <meshStandardMaterial color="#c4a870" metalness={0.05} roughness={0.9} />
      </mesh>
    </group>
  );
};
