'use client'

import { NotFound } from '@/components/sections'
import { Navbar } from '@/components/ui'
import { useEffect } from 'react'
import { stagger, createTimeline } from 'animejs'

export default function HomePage() {
  useEffect(() => {
    const tl = createTimeline({
      defaults: {
        ease: 'inOutExpo',
        duration: 1600,
      },
      autoplay: false,
    })
      .add('.header-text h1', { opacity: [0, 1], translateY: [40, 0], delay: stagger(300) }, 0)
      .add('.header-body', { opacity: [0, 1] })
      .init()

    document.fonts.ready.then(() => {
      document.body.classList.add('is-ready')

      tl.play()
    })
  }, [])

  // const toggle = () => {
  //   document.body.classlist.toggle('dark')
  // }

  return (
    <>
      <header className="relative">
        <Navbar />
      </header>

      <main className="relative z-0 bg-primary">
        <NotFound />
      </main>
    </>
  )
}
