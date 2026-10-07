import { motion } from "framer-motion"
import {
  FiCompass,
  FiLayers,
  FiUsers,
  FiActivity,
  FiCheck,
} from "react-icons/fi"

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project's objectives, environment, requirements, and intended outcomes.",
    icon: FiCompass,
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We develop a structured approach that aligns planning, design, resources, and execution.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "We bring the relevant people, expertise, and project requirements together.",
    icon: FiUsers,
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We translate strategy into practical implementation with attention to quality and efficiency.",
    icon: FiActivity,
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We focus on outcomes that create lasting value for clients and communities.",
    icon: FiCheck,
  },
]

const backgroundImage =
  "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWJvdXR8ZW58MHx8MHx8fDA%3D"

function OurApproach() {
  return (
    <section className="relative overflow-hidden px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Directional gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/55" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADING
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-white/40" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/55">
              Our Approach
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            From understanding
            <br />
            <span className="text-white/40">
              to meaningful delivery.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Every project requires more than execution. Our approach brings
            together understanding, strategy, coordination, and disciplined
            delivery to create meaningful outcomes.
          </p>
        </motion.div>

        {/* =================================================
            PROCESS
        ================================================= */}
        <div className="relative mt-24">

          {/* Connecting line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-white/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-20 md:space-y-28">

            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: isEven ? 60 : -60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid md:grid-cols-2 md:gap-16"
                >

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div
                    className={`pl-16 ${
                      isEven
                        ? "md:col-start-2 md:pl-16"
                        : "md:col-start-1 md:pr-16 md:text-right"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 ${
                        !isEven
                          ? "md:justify-end"
                          : ""
                      }`}
                    >
                      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
                        {step.number}
                      </span>

                      <span className="hidden h-px w-8 bg-white/20 md:block" />
                    </div>

                    <div
                      className={`mt-4 flex items-center gap-3 ${
                        !isEven
                          ? "md:justify-end"
                          : ""
                      }`}
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-white/55"
                      />

                      <h3 className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-5 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* =================================================
                      TIMELINE NODE
                  ================================================= */}
                  <div className="absolute left-[19px] top-0 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                  </div>

                </motion.div>
              )
            })}

          </div>
        </div>

      </div>
    </section>
  )
}

export default OurApproach