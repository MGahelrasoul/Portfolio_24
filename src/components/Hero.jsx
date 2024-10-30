import { motion } from 'framer-motion'
import { styles } from '../styles'
import StarsCanvas from './canvas/Stars'
import { letterVariants } from '../utils/motion'
import { profile, site } from '../assets'

const Hero = () => {
  const firstName = 'Mohammed'
  const lastName = 'Gahelrasoul'

  const renderHoverText = (text, className) => {
    const words = text.split(' ')

    return (
      <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {words.map((word, wordIndex) => (
          <div
            key={`word-${wordIndex}`}
            style={{ display: 'flex', marginRight: '0.25em' }}
          >
            {word.split('').map((char, charIndex) => (
              <motion.span
                key={`char-${wordIndex}-${charIndex}`}
                variants={letterVariants}
                whileHover={{ scale: 1.5 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 10,
                }}
                style={{ display: 'inline-block', cursor: 'pointer' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[7.5rem] max-w-screen-2xl mx-auto flex flex-row items-baseline gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFBA08]" />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div className="flex justify-between items-center lg:flex-row flex-col gap-8 pr-8 w-full">
          <div className="max-w-xl lg:max-w-3xl">
            <p className={`${styles.sectionSubText} mb-4`}>Software Engineer</p>

            <h1 className={`${styles.heroHeadText}`}>
              <p className={`${styles.sectionHeadText}`}>Hey! I'm</p>
              {renderHoverText(
                firstName,
                'text-[#FFBA08] block leading-none mt-2'
              )}
              {renderHoverText(
                lastName,
                'text-[#FFBA08] block leading-none mt-2'
              )}
            </h1>
            <p className={`${styles.heroSubText} mt-6 text-white-txt`}>
              I develop interactive user interfaces and web applications. In my
              free time I pursue creative endeavors such as digital art, game
              development, and content creation.
            </p>
          </div>
          <div className="bg-primary overflow-hidden rounded-full border-highlight border-4 m-auto">
            <img
              // src={site}
              src={profile}
              alt="profile"
              className="max-w-[20rem] w-full h-auto"
            />
          </div>
        </div>
      </div>

      <StarsCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
