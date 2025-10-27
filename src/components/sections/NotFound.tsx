'use client'

import { StarsCanvas } from '@/components/canvas'
import { Contact } from '@/components/sections'
import { styles } from '@/styles'
import { SectionWrapper } from '@/hoc'

const NotFound: React.FC = () => {
  return (
    <>
      <h1 className={styles.sectionHeadText}>404 — Page Not Found</h1>
      <p className={styles.sectionSubText}>The page you’re looking for doesn’t exist.</p>
      <div className={styles.padding}>
        <a href="/" className="rounded bg-highlight px-4 py-2 text-white hover:bg-lowlight">
          Go Home
        </a>
      </div>

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  )
}

export default SectionWrapper(NotFound, 'notfound')
