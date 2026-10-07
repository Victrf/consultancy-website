import { useEffect, useState } from "react"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

type ImageCarouselProps = {
  images: string[]
  autoPlay?: boolean
  interval?: number
}

const smoothEase = [0.22, 1, 0.36, 1] as const

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "8%" : "-8%",
    opacity: 0,
    scale: 1.04,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: {
        duration: 1.1,
        ease: smoothEase,
      },
      opacity: {
        duration: 0.8,
        ease: smoothEase,
      },
      scale: {
        duration: 1.2,
        ease: smoothEase,
      },
    },
  },

  exit: (direction: number) => ({
    x: direction > 0 ? "-8%" : "8%",
    opacity: 0,
    scale: 0.98,
    transition: {
      x: {
        duration: 0.9,
        ease: smoothEase,
      },
      opacity: {
        duration: 0.7,
        ease: smoothEase,
      },
      scale: {
        duration: 0.9,
        ease: smoothEase,
      },
    },
  }),
}

function ImageCarousel({
  images,
  autoPlay = true,
  interval = 5000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextSlide = () => {
    setDirection(1)

    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    )
  }

  const previousSlide = () => {
    setDirection(-1)

    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    )
  }

  const goToSlide = (index: number) => {
    if (index === currentIndex) return

    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const timer = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  if (!images.length) {
    return null
  }

  return (
    <div className="group relative h-full w-full overflow-hidden">
      {/* Images */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Light Corporation project ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag={images.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) {
              nextSlide()
            } else if (info.offset.x > 50) {
              previousSlide()
            }
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <motion.button
            type="button"
            onClick={previousSlide}
            aria-label="Previous image"
            whileHover={{
              scale: 1.08,
              x: -2,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="absolute left-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 sm:left-6"
          >
            <FiChevronLeft size={20} />
          </motion.button>

          <motion.button
            type="button"
            onClick={nextSlide}
            aria-label="Next image"
            whileHover={{
              scale: 1.08,
              x: 2,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="absolute right-4 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 sm:right-6"
          >
            <FiChevronRight size={20} />
          </motion.button>
        </>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2 sm:bottom-7 sm:right-7">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              className="group/indicator p-1"
            >
              <motion.span
                animate={{
                  width: currentIndex === index ? 28 : 7,
                  opacity: currentIndex === index ? 1 : 0.55,
                }}
                transition={{
                  duration: 0.4,
                  ease: smoothEase,
                }}
                className="block h-1.5 rounded-full bg-white"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageCarousel