import { motion } from "framer-motion"

function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-black/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
              Our Direction
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
            Where we are going.
            <br />
            <span className="text-black/30">
              How we get there.
            </span>
          </h2>
        </motion.div>

        {/* Timeline tree */}
        <div className="relative">

          {/* Main vertical line */}
          <div className="absolute left-5 top-0 h-full w-px bg-black/10 md:left-1/2 md:-translate-x-1/2" />

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mb-20 grid md:grid-cols-2 md:gap-16"
          >
            {/* Left content */}
            <div className="pl-16 text-left md:pr-16 md:pl-0 md:text-right">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                01
              </span>

              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-black">
                Vision
              </h3>

              <p className="mt-8 text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-black sm:text-3xl lg:text-4xl">
                To become a trusted international partner in architecture,
                project management, and development, delivering innovative
                solutions that create lasting value for our clients and
                communities.
              </p>
            </div>

            {/* Right side */}
            <div className="hidden md:block" />

            {/* Tree node */}
            <div className="absolute left-5 top-0 -translate-x-1/2 md:left-1/2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white">
                <div className="h-2.5 w-2.5 rounded-full bg-black" />
              </div>
            </div>
          </motion.div>

          {/* Branch connecting to Mission */}
          <div className="absolute left-5 top-[180px] hidden h-px w-[calc(50%-20px)] bg-black/10 md:left-1/2 md:block" />

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative grid md:grid-cols-2 md:gap-16"
          >
            {/* Left side */}
            <div className="hidden md:block" />

            {/* Right content */}
            <div className="pl-16 md:pl-16">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/35">
                02
              </span>

              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-black">
                Mission
              </h3>

              <p className="mt-8 text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-black sm:text-3xl lg:text-4xl">
                To deliver projects with excellence, integrity, innovation,
                and efficiency, while building long-term relationships with
                our clients and partners.
              </p>
            </div>

            {/* Tree node */}
            <div className="absolute left-5 top-0 -translate-x-1/2 md:left-1/2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white">
                <div className="h-2.5 w-2.5 rounded-full bg-black" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporting statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border-t border-black/10 pt-8 md:ml-[50%] md:pl-16"
        >
          <p className="max-w-2xl text-base leading-8 text-black/50 sm:text-lg">
            We aim to combine international standards with a strong
            understanding of local markets to deliver solutions that are both
            practical and impactful.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default VisionMission