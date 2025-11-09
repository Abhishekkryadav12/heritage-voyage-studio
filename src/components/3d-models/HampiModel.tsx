export const HampiModel = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Main Temple Structure */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#d4a574" metalness={0.1} roughness={0.7} />
      </mesh>

      {/* Tower/Gopuram */}
      <mesh position={[0, 3.5, 0]} castShadow>
        <coneGeometry args={[1.5, 2, 4]} />
        <meshStandardMaterial color="#c49060" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Stone Pillars */}
      {[-1.5, -0.5, 0.5, 1.5].map((x, i) => (
        <mesh key={i} position={[x, 0.5, 2]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
          <meshStandardMaterial color="#8b7355" metalness={0.1} roughness={0.8} />
        </mesh>
      ))}

      {/* Ruins/Rocks */}
      <mesh position={[-2, -0.2, -1]} castShadow>
        <dodecahedronGeometry args={[0.5]} />
        <meshStandardMaterial color="#9a8169" metalness={0} roughness={1} />
      </mesh>
      <mesh position={[2.5, -0.3, -0.5]} castShadow>
        <dodecahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#9a8169" metalness={0} roughness={1} />
      </mesh>

      {/* Platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[8, 0.3, 8]} />
        <meshStandardMaterial color="#b89968" metalness={0.05} roughness={0.9} />
      </mesh>
    </group>
  );
};
