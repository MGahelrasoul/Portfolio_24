'use client'

import { StarsCanvas } from '@/components/canvas'
import {
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
} from '@/components/sections'
import { Navbar } from '@/components/ui'

export default function HomePage() {
  return (
    <main className="relative z-0 bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  )
}
