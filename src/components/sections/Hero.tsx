'use client'

import { motion } from 'framer-motion'
import { styles } from '@/styles'
import Image from 'next/image'
import Particles from '@/components/ui/Particles'
import SplitText from '@/components/ui/SplitText'

const Hero = () => {
  const renderHoverText = (text: string, className: string) => {
    const words = text.split(' ')

    return (
      <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {words.map((word, wordIndex) => (
          <p key={`word-${wordIndex}`} style={{ display: 'flex', marginRight: '0.25em' }}>
            {word.split('').map((char, charIndex) => (
              <span key={`char-${wordIndex}-${charIndex}`} className="header-letter">
                <span className="inline-block cursor-pointer hover:scale-125 transition-transform">{char}</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    )
  }

  return (
    <section className="relative w-full h-screen mx-auto">
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
                className={`header-letter text-highlight`}
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

            <p className={`header-body ${styles.heroSubText} mt-6 text-txt`}>
              I build interactive user interfaces and web applications. When I’m not building, I’m creating art, exploring games, or experimenting
              with AI.
            </p>
          </div>

          <div className="header-body bg-highlight overflow-hidden rounded-full border-highlight border-4">
            <div className="relative max-w-[20rem] w-full h-auto">
              <Image src="/assets/profile5002.png" alt="profile" width={320} height={320} priority className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* <StarsCanvas /> */}
      <div className="header-body" style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Particles
          particleColors={['#000', '#fff', '#ffba08']}
          particleCount={600}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
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
