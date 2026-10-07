import { motion } from "framer-motion"

function OurCommitment() {
  return (
    <section className="relative overflow-hidden bg-[#0b0f19] px-6 py-28 text-white sm:px-8 lg:px-12 lg:py-40">
      {/* Architectural background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-0 top-[28%] h-px w-full bg-white/[0.06]" />
        <div className="absolute left-0 bottom-[18%] h-px w-full bg-white/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Our Commitment
            </span>
          </div>

          <span className="text-xs tracking-[0.25em] text-white/30">
            01
          </span>
        </motion.div>

        {/* Main composition */}
        <div className="relative mt-24 min-h-[650px]">

          {/* Large circular architectural element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute right-[-8%] top-[-8%] hidden h-[560px] w-[560px] rounded-full border border-white/[0.08] lg:block"
          >
            <div className="absolute inset-8 rounded-full border border-white/[0.06]" />

            <div className="absolute inset-20 rounded-full border border-white/[0.05]" />

            <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom -translate-x-1/2 bg-white/[0.08]" />

            <div className="absolute left-0 top-1/2 h-px w-1/2 origin-right -translate-y-1/2 bg-white/[0.08]" />
          </motion.div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 max-w-5xl"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/35">
              Creating Value
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Every project
              <br />
              represents an
              <br />
              <span className="text-white/35">
                opportunity to create value.
              </span>
            </h2>
          </motion.div>

          {/* Commitment text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 mt-20 ml-auto max-w-2xl border-l border-white/20 pl-6 sm:pl-8 lg:mt-24"
          >
            <p className="text-base leading-8 text-white/60 sm:text-lg">
              At Light Corporation, we are committed to building lasting
              partnerships, delivering professional solutions, and contributing
              to projects that have a meaningful and sustainable impact.
            </p>
          </motion.div>

          {/* Bottom markers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-white/10 pt-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Light Corporation
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Building Ideas · Creating Value
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurCommitment