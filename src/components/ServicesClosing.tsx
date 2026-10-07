import { motion } from "framer-motion"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"

function ServicesClosing() {
  return (
    <section
      id="services-closing"
      className="relative overflow-hidden bg-[#0b0f19] px-6 py-32 text-white sm:px-8 lg:px-12 lg:py-48"
    >
      {/* Architectural lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute right-[12%] top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Creating Value
            </span>
          </div>

          <h2 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
            Professional expertise.
            <br />

            <span className="text-white/30">
              Strategic vision.
            </span>

            <br />

            Lasting value.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-12 flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end"
        >

          <p className="max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            At Light Corporation, we combine professional expertise, strategic
            vision, and social responsibility to deliver projects that create
            lasting value for our clients, partners, and communities.
          </p>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-4 border-b border-white/25 pb-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white"
          >
            <span>Start a conversation</span>

            <FiArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </div>
    </section>
  )
}

export default ServicesClosing