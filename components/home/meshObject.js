import * as THREE from 'three'
import { Suspense } from 'react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import Trees from './trees'
import { LayerMaterial, Depth, Noise } from 'lamina'

export function MeshObject({title, subtitle, trees}) {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Suspense fallback={null}>
          {trees ? <Trees/> : null}
          <Caption>{title}</Caption>
          <Subtitle>{subtitle}</Subtitle>
          <Rig />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);

  if (width > 3) {
    return (
      <Text
        position={[0, 0, -5]}
        lineHeight={0.8}
        fontSize={width > 5 ? width / 10 : width / 8}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
        font='fonts/FontsFree-Net-BasisGrotesquePro-Regular.ttf'
      >
        {children}
      </Text>
    );
  } else null
}
function Subtitle({ children }) {
  const { width } = useThree((state) => state.viewport);

  if (width > 3) {
    return (
      <Text
        position={[0, -1, -7]}
        lineHeight={0.8}
        fontSize={width > 5 ? width / 32 : width / 14}
        material-toneMapped={false}
        anchorX="center"
        anchorY="middle"
        maxWidth={width > 5 ? 10 : 4}
        textAlign="center"
        font='fonts/FontsFree-Net-BasisGrotesquePro-Regular.ttf'
      >
        {children}
      </Text>
    );
  } else null
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}
//origin changed from [100,100,-100]
export function Bg() {
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
            origin={[0, 0, 0]}
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
