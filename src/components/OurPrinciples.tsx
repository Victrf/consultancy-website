import { motion } from "framer-motion"

const principles = [
  {
    number: "01",
    title: "Versatility",
    description:
      "The ability to operate across multiple sectors and project environments.",
  },
  {
    number: "02",
    title: "Professional Excellence",
    description:
      "A commitment to quality, precision, and high professional standards.",
  },
  {
    number: "03",
    title: "Strategic Approach",
    description:
      "We combine technical expertise with strategic thinking to deliver effective solutions.",
  },
  {
    number: "04",
    title: "International Perspective",
    description:
      "Our experience across borders enables us to connect local opportunities with international expertise and resources.",
  },
  {
    number: "05",
    title: "Social Responsibility",
    description:
      "We are committed to creating meaningful opportunities and contributing to sustainable development.",
  },
]

function OurPrinciples() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-black/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
              Our Principles
            </span>
          </div>

          <h2 className="max-w-5xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            The principles
            <br />
            <span className="text-black/30">
              behind our work.
            </span>
          </h2>
        </motion.div>

        {/* Principles */}
        <div className="mt-24 border-t border-black/10">

          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid border-b border-black/10 py-10 md:grid-cols-[100px_1fr_1.2fr] md:items-center md:gap-12 md:py-14"
            >

              {/* Number */}
              <span className="text-xs font-medium tracking-[0.25em] text-black/30 transition-colors duration-300 group-hover:text-black">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em] text-black transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl md:mt-0 lg:text-5xl">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-8 text-black/45 md:mt-0 sm:text-lg">
                {principle.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default OurPrinciples