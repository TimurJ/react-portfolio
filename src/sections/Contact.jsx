import { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/Models/Contact/ContactExperience'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.log('EMAILJS Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch With Me" sub="📧 Contact Information" />

        <div className="mt-16 grid-12-cols">
          {/** Contact Form Left Side */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? 'Sending...' : 'Send Message'}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/** 3D Model Right Side */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
