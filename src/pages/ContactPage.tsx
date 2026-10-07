import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FiArrowUpRight,
  FiCheck,
  FiMail,
  FiMessageCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"

const heroImages = [
  "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1682309572625-791e25352998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D",
]

const closingImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
]

const enquiryTypes = [
  "Architecture",
  "Project Management",
  "Strategic Planning",
  "Project Coordination",
  "Other",
]

function ContactPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [closingImage, setClosingImage] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  })

  /*
   * Hero image autoplay
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

  /*
   * Closing image autoplay
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setClosingImage((prev) => (prev + 1) % closingImages.length)
    }, 5500)

    return () => window.clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const previousImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    )
  }

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#0a0e17]">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative min-h-[88vh] overflow-hidden bg-[#0a0e17]">
          {/* Background carousel */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={currentImage}
                src={heroImages[currentImage]}
                alt="Light Corporation contact"
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.03,
                }}
                transition={{
                  opacity: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 6,
                    ease: "linear",
                  },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Dark image overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Directional gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0e17] to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[88vh] flex-col justify-between px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-xs">
                  Contact
                </p>

                <div className="mt-3 h-px w-12 bg-white/60" />
              </div>

              <div className="text-right">
                <p className="text-[10px] tracking-[0.3em] text-white/60 sm:text-xs">
                  01 / CONTACT
                </p>
              </div>
            </div>

            {/* Main hero content */}
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-5xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/70"
                >
                  Start a conversation
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
                >
                  Let's create
                  <br />
                  <span className="text-white/75">something</span>
                  <br />
                  meaningful.
                </motion.h1>
              </div>

              {/* Contact rail */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                }}
                className="w-full max-w-sm border-l border-white/30 pl-5 lg:w-72"
              >
                <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/60">
                  Direct contact
                </p>

                <a
                  href="https://wa.me/919008477294"
                  target="_blank"
                  rel="noreferrer"
                  className="group mb-5 flex items-start gap-4"
                >
                  <FiMessageCircle className="mt-1 text-lg text-white/70" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm text-white transition-colors group-hover:text-white/70">
                      +91 90084 77294
                    </p>
                  </div>

                  <FiArrowUpRight className="ml-auto text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>

                <a
                  href="mailto:info@lightcorporation.com"
                  className="group flex items-start gap-4"
                >
                  <FiMail className="mt-1 text-lg text-white/70" />

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm text-white transition-colors group-hover:text-white/70">
                      info@lightcorporation.com
                    </p>
                  </div>

                  <FiArrowUpRight className="ml-auto text-white/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-5 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
                Architecture, project management, development, and strategic
                solutions built around meaningful outcomes.
              </p>

              {/* Carousel controls */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  <FiChevronLeft />
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`h-px transition-all duration-500 ${
                        index === currentImage
                          ? "w-10 bg-white"
                          : "w-5 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:border-white hover:bg-white hover:text-black"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ENQUIRY WORKSPACE
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#0a0e17] text-white">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-24">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  02 / PROJECT ENQUIRY
                </p>

                <div className="mt-5 h-px w-12 bg-white/30" />

                <h2 className="mt-10 max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                  Tell us what
                  <br />
                  you're building.
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  Whether you are developing a new project, planning a
                  transformation, or looking for strategic project support,
                  tell us where you are and what you need.
                </p>

                <div className="mt-12 space-y-7">
                  <div className="flex gap-5">
                    <span className="text-xs text-white/35">01</span>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Share your idea
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        Give us a brief overview of your project or requirement.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="text-xs text-white/35">02</span>

                    <div>
                      <p className="text-sm font-medium text-white">
                        We review
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        We assess the information and understand the context.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <span className="text-xs text-white/35">03</span>

                    <div>
                      <p className="text-sm font-medium text-white">
                        We connect
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/45">
                        We begin the conversation around the right approach.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
              >
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="border-t border-white/20 pt-8"
                  >
                    <div className="grid gap-8 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/60"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/60"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white"
                        />
                      </div>

                      {/* Organization */}
                      <div>
                        <label
                          htmlFor="organization"
                          className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/60"
                        >
                          Organization
                        </label>

                        <input
                          id="organization"
                          name="organization"
                          type="text"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Company / organization"
                          className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-white"
                        />
                      </div>

                      {/* Interest */}
                      <div>
                        <label
                          htmlFor="interest"
                          className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/60"
                        >
                          Area of interest
                        </label>

                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className="w-full border-b border-white/25 bg-[#0a0e17] px-0 py-3 text-sm text-white outline-none transition-colors focus:border-white"
                        >
                          <option value="" disabled>
                            Select an area
                          </option>

                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/60"
                      >
                        Project / Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, requirements, timeline, or anything else that would help us understand your enquiry."
                        className="w-full resize-none border-b border-white/25 bg-transparent px-0 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/30 transition-colors focus:border-white"
                      />
                    </div>

                    {/* Submit */}
                    <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-sm text-xs leading-5 text-white/40">
                        Your information will be used only to understand and
                        respond to your enquiry.
                      </p>

                      <button
                        type="submit"
                        className="group flex shrink-0 items-center justify-center gap-4 border border-white bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#0a0e17] transition-all hover:bg-transparent hover:text-white"
                      >
                        Send enquiry

                        <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex min-h-[500px] flex-col justify-center border-t border-white/20"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30">
                      <FiCheck className="text-2xl text-white" />
                    </div>

                    <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/50">
                      Enquiry received
                    </p>

                    <h3 className="mt-5 max-w-xl text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                      Thank you for getting in touch.
                    </h3>

                    <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                      Your enquiry has been recorded. We look forward to
                      understanding your project and exploring how we can work
                      together.
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          organization: "",
                          interest: "",
                          message: "",
                        })
                      }}
                      className="mt-10 flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:border-white"
                    >
                      Send another enquiry
                      <FiArrowUpRight />
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CLOSING IMAGE CAROUSEL
        ========================================================= */}
        <section className="relative min-h-[620px] overflow-hidden bg-black px-6 py-20 sm:px-10 lg:min-h-[680px] lg:px-16 lg:py-28 xl:px-24">
          {/* Background carousel */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={closingImage}
                src={closingImages[closingImage]}
                alt="Light Corporation architecture and built environment"
                initial={{
                  opacity: 0,
                  scale: 1.06,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                }}
                transition={{
                  opacity: {
                    duration: 1.4,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 5.5,
                    ease: "linear",
                  },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Directional gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/55" />

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
          </div>

          {/* Closing content */}
          <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between">
            {/* Top */}
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.3em] text-white/65">
                03 / NEXT STEP
              </p>

              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                Light Corporation
              </span>
            </div>

            {/* Main content */}
            <div className="grid gap-12 lg:grid-cols-[180px_1fr_260px] lg:items-center">
              {/* Number */}
              <div>
                <span className="text-7xl font-light tracking-[-0.05em] text-white/20 sm:text-8xl">
                  03
                </span>
              </div>

              {/* Statement */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Let's create something meaningful.
                </p>

                <h2 className="mt-5 max-w-2xl text-3xl font-light leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                  Building Ideas. Creating Value. Shaping the Future.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                  Professional expertise, strategic vision, and effective
                  execution brought together to create lasting value.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col items-start lg:items-end">
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/50">
                  Start a conversation
                </p>

                <a
                  href="https://wa.me/919008477294"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-28 w-28 items-center justify-center rounded-full border border-white/40 bg-white text-black transition-all duration-500 hover:scale-105 hover:bg-transparent hover:text-white"
                >
                  <div className="text-center">
                    <FiArrowUpRight className="mx-auto text-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />

                    <span className="mt-2 block text-[9px] uppercase tracking-[0.18em]">
                      Contact
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-x-7 gap-y-2 text-xs uppercase tracking-[0.15em] text-white/50">
                <span>Architecture</span>
                <span>Project Management</span>
                <span>Development</span>
              </div>

              {/* Closing carousel indicators */}
              <div className="flex items-center gap-2">
                {closingImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setClosingImage(index)}
                    aria-label={`Show closing image ${index + 1}`}
                    className={`h-px transition-all duration-500 ${
                      index === closingImage
                        ? "w-10 bg-white"
                        : "w-5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default ContactPage