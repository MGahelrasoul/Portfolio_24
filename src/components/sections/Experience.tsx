'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useVelocity, useSpring, useMotionValueEvent } from 'framer-motion'
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
    <div ref={containerRef} className="exp-container relative" style={{ height: `${experiences.length * cardWidth}dvh` }}>
      <div className="sticky top-0 left-0 h-screen w-screen flex items-baseline flex-col justify-evenly">
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
              className="exp-item shadow-exp xl:min-w-[45vw] lg:min-w-[60vw] sm:min-w-[calc(100vw-8rem)] min-w-[calc(100vw-3rem)] rounded-[2px] relative"
            >
              <div className="absolute bg-tertiary px-4 py-1 rounded-ss-2xl rounded-ee-2xl w-max -top-10 left-4 border-[1px] border-card-body z-[1]">
                <h3 className="text-white text-[1.5rem] font-bold">{experience.title}</h3>
                <p className="text-highlight text-[1rem] font-semibold">{experience.company_name}</p>
              </div>

              <ul className="relative list-none space-y-2 max-w-[48rem] bg-secondary p-8 pr-4 pb-4 rounded-[2px] border-[1px] border-tertiary h-full">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-txt text-[.875rem] px-3 py-1 tracking-wider">
                    {point}
                  </li>
                ))}
                <p className="absolute text-lowlight text-xs bg-tertiary border-[1px] border-card-body w-fit py-[0.125rem] px-3 -bottom-3 right-8">{experience.date}</p>
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div style={{ scaleX: scrollYProgress }} className="exp-progress fixed bottom-0 left-0 right-0 h-1 bg-highlight origin-left" />
    </div>
  )
}

export default SectionWrapper(Experience, 'work')
