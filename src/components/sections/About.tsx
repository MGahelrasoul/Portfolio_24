'use client'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import Image from 'next/image'

// Type definitions
interface ServiceCardProps {
  index: number
  title: string
  icon: string
}

// functional comp
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:max-w-[15.625rem] w-full flex-1"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="w-full orange-black-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[17.5rem] flex justify-evenly items-center flex-col">
          <div className="relative w-16 h-16">
            <Image src={icon} alt={title} width={64} height={64} loading="lazy" className="object-contain" sizes="4rem" />
          </div>
          <h3 className="text-white text-[1.25rem] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview<span className="text-highlight">.</span>
        </h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[1.125rem] max-w-3xl leading-[1.875rem]">
        I’m a Software Engineer with 5+ years of experience building scalable, interactive web applications, with 3+ years focused on modern frontend
        development. My expertise lies in crafting performant, accessible, and visually engaging user interfaces using React, TypeScript, and Node.js.
        <br className="mb-5" />
        Since 2019, I’ve specialized in translating complex requirements into intuitive, real-time user experiences, optimizing performance while
        maintaining clean, maintainable code. I thrive in collaborative environments where design, engineering, and product intersect, and I’m
        especially motivated by projects that bring communities together through interactive digital experiences.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
