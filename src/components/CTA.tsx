import { motion, type Variants } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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

function CTA() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-neutral-950
        py-20
        text-white
        sm:py-24
        lg:py-32
      "
    >
      {/* Decorative elements */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          border
          border-white/10
          sm:h-96
          sm:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-44
          w-44
          rounded-full
          border
          border-white/10
          sm:h-56
          sm:w-56
        "
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="
            relative
            grid
            gap-12
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-20
          "
        >
          {/* Content */}
          <div className="max-w-4xl">
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-white" />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.22em]
                  text-white/50
                "
              >
                LET'S WORK TOGETHER
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="
                text-4xl
                font-medium
                leading-[1.02]
                tracking-[-0.045em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Let's create
              <span className="text-white/40"> lasting value.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-white/55
                sm:text-lg
                sm:leading-8
              "
            >
              Whether you are planning a new project, managing a complex
              development, or looking for strategic expertise, Light
              Corporation brings together the experience and multidisciplinary
              approach to move ideas forward.
            </motion.p>
          </div>

          {/* CTA button */}
          <motion.div
            variants={itemVariants}
            className="lg:pb-1"
          >
            <motion.a
              href="https://wa.me/919008477294"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 6,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                inline-flex
                w-full
                items-center
                justify-between
                gap-8
                rounded-full
                border
                border-white/20
                bg-white
                px-6
                py-4
                text-sm
                font-medium
                text-neutral-950
                transition-colors
                duration-300
                hover:bg-neutral-200
                sm:w-auto
                sm:min-w-[220px]
              "
            >
              <span>Start a conversation</span>

              <motion.span
                whileHover={{
                  rotate: 45,
                }}
                whileTap={{
                  rotate: 45,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-950
                  text-white
                "
              >
                <FiArrowUpRight size={17} />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-16
            border-t
            border-white/10
            pt-7
            sm:mt-20
            sm:pt-9
          "
        >
          <p
            className="
              max-w-3xl
              text-sm
              leading-7
              text-white/40
              sm:text-base
              sm:leading-8
            "
          >
            Professional expertise. Strategic vision. Social responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA