import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"

import identityImage1 from "../assets/identity-1.jpg"
import identityImage2 from "../assets/identity-2.jpg"
import identityImage3 from "../assets/identity-3.jpg"

const smoothEase = [0.22, 1, 0.36, 1] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: smoothEase,
    },
  },
}

const lineVariants = {
  hidden: {
    scaleX: 0,
    transformOrigin: "left",
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: smoothEase,
    },
  },
}

const identitySlides = [
  {
    image: identityImage1,
    number: "01",
    title: "Strategic Thinking",
    alt: "Strategic thinking",
  },
  {
    image: identityImage2,
    number: "02",
    title: "Multidisciplinary Expertise",
    alt: "Multidisciplinary expertise",
  },
  {
    image: identityImage3,
    number: "03",
    title: "Lasting Impact",
    alt: "Lasting impact",
  },
]

const backgroundImages = [
  "https://images.unsplash.com/photo-1617704716344-8d987ac681a4?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1554497342-902a4f8da8ed?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
]

function WhoWeAre() {
  const [currentIdentity, setCurrentIdentity] = useState(0)
  const [currentBackground, setCurrentBackground] = useState(0)

  /* =========================================================
      IDENTITY CAROUSEL AUTOPLAY
  ========================================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdentity(
        (prev) => (prev + 1) % identitySlides.length,
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  /* =========================================================
      BACKGROUND CAROUSEL AUTOPLAY
  ========================================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground(
        (prev) => (prev + 1) % backgroundImages.length,
      )
    }, 6500)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIdentity(
      (prev) =>
        (prev - 1 + identitySlides.length) %
        identitySlides.length,
    )
  }

  const goToNext = () => {
    setCurrentIdentity(
      (prev) => (prev + 1) % identitySlides.length,
    )
  }

  const currentSlide = identitySlides[currentIdentity]

  return (
    <section
      id="who-we-are"
      className="relative m-0 overflow-hidden bg-neutral-950 px-6 py-0 text-white sm:px-10 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND IMAGE CAROUSEL
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentBackground}
            initial={{
              opacity: 0,
              scale: 1.04,
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
              duration: 1.4,
              ease: smoothEase,
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[currentBackground]})`,
            }}
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Additional gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl"
      >
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 pt-16 sm:pt-20 lg:pt-24"
        >
          <span className="h-px w-10 bg-white" />

          <span className="text-xs font-semibold tracking-[0.25em] text-white/60">
            WHO WE ARE
          </span>
        </motion.div>

        {/* =====================================================
            MAIN STATEMENT
        ===================================================== */}
        <motion.div
          variants={itemVariants}
          className="mt-8 max-w-5xl"
        >
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building ideas into
            <br />
            <span className="text-white/55">
              meaningful impact.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}
        <motion.div
          variants={lineVariants}
          className="mt-14 h-px w-full bg-white/20"
        />

        {/* =====================================================
            CONTENT GRID
        ===================================================== */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          {/* Left column */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/45">
              Light Corporation
            </p>

            <p className="mt-5 max-w-sm text-xl font-medium leading-relaxed text-white/90">
              Architecture, project management and professional solutions
              across diverse sectors and project environments.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div variants={itemVariants}>
            <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Light Corporation is an architecture and project management firm
              and a subsidiary of Music Royalty. Our multidisciplinary approach
              enables us to adapt to projects of varying scales and
              complexities.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              We bring together strategic planning, architectural expertise,
              project coordination and effective execution to develop
              professional solutions around the needs of each project.
            </p>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              Our experience spans sectors including education, healthcare and
              faith-based projects, allowing us to work across different
              project environments while maintaining a focus on quality,
              coordination and lasting value.
            </p>

            {/* CTA */}
            <motion.a
              href="#services"
              whileHover={{ x: 5 }}
              transition={{
                duration: 0.3,
                ease: smoothEase,
              }}
              className="group mt-10 inline-flex items-center gap-4 text-sm font-medium text-white"
            >
              <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-white">
                Discover what we do
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <FiArrowUpRight size={16} />
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* =====================================================
            IDENTITY CAROUSEL
        ===================================================== */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pb-16 sm:pb-20 lg:mt-24 lg:pb-24"
        >
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdentity}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
                transition={{
                  duration: 0.65,
                  ease: smoothEase,
                }}
                className="group relative h-[180px] overflow-hidden rounded-2xl sm:h-[210px] md:h-[230px]"
              >
                {/* Image */}
                <img
                  src={currentSlide.image}
                  alt={currentSlide.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/55" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-7 md:p-8">
                  <span className="text-xs tracking-[0.18em] text-white/60">
                    {currentSlide.number}
                  </span>

                  <div>
                    <p className="text-lg font-medium sm:text-xl md:text-2xl">
                      {currentSlide.title}
                    </p>

                    <div className="mt-3 h-px w-10 bg-white/60 transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>

                {/* Previous button */}
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Previous identity"
                  className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/40 sm:left-5"
                >
                  <FiChevronLeft size={18} />
                </button>

                {/* Next button */}
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Next identity"
                  className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-black/40 sm:right-5"
                >
                  <FiChevronRight size={18} />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* =================================================
                CAROUSEL INDICATORS
            ================================================= */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {identitySlides.map((slide, index) => (
                <button
                  key={slide.number}
                  type="button"
                  onClick={() => setCurrentIdentity(index)}
                  aria-label={`Go to ${slide.title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIdentity === index
                      ? "w-8 bg-white"
                      : "w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhoWeAre