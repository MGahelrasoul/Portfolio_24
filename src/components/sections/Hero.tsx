'use client'

import { motion } from 'framer-motion'
import { styles } from '@/styles'
import Image from 'next/image'
import { SplitText } from '@/components/ui'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 pt-[7rem] max-w-screen-2xl mx-auto flex flex-row lg:items-baseline`}>
        <div className="header-body flex flex-col justify-center items-center absolute">
          <div className="w-5 h-5 rounded-full bg-[#FFBA08]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div className="flex justify-between items-center lg:flex-row flex-col w-full">
          <div className="header-text max-w-xl lg:max-w-3xl w-fit mx-8 lg:mb-0 mb-8">
            <p className={`header-body ${styles.sectionSubText} mb-4`}>Software Engineer</p>
            <h1 className={`${styles.heroHeadText}`}>
              <SplitText
                text="Hey! I'm"
                className={`${styles.sectionHeadText}`}
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="Mohammed Gahelrasoul"
                className={`header-letter text-highlight mt-3`}
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </h1>
            <p className={`header-body ${styles.heroSubText} mt-6 text-txt`}>28 yo Frontend Engineer from Maryland.</p>
            <p className={`header-body ${styles.heroSubText} mt-3 text-txt`}>
              When I’m not building, I’m creating art, exploring games, or experimenting with AI.
            </p>
            <ul className="header-body list-none flex gap-2 mt-6 items-center">
              {/* <li>
                <a href="/assets/Mohammed_Gahelrasoul_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center border-2 rounded-md px-4 py-1 mr-2">
                  Resume <img src="/assets/resume.svg" className="size-8" />
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/mgahelrasoul/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/linkedin.svg" className="size-12" />
                </a>
              </li>
              <li>
                <a href="https://github.com/MGahelrasoul" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/github.svg" className="size-12" />
                </a>
              </li>
              <li>
                <a href="mailto:m97gahelrasoul@gmail.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/email.svg" className="size-12" />
                </a>
              </li>
            </ul>
          </div>

          <div className="header-body bg-highlight overflow-hidden rounded-full border-highlight border-4">
            <div className="relative max-w-[20rem] w-full h-auto">
              <Image src="/assets/profile5002.png" alt="profile" width={320} height={320} priority className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <a href="#about">
          <div className="w-8 h-14 rounded-full border-2 border-txt flex justify-center">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-3 h-3 rounded-full bg-txt mt-2"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
