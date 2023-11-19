import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  PresentationControls,
  Preload,
  useGLTF,
} from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./room/scene.gltf')
  console.log(computer)

  return (
    <mesh castShadow>
      <directionalLight intensity={0.5} color="#1B03A3" />
      <spotLight
        position={[1.1, 0.15, -0.55]}
        angle={1.571}
        penumbra={0.5}
        intensity={0.75}
        color="#FFA500"
      />
      <spotLight
        position={[-0.55, 0.15, 1.1]}
        angle={1.571}
        penumbra={0.5}
        intensity={0.75}
        color="#FF69B4"
      />
      <ambientLight intensity={0.25} color="#1B03A3" />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.85}
        position={isMobile ? [-2, -1, -2] : [0, -1.25, 0]}
        rotation={[0.25, 0, -0.25]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      flat
      frameloop="demand"
      shadows
      camera={{ zoom: 1, position: [0, 0, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PresentationControls
          snap
          global
          zoom={1.2}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 7.5, Math.PI / 7.5]}
          azimuth={[-Math.PI / 5, Math.PI / 5]}
        >
          <Computers isMobile={isMobile} />
        </PresentationControls>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
