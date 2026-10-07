import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

import expertise1 from "../assets/expertise-1.jpg"
import expertise2 from "../assets/expertise-2.jpg"
import expertise3 from "../assets/expertise-3.jpg"
import expertise4 from "../assets/expertise-4.jpg"

type MiniCarouselProps = {
  images: string[]
  index: number
  delay?: number
}

const slideVariants = {
  enter: {
    opacity: 0,
    x: 80,
    scale: 1.03,
  },

  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },

  exit: {
    opacity: 0,
    x: -80,
    scale: 0.98,
  },
}

function MiniCarousel({
  images,
  index,
  delay = 0,
}: MiniCarouselProps) {
  const [current, setCurrent] = useState(index % images.length)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5500 + delay)

    return () => window.clearTimeout(timer)
  }, [current, delay, images.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    )
  }

  return (
    <div className="relative h-[420px] w-full sm:h-[500px] md:h-[540px] lg:h-[620px]">
      {/* Angled image container */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath:
            "polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)",
        }}
      >
        <div className="absolute inset-[-2px] overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={current}
              src={images[current]}
              alt={`Carousel ${index + 1} image ${current + 1}`}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>

          <div className="pointer-events-none absolute inset-0 bg-black/15" />
        </div>
      </div>

      {/* Internal carousel controls */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7 sm:gap-3">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous image"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:h-10 sm:w-10"
        >
          <FiChevronLeft size={17} />
        </button>

        <div className="flex items-center gap-1">
          {images.map((_, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              onClick={() => setCurrent(imageIndex)}
              aria-label={`Go to image ${imageIndex + 1}`}
              className="p-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  current === imageIndex
                    ? "w-5 bg-white sm:w-6"
                    : "w-1.5 bg-white/45"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/25 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black sm:h-10 sm:w-10"
        >
          <FiChevronRight size={17} />
        </button>
      </div>
    </div>
  )
}

function TripleMiniCarousel() {
  const carouselOne = [
    expertise1,
    expertise2,
    expertise3,
  ]

  const carouselTwo = [
    expertise2,
    expertise3,
    expertise4,
  ]

  const carouselThree = [
    expertise3,
    expertise4,
    expertise1,
  ]

  /*
   * ---------------------------------------------------------
   * MOBILE OUTER CAROUSEL
   * ---------------------------------------------------------
   */

  const mobileCarousels = [
    {
      images: carouselOne,
      index: 0,
      delay: 0,
    },
    {
      images: carouselTwo,
      index: 1,
      delay: 900,
    },
    {
      images: carouselThree,
      index: 2,
      delay: 1800,
    },
  ]

  const [mobileCurrent, setMobileCurrent] = useState(0)

  const mobileNext = () => {
    setMobileCurrent(
      (prev) => (prev + 1) % mobileCarousels.length
    )
  }

  const mobilePrevious = () => {
    setMobileCurrent(
      (prev) =>
        (prev - 1 + mobileCarousels.length) %
        mobileCarousels.length
    )
  }

  /*
   * ---------------------------------------------------------
   * MOBILE AUTOPLAY
   * ---------------------------------------------------------
   */

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMobileCurrent(
        (prev) => (prev + 1) % mobileCarousels.length
      )
    }, 7000)

    return () => window.clearInterval(timer)
  }, [mobileCarousels.length])

  /*
   * ---------------------------------------------------------
   * SWIPE SUPPORT
   * ---------------------------------------------------------
   */

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    const swipeDistance = 60

    if (info.offset.x < -swipeDistance) {
      mobileNext()
    }

    if (info.offset.x > swipeDistance) {
      mobilePrevious()
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14 px-6 sm:mb-16 sm:px-8 lg:px-12"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-8 bg-black/30 sm:w-10" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              Our Work
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
            Ideas shaped through
            <br />
            <span className="text-black/30">
              experience and execution.
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            DESKTOP
            Three independent mini-carousels
            ===================================================== */}

        <div className="hidden md:flex md:items-stretch">
          {/* Carousel 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-1/3"
          >
            <MiniCarousel
              images={carouselOne}
              index={0}
              delay={0}
            />
          </motion.div>

          {/* Carousel 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-30 -mx-px w-1/3"
          >
            <MiniCarousel
              images={carouselTwo}
              index={1}
              delay={900}
            />
          </motion.div>

          {/* Carousel 3 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-1/3"
          >
            <MiniCarousel
              images={carouselThree}
              index={2}
              delay={1800}
            />
          </motion.div>
        </div>

        {/* =====================================================
            MOBILE
            One outer carousel containing the three panels
            ===================================================== */}

        <div className="relative md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `-${mobileCurrent * 100}%`,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.08}
              onDragEnd={handleDragEnd}
            >
              {mobileCarousels.map(
                (carousel, carouselIndex) => (
                  <div
                    key={carouselIndex}
                    className="w-full shrink-0"
                  >
                    <MiniCarousel
                      images={carousel.images}
                      index={carousel.index}
                      delay={carousel.delay}
                    />
                  </div>
                )
              )}
            </motion.div>
          </div>

          {/* Mobile outer carousel controls */}
          <div className="relative z-30 mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={mobilePrevious}
              aria-label="Previous panel"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FiChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {mobileCarousels.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMobileCurrent(index)}
                  aria-label={`Go to panel ${index + 1}`}
                  className="p-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      mobileCurrent === index
                        ? "w-8 bg-black"
                        : "w-1.5 bg-black/20"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={mobileNext}
              aria-label="Next panel"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TripleMiniCarousel