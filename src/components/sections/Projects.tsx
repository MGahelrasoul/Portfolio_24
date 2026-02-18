'use client'

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { SectionWrapper } from '@/hoc'
import { projects } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image'

interface Tag {
  name: string
  color: string
}
interface ProjectCardProps {
  index: number
  name: string
  description: string
  tags: Tag[]
  image: string
  source_code_link?: string
  source_site_link?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, source_code_link, source_site_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-secondary p-5 rounded-2xl md:max-w-[18rem] lg:max-w-[22.5rem] w-full shadow-exp"
    >
      <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="sm:w-auto w-full">
        <div className="relative w-full sm:h-[14.375rem]">
          <div className="relative sm:h-full xs:h-[8.125rem] h-[7.1875rem] rounded-2xl">
            <Image src={image} alt={name} fill loading="lazy" className="object-cover" />
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            {!source_code_link ? null : (
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className="bg-tertiary hover:bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <div className="relative w-1/2 h-1/2">
                  <Image src={'/assets/github.png'} alt="github link" width={20} height={20} loading="lazy" className="object-contain" />
                </div>
              </div>
            )}

            {!source_site_link ? null : (
              <div
                onClick={() => window.open(source_site_link, '_blank')}
                className="bg-tertiary hover:bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <div className="relative w-1/2 h-1/2">
                  <Image src={'/assets/site.png'} alt={`${name} link`} width={20} height={20} loading="lazy" className="object-contain" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[1.5rem]">{name}</h3>
          <p className="mt-2 text-txt text-[0.875rem]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[0.875rem] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  )
}

const Projects: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My works</p>
          <h2 className={styles.sectionHeadText}>
            Projects<span className="text-highlight">.</span>
          </h2>
        </motion.div>

        <div className="w-full flex">
          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-3 text-txt text-[1.125rem] max-w-3xl leading-[1.875rem]">
            A selection of hands-on projects showing how I build fast, easy to use interfaces and turn ideas into working products. Each project
            reflects my focus on clean design, performance, and real-world usability from start to finish.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, 'projects')
