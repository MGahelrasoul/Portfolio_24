'use client'

import { StarsCanvas } from '@/components/canvas'
import { About, Contact, Experience, Hero, Tech, Works } from '@/components/sections'
import { Navbar } from '@/components/ui'
import { useEffect } from 'react'
import { createTimeline } from 'animejs/timeline'
import { stagger } from 'animejs'

export default function HomePage() {
  useEffect(() => {
    const tl = createTimeline({
      defaults: {
        ease: 'inOutExpo',
        duration: 1600,
      },
      autoplay: false,
    })
      .add('.header-text h1', { opacity: [0, 1], translateY: [40, 0] }, 0)
      .add('.header-letter', { opacity: [0, 1], translateY: [80, 0], delay: stagger(80), duration: 40 })
      .add('.header-body', { opacity: [0, 1] })
      .add('.header-bg', { opacity: [0, 1] })
      .init()

    document.fonts.ready.then(() => {
      document.body.classList.add('is-ready')

      tl.play()
    })
  }, [])

  return (
    <>
      <header className="relative">
        <Navbar />
      </header>

      <main className="relative z-0 bg-primary">
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </main>
    </>
  )
}
