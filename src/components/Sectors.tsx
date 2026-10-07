import { motion, type Variants } from "framer-motion"
import {
  FiArrowUpRight,
  FiBookOpen,
  FiHeart,
  FiUsers,
} from "react-icons/fi"
import type { IconType } from "react-icons"

import educationImage from "../assets/sector-education.jpg"
import healthcareImage from "../assets/sector-healthcare.jpg"
import faithImage from "../assets/sector-faith.jpg"

type Sector = {
  number: string
  title: string
  description: string
  icon: IconType
  image: string
}

const sectors: Sector[] = [
  {
    number: "01",
    title: "Education",
    description:
      "Our experience includes projects involving educational institutions such as Jain University, Karnataka College, and other educational organizations.",
    icon: FiBookOpen,
    image: educationImage,
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Our portfolio includes projects and collaborations with established healthcare institutions such as Apollo Hospitals and Aster Hospitals.",
    icon: FiHeart,
    image: healthcareImage,
  },
  {
    number: "03",
    title: "Faith & Religious",
    description:
      "We have supported projects and initiatives within the faith and religious sector involving prominent figures and organizations.",
    icon: FiUsers,
    image: faithImage,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Sectors() {
  return (
    <section
      id="sectors"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="mb-14 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-neutral-900" />

            <span className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
              OUR SECTORS
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="
              text-4xl
              font-medium
              leading-[1.05]
              tracking-[-0.04em]
              text-neutral-950
              sm:text-5xl
              lg:text-6xl
            "
          >
            Experience across diverse
            <span className="text-neutral-400">
              {" "}
              project environments.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-neutral-500
              sm:text-lg
              sm:leading-8
            "
          >
            Our multidisciplinary approach enables us to adapt to projects of
            varying scales and complexities across several key sectors.
          </motion.p>
        </motion.div>

        {/* Sector cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-3"
        >
          {sectors.map((sector) => {
            const Icon = sector.icon

            return (
              <motion.article
                key={sector.number}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-[360px]
                  overflow-hidden
                  rounded-2xl
                  bg-neutral-900
                  sm:min-h-[400px]
                "
              >
                {/* Background image */}
                <motion.img
                  src={sector.image}
                  alt={`${sector.title} sector`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />

                {/* Dark overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-black/45
                    transition-colors
                    duration-500
                    group-hover:bg-black/60
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-black/10
                  "
                />

                {/* Number + arrow */}
                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-6
                    flex
                    items-start
                    justify-between
                    sm:left-7
                    sm:right-7
                    sm:top-7
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      tracking-wider
                      text-white/70
                    "
                  >
                    {sector.number}
                  </span>

                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.3 }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/20
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-500
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-neutral-950
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <FiArrowUpRight size={18} />
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="
                    absolute
                    left-6
                    top-24
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    sm:left-7
                    sm:top-28
                    sm:h-12
                    sm:w-12
                  "
                >
                  <Icon size={21} strokeWidth={1.7} />
                </motion.div>

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    right-6
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {sector.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-md
                      text-sm
                      leading-6
                      text-white/70
                      sm:text-[15px]
                    "
                  >
                    {sector.description}
                  </p>
                </div>

                {/* Animated bottom line */}
                <motion.div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-white
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Sectors