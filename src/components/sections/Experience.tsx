'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { styles } from '@/styles'
import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [cardWidth, setCardWidth] = useState(0)
  const [cardVW, setCardVW] = useState('')

  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth

      if (w >= 1280) {
        setCardWidth(45)
        setCardVW(`-${(experiences.length - 1) * 50}vw`)
      } else if (w >= 1024) {
        setCardWidth(60)
        setCardVW(`-${(experiences.length - 1) * 70}vw`)
      } else if (w >= 640) {
        setCardWidth(100)
        setCardVW(`-${(experiences.length - 1) * 100}vw`)
      } else {
        setCardWidth(100)
        setCardVW(`-${(experiences.length - 1) * 100}vw`)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const x = useTransform(scrollYProgress, [0, 1], ['0px', cardVW])

  return (
    <div ref={containerRef} className="exp-container relative" style={{ height: `${experiences.length * cardWidth}vh` }}>
      <div className="sticky top-0 left-0 h-screen w-screen flex items-baseline flex-col justify-center gap-16">
        <motion.div variants={textVariant()} className="">
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>
            Work Experience<span className="text-highlight">.</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeIn('', '', 0.1, 1)} style={{ x }} className="exp-group flex sm:gap-[8rem] gap-[3rem]">
          {experiences.map((experience, i) => (
            <div
              key={experience.title ?? i}
              className="exp-item bg-[#0e0e0e] text-[#F48C06] shadow-[0_3px_0_#303030] box-border p-8 flex flex-col xl:min-w-[45vw] lg:min-w-[60vw] sm:min-w-[calc(100vw-8rem)] min-w-[calc(100vw-3rem)] rounded-[.25rem]"
            >
              <div className="mb-5">
                <h3 className="text-white text-[1.5rem] font-bold mb-2">{experience.title}</h3>
                <p className="text-highlight text-[1rem] font-semibold">{experience.company_name}</p>
              </div>

              <ul className="mb-5 list-none space-y-2 max-w-[48rem]">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-white-txt text-[.875rem] px-3 py-1 tracking-wider">
                    {point}
                  </li>
                ))}
              </ul>

              <p className="text-xs opacity-75 mt-auto">{experience.date}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div style={{ scaleX: scrollYProgress }} className="exp-progress fixed bottom-0 left-0 right-0 h-1 bg-highlight origin-left" />
    </div>
  )
}

export default SectionWrapper(Experience, 'work')
