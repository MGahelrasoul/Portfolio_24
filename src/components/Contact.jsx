import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_x41aso8',
        'template_b5dpgsw',
        {
          from_name: form.name,
          to_name: 'Mohammed',
          from_email: form.email,
          to_email: 'M97gahelrasoul@gmail.com',
          message: form.message,
        },
        'NshC_rbPtWtlauv53'
      )
      .then(
        () => {
          setLoading(false)
          alert("Thank you, I'll get back to you as soon as possible!")
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)

          console.log(error)

          alert('Ahh, something went wrong.')
        }
      )
  }

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex 
                gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-tertiary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact<span className='text-highlight'>.</span></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col bg-card-body border rounded border-card-border">
            <span className="text-card-b-txt font-medium p-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-card-f-txt focus-visible:outline-card-f-txt
                        text-white rounded rounded-t-none outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col bg-card-body border rounded border-card-border">
            <span className="text-card-b-txt font-medium p-3">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-card-f-txt focus-visible:outline-card-f-txt
                        text-white rounded rounded-t-none outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col bg-card-body border rounded border-card-border">
            <span className="text-card-b-txt font-medium p-3">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Leave your message here..."
              className="bg-tertiary py-4 px-6 placeholder:text-card-f-txt focus-visible:outline-card-f-txt
                        text-white rounded rounded-t-none outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-btn hover:bg-btn-hover py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[34.375rem] h-[21.875rem]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
