import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { LayerMaterial, Depth, Noise } from 'lamina'

export function HomeBg() {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Layer />
      </Canvas>
    </div>
  );
}

export function Layer() {
    return (
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorB="#00E075"
            colorA="#3F47FF"
            alpha={1}
            mode="normal"
            near={130}
            far={200}
            origin={[100, 100, -100]}
          />
          <Noise
            mapping="local"
            type="white"
            scale={1000}
            colorA="white"
            colorB="black"
            mode="subtract"
            alpha={0.2}
          />
        </LayerMaterial>
      </mesh>
    );
  }
