import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GRID: [number, number, number][] = [
  [0, 1.5, 0], [-1.5, 0.5, 0.2], [1.5, 0.5, -0.2], [-1.5, -0.9, 0], [1.5, -0.9, 0.2], [0, -1.6, 0],
];

function Rig() {
  const g = useRef<THREE.Group>(null!);
  const target = useRef({ x: 0, y: 0 });
  useFrame(({ pointer, clock }) => {
    target.current.x = pointer.y * 0.18;
    target.current.y = pointer.x * 0.35 + Math.sin(clock.elapsedTime * 0.25) * 0.12;
    g.current.rotation.x += (target.current.x - g.current.rotation.x) * 0.04;
    g.current.rotation.y += (target.current.y - g.current.rotation.y) * 0.04;
  });
  const lines = useMemo(() => {
    const pts: number[] = [];
    const link = (a: number, b: number) => pts.push(...GRID[a], ...GRID[b]);
    link(0, 1); link(0, 2); link(1, 3); link(2, 4); link(3, 5); link(4, 5); link(0, 5);
    link(1, 2); link(3, 4);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    return geo;
  }, []);
  return (
    <group ref={g}>
      {GRID.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[1.05, 0.7, 1.05]} />
          <meshStandardMaterial color="#25252c" metalness={0.85} roughness={0.35} />
        </mesh>
      ))}
      {GRID.map((p, i) => (
        <mesh key={'t' + i} position={[p[0], p[1] + 0.38, p[2]]}>
          <boxGeometry args={[0.9, 0.04, 0.9]} />
          <meshStandardMaterial color={i === 0 ? '#7657F6' : '#4a4a55'} emissive={i === 0 ? '#7657F6' : '#000'} emissiveIntensity={i === 0 ? 0.6 : 0} metalness={0.6} roughness={0.4} />
        </mesh>
      ))}
      <mesh>
        <boxGeometry args={[1.1, 1.1, 1.1]} />
        <meshPhysicalMaterial color="#b9a8ff" transparent opacity={0.28} roughness={0.08} metalness={0} clearcoat={1} />
      </mesh>
      <lineSegments geometry={lines}><lineBasicMaterial color="#7657F6" transparent opacity={0.7} /></lineSegments>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 7.5], fov: 38 }} gl={{ antialias: false, powerPreference: 'low-power', alpha: true }} frameloop="always">
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} />
      <pointLight position={[-4, -2, 3]} intensity={12} color="#7657F6" />
      <Rig />
    </Canvas>
  );
}
