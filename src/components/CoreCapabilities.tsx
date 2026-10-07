import { motion } from "framer-motion"
import {
  FiCompass,
  FiLayers,
  FiGitBranch,
  FiActivity,
  FiArrowUpRight,
} from "react-icons/fi"

const capabilities = [
  {
    number: "01",
    title: "Strategic Planning",
    description:
      "Strategic planning that helps define project direction, objectives, requirements, and an effective path toward delivery.",
    icon: FiCompass,
  },
  {
    number: "02",
    title: "Architectural Expertise",
    description:
      "Architectural expertise applied to projects of varying scales and complexities, combining professional knowledge with practical project requirements.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Project Coordination",
    description:
      "Coordinating the different requirements, people, and activities involved in moving projects from planning toward execution.",
    icon: FiGitBranch,
  },
  {
    number: "04",
    title: "Effective Execution",
    description:
      "Turning plans and strategies into practical outcomes through disciplined and effective project execution.",
    icon: FiActivity,
  },
]

function CoreCapabilities() {
  return (
    <section
      id="core-capabilities"
      className="relative overflow-hidden bg-white px-6 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-black/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            Four disciplines.
            <br />
            <span className="text-black/30">
              One integrated approach.
            </span>
          </h2>
        </motion.div>

        {/* Capabilities */}
        <div className="mt-24 border-t border-black/10">

          {capabilities.map((capability, index) => {
            const Icon = capability.icon

            return (
              <motion.div
                key={capability.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-b border-black/10"
              >
                <div className="relative grid gap-8 py-12 transition-colors duration-500 group-hover:bg-black/[0.025] sm:py-14 md:grid-cols-[90px_1fr_1.1fr_50px] md:items-center md:gap-10 lg:py-16">

                  {/* Number */}
                  <div className="self-start md:self-center">
                    <span className="text-xs font-medium tracking-[0.3em] text-black/30 transition-colors duration-500 group-hover:text-black">
                      {capability.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="relative">

                    <div className="mb-5 flex items-center gap-3 md:hidden">
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-black/40"
                      />

                      <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-black/30">
                        Capability
                      </span>
                    </div>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] text-black transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:text-5xl">
                      {capability.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-xl text-base leading-8 text-black/45 sm:text-lg">
                    {capability.description}
                  </p>

                  {/* Icon / Arrow */}
                  <div className="flex items-center justify-start md:justify-end">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <FiArrowUpRight
                        size={18}
                        className="transition-transform duration-500 group-hover:rotate-0"
                      />
                    </div>

                  </div>

                  {/* Hover line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 h-px w-full origin-left bg-black"
                  />

                </div>
              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default CoreCapabilities