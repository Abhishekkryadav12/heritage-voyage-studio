export const AjantaModel = () => {
  return (
    <group position={[0, -1, 0]}>
      {/* Cave Cliff Face */}
      <mesh position={[0, 1.5, -2]} castShadow>
        <boxGeometry args={[8, 4, 1]} />
        <meshStandardMaterial color="#8b7355" metalness={0.05} roughness={0.95} />
      </mesh>

      {/* Cave Entrances */}
      {[-2.5, 0, 2.5].map((x, i) => (
        <group key={i} position={[x, 1.2, -1.4]}>
          {/* Entrance arch */}
          <mesh castShadow>
            <cylinderGeometry args={[0.6, 0.6, 1.8, 16, 1, false, 0, Math.PI]} />
            <meshStandardMaterial color="#3a3a3a" metalness={0} roughness={1} />
          </mesh>
          {/* Entrance base */}
          <mesh position={[0, -0.9, 0]}>
            <boxGeometry args={[1.2, 0.1, 0.5]} />
            <meshStandardMaterial color="#6b5d4f" metalness={0.05} roughness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Decorative pillars */}
      {[-3.5, 3.5].map((x, i) => (
        <mesh key={i} position={[x, 0.8, -1.2]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 1.6, 8]} />
          <meshStandardMaterial color="#9a8169" metalness={0.1} roughness={0.8} />
        </mesh>
      ))}

      {/* Stupa (in one cave) */}
      <mesh position={[0, 1, -0.5]} castShadow>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#b89968" metalness={0.2} roughness={0.6} />
      </mesh>

      {/* Rocky platform */}
      <mesh position={[0, -0.3, 0]} receiveShadow>
        <boxGeometry args={[10, 0.4, 4]} />
        <meshStandardMaterial color="#9a8169" metalness={0} roughness={1} />
      </mesh>

      {/* Scattered rocks */}
      {[
        [-3, -0.1, 1],
        [3.5, -0.15, 1.5],
        [-2, -0.1, 0.5],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} castShadow>
          <dodecahedronGeometry args={[0.3 + i * 0.1]} />
          <meshStandardMaterial color="#7a6b5a" metalness={0} roughness={1} />
        </mesh>
      ))}
    </group>
  );
};
