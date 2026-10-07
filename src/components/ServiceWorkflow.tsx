import { motion } from "framer-motion"
import {
  FiCompass,
  FiLayers,
  FiGitBranch,
  FiActivity,
  FiArrowDown,
} from "react-icons/fi"

const workflow = [
  {
    number: "01",
    title: "Strategic Planning",
    icon: FiCompass,
  },
  {
    number: "02",
    title: "Architectural Expertise",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "Project Coordination",
    icon: FiGitBranch,
  },
  {
    number: "04",
    title: "Effective Execution",
    icon: FiActivity,
  },
]

function ServiceWorkflow() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] px-6 py-28 text-white sm:px-8 lg:px-12 lg:py-40">
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
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/45">
              How They Connect
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            From strategy
            <br />

            <span className="text-white/30">
              to execution.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            Our capabilities work together as an integrated approach,
            allowing projects to move from direction and planning toward
            coordinated execution.
          </p>
        </motion.div>

        {/* Workflow */}
        <div className="relative mt-24">

          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-white/10 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4 lg:gap-0">

            {workflow.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >

                  {/* Node */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[#0b0f19]">
                    <Icon
                      size={24}
                      strokeWidth={1.4}
                      className="text-white/70"
                    />
                  </div>

                  {/* Mobile connector */}
                  {index < workflow.length - 1 && (
                    <div className="absolute left-10 top-20 h-12 w-px bg-white/10 lg:hidden" />
                  )}

                  <div className="mt-8">

                    <span className="text-[10px] font-medium tracking-[0.3em] text-white/25">
                      {item.number}
                    </span>

                    <h3 className="mt-3 max-w-xs text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
                      {item.title}
                    </h3>

                  </div>

                  {index < workflow.length - 1 && (
                    <FiArrowDown
                      size={16}
                      className="absolute bottom-[-30px] left-1/2 text-white/20 lg:hidden"
                    />
                  )}

                </motion.div>
              )
            })}

          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <p className="max-w-3xl text-xl leading-8 tracking-[-0.02em] text-white/55 sm:text-2xl">
            A multidisciplinary approach allows us to adapt to projects of
            varying scales and complexities.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default ServiceWorkflow