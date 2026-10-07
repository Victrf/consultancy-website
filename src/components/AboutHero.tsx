import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiArrowDown, FiArrowRight } from "react-icons/fi"

const slides = [
  {
    number: "01",
    eyebrow: "ABOUT LIGHT CORPORATION",
    title: "Building Ideas.",
    highlight: "Creating Value.",
    ending: "Shaping the Future.",
    description:
      "Light Corporation is an architecture and project management firm and a subsidiary of Music Royalty, delivering integrated solutions across architecture, construction, project development, and strategic project management.",
  },
  {
    number: "02",
    eyebrow: "OUR EXPERTISE",
    title: "Architecture.",
    highlight: "Project Management.",
    ending: "Strategic Development.",
    description:
      "Our multidisciplinary approach allows us to work across diverse sectors and adapt to projects of varying scale and complexity, from concept development and architectural planning to coordination, execution, and strategic management.",
  },
  {
    number: "03",
    eyebrow: "OUR IMPACT",
    title: "Professional Expertise.",
    highlight: "Strategic Vision.",
    ending: "Lasting Impact.",
    description:
      "We combine professional expertise, strategic thinking, and social responsibility to deliver solutions that create lasting value for our clients, partners, and communities.",
  },
]

const backgroundImages = [
  "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJvdXR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFib3V0fGVufDB8fDB8fHww",
]

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

function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slide = slides[currentSlide]
  const backgroundImage = backgroundImages[currentSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const scrollToWhoWeAre = () => {
    document.getElementById("about-who-we-are")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden">
      {/* =====================================================
          BACKGROUND IMAGE CAROUSEL
      ===================================================== */}
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
        <div className="absolute inset-0 bg-black/55" />

        {/* Left-side readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

        {/* Bottom readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="relative min-h-[620px]">

          {/* Main content */}
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
              className="max-w-5xl"
            >
              {/* Eyebrow */}
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-white/50" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/65">
                  {slide.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {slide.title}
                <br />

                <span className="text-white/60">
                  {slide.highlight}
                </span>

                <br />

                {slide.ending}
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                {slide.description}
              </p>

              {/* CTA */}
              <motion.button
                type="button"
                onClick={scrollToWhoWeAre}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.97 }}
                className="group mt-10 inline-flex items-center gap-4 border-b border-white/35 pb-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white"
              >
                <span>Discover who we are</span>

                <FiArrowDown
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* =================================================
              SLIDE CONTROLS
          ================================================= */}
          <div className="absolute bottom-0 left-0 flex w-full items-end justify-between border-t border-white/15 pt-5">

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => goToSlide(index)}
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
                        : "text-white/35"
                    }`}
                  >
                    {item.number}
                  </span>
                </button>
              ))}
            </div>

            {/* Next */}
            <motion.button
              type="button"
              onClick={goToNext}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45 transition-colors hover:text-white"
            >
              Next

              <FiArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/* =====================================================
          SLIDE NUMBER
      ===================================================== */}
      <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 select-none lg:block">
        <span className="text-[9rem] font-semibold leading-none text-white/[0.035]">
          {slide.number}
        </span>
      </div>
    </section>
  )
}

export default AboutHero