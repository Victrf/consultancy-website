import { useEffect, useState } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"

type CarouselSlide = {
  id: number | string
  type: "image" | "video"
  src: string
  title?: string
  description?: string
  label?: string
}

type CarouselProps = {
  slides: CarouselSlide[]
  autoPlay?: boolean
  interval?: number
}

const smoothEase = [0.22, 1, 0.36, 1] as const

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.98,
  }),
}

const mediaVariants: Variants = {
  initial: {
    scale: 1.08,
    opacity: 0.7,
  },

  animate: {
    scale: 1,
    opacity: 1,
  },

  exit: {
    scale: 1.03,
    opacity: 0,
  },
}

const contentContainerVariants: Variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },

  exit: {
    opacity: 0,
  },
}

const contentItemVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },

  exit: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.25,
    },
  },
}

function Carousel({
  slides,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const currentSlide = slides[currentIndex]

  const nextSlide = () => {
    setDirection(1)

    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )
  }

  const previousSlide = () => {
    setDirection(-1)

    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return

    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) {
      return
    }

    const timer = setInterval(() => {
      setDirection(1)

      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length])

  if (!slides.length || !currentSlide) {
    return null
  }

  return (
    <section
      id="home"
      className="w-full overflow-hidden"
    >
      <div className="w-full">
        {/* Carousel */}
        <div className="relative w-full overflow-hidden bg-black">

          {/* Slide viewport */}
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentSlide.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 180,
                    damping: 28,
                    mass: 0.8,
                  },

                  opacity: {
                    duration: 0.65,
                    ease: "easeInOut",
                  },

                  scale: {
                    duration: 0.9,
                    ease: smoothEase,
                  },
                }}
                drag={slides.length > 1 ? "x" : false}
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.7}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50

                  if (info.offset.x < -swipeThreshold) {
                    nextSlide()
                  }

                  if (info.offset.x > swipeThreshold) {
                    previousSlide()
                  }
                }}
                className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
              >
                {/* Media */}
                <motion.div
                  variants={mediaVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: 1.4,
                    ease: smoothEase,
                  }}
                  className="absolute inset-0"
                >
                  {currentSlide.type === "image" ? (
                    <img
                      src={currentSlide.src}
                      alt={currentSlide.title || "Carousel slide"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <video
                      key={currentSlide.src}
                      src={currentSlide.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  )}
                </motion.div>

                {/* Gradient overlay */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />

                {/* Content */}
                {(currentSlide.label ||
                  currentSlide.title ||
                  currentSlide.description) && (
                  <motion.div
                    variants={contentContainerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8 lg:p-12"
                  >
                    {/* Label */}
                    {currentSlide.label && (
                      <motion.span
                        variants={contentItemVariants}
                        className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] sm:text-sm"
                      >
                        {currentSlide.label}
                      </motion.span>
                    )}

                    {/* Title */}
                    {currentSlide.title && (
                      <motion.h2
                        variants={contentItemVariants}
                        className="max-w-2xl text-2xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
                      >
                        {currentSlide.title}
                      </motion.h2>
                    )}

                    {/* Description */}
                    {currentSlide.description && (
                      <motion.p
                        variants={contentItemVariants}
                        className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base"
                      >
                        {currentSlide.description}
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {/* Previous button */}
                {slides.length > 1 && (
                  <motion.button
                    type="button"
                    onClick={previousSlide}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm sm:left-5 sm:h-12 sm:w-12"
                    aria-label="Previous slide"
                  >
                    ←
                  </motion.button>
                )}

                {/* Next button */}
                {slides.length > 1 && (
                  <motion.button
                    type="button"
                    onClick={nextSlide}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur-sm sm:right-5 sm:h-12 sm:w-12"
                    aria-label="Next slide"
                  >
                    →
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            {slides.length > 1 && (
              <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 sm:bottom-6 sm:right-6">
                {slides.map((slide, index) => (
                  <motion.button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    animate={{
                      width: index === currentIndex ? 30 : 8,
                      opacity: index === currentIndex ? 1 : 0.55,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: smoothEase,
                    }}
                    className="h-2 rounded-full bg-white"
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel