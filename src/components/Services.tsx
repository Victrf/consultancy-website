import { motion, type Variants } from "framer-motion"
import {
  FiArrowUpRight,
  FiCompass,
  FiLayers,
  FiMap,
  FiTarget,
} from "react-icons/fi"
import type { IconType } from "react-icons"

type Service = {
  number: string
  title: string
  description: string
  icon: IconType
}

const services: Service[] = [
  {
    number: "01",
    title: "Strategic Planning",
    description:
      "Strategic planning that helps define project direction, objectives, priorities, and the path toward effective execution.",
    icon: FiTarget,
  },
  {
    number: "02",
    title: "Architectural Expertise",
    description:
      "Architectural expertise applied across projects of varying scales and complexities, adapting solutions to the requirements of each environment.",
    icon: FiCompass,
  },
  {
    number: "03",
    title: "Project Coordination",
    description:
      "Coordinating the different elements of a project through a multidisciplinary approach that connects planning, expertise, and execution.",
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Effective Execution",
    description:
      "Turning strategic plans and professional expertise into coordinated execution that creates lasting value for clients, partners, and communities.",
    icon: FiMap,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
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

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="
            mb-14
            flex
            flex-col
            gap-8
            lg:mb-20
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <motion.div
              variants={itemVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-neutral-900" />

              <span className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                WHAT WE DO
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
              From strategy to
              <span className="text-neutral-400"> execution.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="
              max-w-md
              text-base
              leading-7
              text-neutral-500
              sm:text-lg
              sm:leading-8
            "
          >
            Our multidisciplinary approach combines strategic planning,
            architectural expertise, project coordination, and effective
            execution.
          </motion.p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="border-t border-neutral-200"
        >
          {services.map((service) => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.number}
                variants={itemVariants}
                whileTap={{ x: 6 }}
                className="
                  group
                  relative
                  grid
                  gap-6
                  border-b
                  border-neutral-200
                  py-8
                  transition-colors
                  duration-500
                  sm:py-10
                  lg:grid-cols-[90px_1fr_1fr_auto]
                  lg:items-center
                  lg:gap-10
                  lg:py-12
                "
              >
                {/* Number */}
                <span
                  className="
                    text-sm
                    font-medium
                    tracking-wider
                    text-neutral-400
                    transition-colors
                    duration-500
                    group-hover:text-neutral-900
                    group-active:text-neutral-900
                  "
                >
                  {service.number}
                </span>

                {/* Title */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.05,
                    }}
                    whileTap={{
                      rotate: 8,
                      scale: 1.05,
                    }}
                    transition={{ duration: 0.3 }}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-neutral-100
                      text-neutral-800
                      transition-all
                      duration-500
                      group-hover:bg-neutral-950
                      group-hover:text-white
                      group-active:bg-neutral-950
                      group-active:text-white
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </motion.div>

                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-tight
                      text-neutral-950
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-active:translate-x-1
                      sm:text-3xl
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="
                    max-w-xl
                    text-sm
                    leading-6
                    text-neutral-500
                    lg:text-[15px]
                  "
                >
                  {service.description}
                </p>

                {/* Desktop Arrow */}
                <motion.div
                  whileHover={{ rotate: 45 }}
                  whileTap={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                  className="
                    hidden
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-700
                    transition-all
                    duration-500
                    group-hover:border-neutral-950
                    group-hover:bg-neutral-950
                    group-hover:text-white
                    group-active:border-neutral-950
                    group-active:bg-neutral-950
                    group-active:text-white
                    lg:flex
                  "
                >
                  <FiArrowUpRight size={19} />
                </motion.div>

                {/* Mobile arrow */}
                <div className="flex lg:hidden">
                  <motion.div
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-neutral-500
                      transition-colors
                      duration-300
                      group-active:text-neutral-950
                    "
                  >
                    Explore
                    <FiArrowUpRight size={15} />
                  </motion.div>
                </div>

                {/* Hover / Active line */}
                <motion.div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-full
                    origin-left
                    scale-x-0
                    bg-neutral-950
                    transition-transform
                    duration-700
                    group-hover:scale-x-100
                    group-active:scale-x-100
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

export default Services