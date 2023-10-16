import * as THREE from 'three'
import { useState, useMemo } from 'react'
import { useThree } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'
import { LayerMaterial, Depth, Fresnel, Noise } from 'lamina'

const colorA = new THREE.Color('#3F47FF').convertSRGBToLinear()
const colorB = new THREE.Color('#0F1C4D').convertSRGBToLinear()
const fresnel = new THREE.Color('#00E075').convertSRGBToLinear()


function Tree() {
  const { viewport, camera } = useThree()
  const { nodes } = useGLTF('/palm-tree.glb')
  //console.log(nodes.QueenPalmTree_Mesh.geometry)
  //const [geometry] = useState(() => nodes[`noodle_${Math.ceil(Math.random() * 4)}`].geometry)
  const [geometry, setGeometry] = useState(() => nodes.QueenPalmTree_Mesh.geometry)
  //console.log(geometry)
  const [speed] = useState(() => 0.1 + Math.random() / 10)
  const position = useMemo(() => {
    const min = Math.ceil(10)
    const max = Math.floor(20)
    const z = -Math.floor((Math.random() * (max - min)) + min)
    const bounds = viewport.getCurrentViewport(camera, [0, 0, z])
    return [THREE.MathUtils.randFloatSpread(bounds.width), THREE.MathUtils.randFloatSpread(bounds.height * 0.75), z]
  }, [viewport])
  return (
    <Float position={position} speed={speed} rotationIntensity={10} floatIntensity={40} dispose={null}>
      <mesh scale={.15} geometry={geometry}>
        <LayerMaterial color={colorA}>
          <Depth colorA={colorA} colorB={colorB} alpha={0.5} mode='normal' near={0} far={2} origin={[1, 1, 1]}/>
          <Depth colorA={colorB} colorB={colorB} alpha={0.5} mode='add' near={3} far= {2} origin={[1, 1, 1]}/>
          <Fresnel mode='add' color={fresnel} intensity={0.3} power={2.5} bias={0.0} origin={[1, 1, 1]}/>
          <Noise colorA={colorA} colorB={colorB} mode='overlay' mapping='local' type='simplex' scale={1000}/>
        </LayerMaterial>
      </mesh>
    </Float>
  )
}

export default function Trees() {
  return Array.from({ length: 20 }, (_, i) => <Tree key={i} />)
}

useGLTF.preload('/worms-transformed.glb')
