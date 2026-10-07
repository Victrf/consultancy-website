import { motion } from "framer-motion"
import { FiArrowUpRight, FiGlobe, FiMapPin } from "react-icons/fi"

function InternationalPerspective() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] px-6 py-28 text-white sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/45">
              Our Perspective
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
            Local understanding.
            <br />
            <span className="text-white/30">
              International perspective.
            </span>
          </h2>
        </motion.div>

        {/* Main split */}
        <div className="mt-24 grid lg:grid-cols-2">

          {/* Local */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/10 py-12 lg:border-r lg:pr-20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FiMapPin
                  size={20}
                  strokeWidth={1.4}
                  className="text-white/45"
                />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                  Local
                </span>
              </div>

              <span className="text-[10px] tracking-[0.3em] text-white/20">
                01
              </span>
            </div>

            <h3 className="mt-10 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Understanding
              <br />
              the environment.
            </h3>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
              We bring a strong understanding of local markets, people,
              environments, and project requirements to the work we undertake.
            </p>
          </motion.div>

          {/* International */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/10 py-12 lg:pl-20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <FiGlobe
                  size={20}
                  strokeWidth={1.4}
                  className="text-white/45"
                />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
                  International
                </span>
              </div>

              <span className="text-[10px] tracking-[0.3em] text-white/20">
                02
              </span>
            </div>

            <h3 className="mt-10 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Connecting
              <br />
              opportunities.
            </h3>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
              Our international perspective enables us to connect local
              opportunities with international expertise, resources, and
              relationships.
            </p>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-3xl text-xl leading-8 tracking-[-0.02em] text-white/60 sm:text-2xl">
              We work across different environments, cultures, and project
              requirements while maintaining a consistent commitment to
              professional standards.
            </p>

            <motion.div
              whileHover={{ x: 5, y: -5 }}
              className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40"
            >
              <span>Across borders</span>
              <FiArrowUpRight size={17} />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default InternationalPerspective