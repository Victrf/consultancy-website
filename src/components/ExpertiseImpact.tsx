import { motion } from "framer-motion"
import { FiArrowUpRight, FiCheck } from "react-icons/fi"
import ImageCarousel from "./ImageCarousel"

import expertiseImage1 from "../assets/expertise-1.jpg"
import expertiseImage2 from "../assets/expertise-2.jpg"
import expertiseImage3 from "../assets/expertise-3.jpg"
import expertiseImage4 from "../assets/expertise-4.jpg"

const smoothEase = [0.22, 1, 0.36, 1] as const

const expertiseImages = [
  expertiseImage1,
  expertiseImage2,
  expertiseImage3,
  expertiseImage4,
]

const backgroundImage =
  "https://images.unsplash.com/photo-1758518730037-a16581a040e8?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
}

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: smoothEase,
    },
  },
}

function ExpertiseImpact() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-0 text-white sm:px-10 lg:px-16"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Additional gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/45" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-7xl items-center gap-14 pt-16 sm:pt-20 lg:grid-cols-2 lg:gap-20 lg:pt-24"
      >
        {/* =================================================
            LEFT — CONTENT
        ================================================= */}
        <div>
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-white" />

            <span className="text-xs font-semibold tracking-[0.25em] text-white/60">
              OUR EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Architecture,
            <br />
            Project Management
            <br />
            <span className="text-white/55">&amp; Impact.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg"
          >
            Light Corporation is an architecture and project management firm
            and a subsidiary of Music Royalty, providing professional solutions
            across a diverse range of sectors and project environments.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-base leading-7 text-white/65"
          >
            Our multidisciplinary approach enables us to adapt to projects of
            varying scales and complexities, combining strategic planning,
            architectural expertise, project coordination, and effective
            execution.
          </motion.p>

          {/* =================================================
              EXPERTISE POINTS
          ================================================= */}
          <motion.div
            variants={itemVariants}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            {[
              "Strategic Planning",
              "Architectural Expertise",
              "Project Coordination",
              "Effective Execution",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-white/85"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                  <FiCheck size={14} />
                </span>

                {item}
              </div>
            ))}
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}
          <motion.div
            variants={itemVariants}
            className="mt-10"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
            >
              Explore Our Expertise

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-black/10">
                <FiArrowUpRight size={16} />
              </span>
            </a>
          </motion.div>
        </div>

        {/* =================================================
            RIGHT — IMAGE CAROUSEL
        ================================================= */}
        <motion.div
          variants={imageVariants}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/20 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <ImageCarousel
              images={expertiseImages}
              autoPlay={true}
              interval={5000}
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

            {/* Floating information card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.7,
                ease: smoothEase,
              }}
              className="absolute bottom-5 left-5 right-5 z-20 rounded-xl border border-white/20 bg-black/55 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-xs"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-white/60">
                LIGHT CORPORATION
              </p>

              <p className="mt-2 text-lg font-medium leading-snug text-white">
                Professional solutions designed around people, projects and
                lasting impact.
              </p>
            </motion.div>
          </div>

          {/* =================================================
              FLOATING NUMBER
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: smoothEase,
            }}
            className="absolute -bottom-6 -left-4 hidden rounded-xl border border-white/10 bg-black/70 px-6 py-5 text-white shadow-xl backdrop-blur-md sm:block lg:-left-8"
          >
            <span className="block text-3xl font-semibold">
              01
            </span>

            <span className="mt-1 block text-xs tracking-[0.15em] text-white/50">
              EXPERTISE
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ExpertiseImpact