'use client'

import { motion } from 'framer-motion'
import { styles } from '@/styles'
import { experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'

const Experience: React.FC = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="">
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.sectionHeadText}>
            Work Experience<span className="text-highlight">.</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto">
        <motion.div variants={fadeIn('', '', 0.1, 1)} className="flex flex-col mt-20 sm:gap-20 gap-14">
          {experiences.map((experience, i) => (
            <div
              key={experience.title ?? i}
              className="shadow-exp rounded-[2px] relative max-w-[48rem] w-full mx-auto lg:odd:ml-0 lg:even:mr-0"
            >
              <div className="absolute bg-tertiary px-4 py-1 rounded-ss-2xl rounded-ee-2xl w-max -top-10 left-4 border-[1px] border-card-body z-[1]">
                <h3 className="text-white text-[1.5rem] font-bold">{experience.title}</h3>
                <p className="text-highlight text-[1rem] font-semibold">{experience.company_name}</p>
              </div>

              <ul className="relative list-disc space-y-0 max-w-[48rem] bg-secondary p-8 pt-10 pr-4 pb-4 rounded-[2px] border-[1px] border-tertiary h-full">
                {experience.points.map((point, index) => (
                  <li key={`experience-point-${index}`} className="text-txt text-[.875rem] px-3 py-1 tracking-wider">
                    {point}
                  </li>
                ))}
                <p className="absolute text-lowlight text-xs bg-tertiary border-[1px] border-card-body w-fit py-[0.125rem] px-3 -bottom-3 right-8">
                  {experience.date}
                </p>
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Experience, 'work')
