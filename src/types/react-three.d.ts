declare module '@react-three/drei' {
  export * from '@react-three/drei/index'
}

declare module '@react-three/fiber' {
  import { Camera, Scene, WebGLRenderer } from 'three'

  export type RootState = {
    gl: WebGLRenderer
    scene: Scene
    camera: Camera
  }

  export function useFrame(
    callback: (state: RootState, delta: number) => void,
    renderPriority?: number
  ): void

  export const Canvas: React.FC<{
    children?: React.ReactNode
    style?: React.CSSProperties
    shadows?: boolean
    camera?: CameraProps
    frameloop?: Frameloop
    dpr?: Dpr
    gl?: GLProps
  }>

  export * from '@react-three/fiber/dist/declarations/src'
}
