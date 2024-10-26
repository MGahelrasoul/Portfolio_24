import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#0e0e0e', color: '#F48C06', boxShadow: "0 3px 0 #303030" }}
    contentArrowStyle={{ borderRight: '7px solid #F48C06' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, boxShadow: '0 0 0 4px #303030,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        /> */}
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[1.5rem] font-bold">{experience.title}</h3>
      <p className="text-highlight text-[1rem] font-semibold">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-none space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-txt text-[.875rem] px-3 py-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience<span className='text-highlight'>.</span></h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
