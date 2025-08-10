import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      points: ThreeElements['points']
      pointMaterial: ThreeElements['pointMaterial']
    }
  }
}
