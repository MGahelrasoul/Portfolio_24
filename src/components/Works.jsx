import { useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, site } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_site_link,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl md:max-w-[18rem] lg:max-w-[22.5rem] w-full"
    >
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        className="sm:w-auto w-full"
      >
        <div className="relative w-full sm:h-[14.375rem]">
          <img
            src={image}
            alt={name}
            className="sm:h-full xs:h-[8.125rem] h-[7.1875rem] object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="bg-card-link w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {!source_site_link ? null : (
              <div
                onClick={() => window.open(source_site_link, '_blank')}
                className="bg-card-link w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={site}
                  alt={`${name} link`}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[1.5rem]">{name}</h3>
          <p className="mt-2 text-secondary text-[0.875rem]">{description}</p>
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

const Works = () => {
  useEffect(() => {
    const preloadImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 200))

      projects.forEach((project) => {
        const img = new Image()
        img.src = project.image
      })
    }

    preloadImages()
  }, [])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>
          Projects<span className="text-highlight">.</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[1.125rem] max-w-3xl leading-[1.875rem]"
        >
          Welcome to my selection of personal projects. While smaller in scale
          compared to the applications and APIs I work on professionally, these
          projects reflect my passion for software development and continuous
          learning. Each one includes brief descriptions, code repositories, and
          live demos if they're available.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
