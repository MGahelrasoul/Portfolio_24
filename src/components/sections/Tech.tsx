'use client'

import { SectionWrapper } from '@/hoc'
import { technologies } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Tech = () => {
  return (
    <div className="tech flex">
      <div className="tech-gradient" />
      <div className="tech-wrap flex">
        <motion.div
          className="tech-list"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {technologies.map((technology, index) => (
            <div key={`first-${index}`} className="tech-item">
              <Image src={technology.icon} alt={technology.name} width={100} height={100} />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="tech-list"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {technologies.map((technology) => (
            <div key={`second-${technology.name}`} className="tech-item">
              <Image src={technology.icon} alt={technology.name} width={100} height={100} />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="tech-gradient grad2" />
    </div>
  )
}

export default SectionWrapper(Tech, '')
