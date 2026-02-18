'use client'

import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '@/styles'
import { EarthCanvas } from '@/components/canvas'
import { SectionWrapper } from '@/hoc'
import { slideIn } from '@/utils/motion'
import toast, { Toaster } from 'react-hot-toast'

interface FormState {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
        {
          from_name: form.name,
          to_name: 'Mohammed',
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_EMAIL!,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY!,
      )

      toast.success(
        <>
          Message sent successfully.
          <br />
          I'll get back to you soon.
        </>,
      )

      // Reset form
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJs Error:', error)
      toast.error(
        <>
          Something went wrong.
          <br />
          Please try again.
        </>,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* toast */}
      <Toaster position="top-center" reverseOrder={false} containerClassName="relative mt-20" />

      {/* contact */}
      <div
        className="xl:mt-12 xl:flex-row flex-col-reverse flex 
                gap-10 overflow-hidden"
      >
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-secondary p-8 rounded-2xl">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>
            Contact<span className="text-highlight">.</span>
          </h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col bg-tertiary border rounded border-card-body">
              <span className="text-border font-medium p-3">Your Name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-secondary py-4 px-6 placeholder:text-muted focus-visible:outline-muted
                        text-txt rounded rounded-t-none outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col bg-tertiary border rounded border-card-body">
              <span className="text-border font-medium p-3">Your Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-secondary py-4 px-6 placeholder:text-muted focus-visible:outline-muted
                        text-txt rounded rounded-t-none outlined-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col bg-tertiary border rounded border-card-body">
              <span className="text-border font-medium p-3">Your Message</span>
              <textarea
                // rows="7"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Leave your message here..."
                className="bg-secondary py-4 px-6 placeholder:text-muted focus-visible:outline-muted
                        text-txt rounded rounded-t-none outlined-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary hover:bg-card-body py-3 px-8 outline-none w-fit text-txt font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[34.375rem] h-[21.875rem]">
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
