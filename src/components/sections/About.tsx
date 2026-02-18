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
  sub: string
  icon: string
}

// functional comp
const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, sub, icon }) => {
  return (
    <Tilt
      className="sm:max-w-[15.625rem] max-w-[10rem] flex-1"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="bg-gradient-to-b from-transparent from-[95%] hover:from-[0] to-lowlight hover:to-highlight w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-gradient-to-t from-secondary from-[95%] hover:from-[0] to-tertiary rounded-[20px] py-5 px-12 min-h-[17.5rem] flex justify-center items-center flex-col gap-4">
          <div className="relative w-16 h-16">
            <Image src={icon} alt={title} width={64} height={64} loading="lazy" className="object-contain" sizes="4rem" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-white text-[1.25rem] leading-tight font-bold text-center">{title}</h3>
            <p className="text-sub-txt text-xs">{sub}</p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About: React.FC = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>
            Overview<span className="text-highlight">.</span>
          </h2>
        </motion.div>

        <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-txt text-[1.125rem] max-w-3xl leading-[1.875rem]">
          I’m a software engineer with 5+ years of experience building reliable web applications, with a focus on modern frontend work using React and
          TypeScript. I turn complex requirements into fast, clear user experiences and work closely with designers and product teams to ship code
          that’s easy to maintain and scale.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap sm:gap-10 gap-5 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
