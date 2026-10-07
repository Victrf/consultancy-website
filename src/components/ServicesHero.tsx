import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi"

const slides = [
  {
    number: "01",
    eyebrow: "OUR SERVICES",
    title: "What we do.",
    highlight: "How we create value.",
    description:
      "Light Corporation combines strategic planning, architectural expertise, project coordination, and effective execution to deliver professional solutions across diverse project environments.",
  },
  {
    number: "02",
    eyebrow: "ARCHITECTURAL EXPERTISE",
    title: "Ideas shaped.",
    highlight: "Solutions designed.",
    description:
      "Our architectural expertise allows us to adapt to projects of varying scales and complexities, combining professional knowledge with practical project requirements.",
  },
  {
    number: "03",
    eyebrow: "PROJECT COORDINATION",
    title: "Plans connected.",
    highlight: "Projects delivered.",
    description:
      "We combine strategic planning, project coordination, and effective execution to move projects from direction and planning toward practical outcomes.",
  },
]

const backgroundImage =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"

const slideVariants = {
  enter: {
    opacity: 0,
    y: 35,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -35,
  },
}

const backgroundVariants = {
  enter: {
    opacity: 0,
    scale: 1.08,
  },
  center: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.03,
  },
}

function ServicesHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slide = slides[currentSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slides.length) % slides.length
    )
  }

  const scrollToServices = () => {
    document.getElementById("core-capabilities")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden text-white">
      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={backgroundImage}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 7,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
            }}
          />
        </AnimatePresence>

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Left-heavy gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />

        {/* Bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="relative min-h-[620px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.number}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex min-h-[520px] items-center"
            >
              <div className="max-w-5xl">
                {/* Eyebrow */}
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-white/50" />

                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {slide.title}

                  <br />

                  <span className="text-white/40">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  {slide.description}
                </p>

                {/* CTA */}
                <motion.button
                  type="button"
                  onClick={scrollToServices}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className="group mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white"
                >
                  <span>Explore our capabilities</span>

                  <FiArrowDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================
              BOTTOM CONTROLS
          ========================== */}

          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t border-white/15 pt-6">
            {/* Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      currentSlide === index
                        ? "w-12 bg-white"
                        : "w-6 bg-white/25 group-hover:bg-white/50"
                    }`}
                  />

                  <span
                    className={`text-[10px] tracking-[0.2em] transition-colors ${
                      currentSlide === index
                        ? "text-white"
                        : "text-white/30"
                    }`}
                  >
                    {item.number}
                  </span>
                </button>
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
              >
                <FiChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/60 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white hover:text-black"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Large background number */}
          <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none lg:block">
            <span className="text-[12rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.035]">
              {slide.number}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero