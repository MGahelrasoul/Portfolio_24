import React from 'react'
import Particles from './Particles'

const Stars = () => {
  return (
    <div className="header-body" style={{ width: '100dvw', height: '100dvh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Particles
        particleColors={['#000', '#fff', '#ffba08']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  )
}

export default Stars
