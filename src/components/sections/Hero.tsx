'use client'

import { motion } from 'framer-motion'
import { styles } from '@/styles'
import { StarsCanvas } from '@/components/canvas'
import { letterVariants } from '@/utils/motion'
import Image from 'next/image'
import Particles from '@/components/ui/Particles'

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
      <div className={`${styles.paddingX} absolute inset-0 top-[7.5rem] max-w-screen-2xl mx-auto flex flex-row items-baseline gap-5`}>
        <div className="header-body flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFBA08]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div className="flex justify-between items-center lg:flex-row flex-col gap-8 pr-8 w-full">
          <div className="header-text max-w-xl lg:max-w-3xl">
            <p className={`header-body ${styles.sectionSubText} mb-4`}>Software Engineer</p>

            <h1 className={`${styles.heroHeadText}`}>
              <p className={`${styles.sectionHeadText}`}>Hey! I'm</p>
            </h1>
            <h1 className={`${styles.heroHeadText}`}>{renderHoverText('Mohammed', 'text-[#FFBA08] block leading-none mt-2')}</h1>
            <h1 className={`${styles.heroHeadText}`}>{renderHoverText('Gahelrasoul', 'text-[#FFBA08] block leading-none mt-2')}</h1>

            <p className={`header-body ${styles.heroSubText} mt-6 text-white-txt`}>
              I build interactive user interfaces and web applications. When I’m not building, I’m creating art, exploring games, or experimenting
              with AI.
            </p>
          </div>

          <div className="header-body bg-primary overflow-hidden rounded-full border-highlight border-4 m-auto">
            <div className="relative max-w-[20rem] w-full h-auto">
              <Image src="/assets/profile5002.png" alt="profile" width={320} height={320} priority className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* <StarsCanvas /> */}
      <div className="header-bg" style={{ width: '100%', height: '100%', position: 'relative' }}>
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
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <a href="#about">
          <div className="w-8 h-14 rounded-full border-2 border-secondary flex justify-center">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-3 h-3 rounded-full bg-secondary mt-2"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
