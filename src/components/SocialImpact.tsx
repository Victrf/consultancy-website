import { motion, type Variants } from "framer-motion"
import {
  FiArrowUpRight,
  FiGlobe,
  FiUsers,
} from "react-icons/fi"

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
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SocialImpact() {
  return (
    <section
      id="social-impact"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-neutral-950
        sm:py-24
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="
            grid
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* Left side */}
          <div>
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-neutral-900" />

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.22em]
                  text-neutral-500
                "
              >
                SOCIAL IMPACT
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="
                max-w-xl
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Creating opportunities
              <span className="text-neutral-400">
                {" "}
                beyond projects.
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="
                mt-7
                max-w-lg
                text-base
                leading-7
                text-neutral-500
                sm:text-lg
                sm:leading-8
              "
            >
              Beyond our core professional activities, Light Corporation is
              committed to social impact and human capital development.
            </motion.p>
          </div>

          {/* Right side */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-neutral-200
                bg-neutral-50
                p-7
                sm:p-9
                lg:p-10
              "
            >
              {/* Decorative circles */}
              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  border
                  border-neutral-200
                "
              />

              <div
                className="
                  absolute
                  -right-8
                  -top-8
                  h-24
                  w-24
                  rounded-full
                  border
                  border-neutral-200
                "
              />

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 1.05,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
                className="
                  relative
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-neutral-950
                  text-white
                "
              >
                <FiUsers
                  size={25}
                  strokeWidth={1.7}
                />
              </motion.div>

              {/* Main message */}
              <h3
                className="
                  relative
                  mt-10
                  max-w-2xl
                  text-2xl
                  font-medium
                  leading-tight
                  tracking-tight
                  text-neutral-950
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Supporting young Africans in accessing educational
                opportunities abroad.
              </h3>

              <p
                className="
                  relative
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-neutral-500
                  sm:text-base
                  sm:leading-8
                "
              >
                Through our initiatives, we have supported hundreds of young
                Africans in accessing educational opportunities abroad,
                helping them develop the knowledge, skills, and international
                exposure necessary to contribute meaningfully to their
                communities and shape a brighter future.
              </p>

              {/* Impact indicators */}
              <div
                className="
                  relative
                  mt-10
                  grid
                  gap-4
                  border-t
                  border-neutral-200
                  pt-7
                  sm:grid-cols-2
                "
              >
                {/* People */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-neutral-200
                      text-neutral-900
                    "
                  >
                    <FiUsers size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-950">
                      Hundreds supported
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-neutral-500
                      "
                    >
                      Young Africans accessing educational opportunities.
                    </p>
                  </div>
                </div>

                {/* International */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-neutral-200
                      text-neutral-900
                    "
                  >
                    <FiGlobe size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-950">
                      International exposure
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-neutral-500
                      "
                    >
                      Knowledge and skills developed through global
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.05,
                }}
                whileTap={{
                  rotate: 45,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="
                  absolute
                  bottom-7
                  right-7
                  hidden
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                  text-neutral-700
                  transition-all
                  duration-500
                  hover:border-neutral-950
                  hover:bg-neutral-950
                  hover:text-white
                  sm:flex
                  lg:bottom-10
                  lg:right-10
                "
              >
                <FiArrowUpRight size={18} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
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
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            border-t
            border-neutral-200
            pt-8
            sm:mt-20
            sm:pt-10
          "
        >
          <p
            className="
              max-w-4xl
              text-lg
              leading-8
              text-neutral-500
              sm:text-xl
              sm:leading-9
            "
          >
            At Light Corporation, we combine{" "}
            <span className="text-neutral-950">
              professional expertise, strategic vision, and social
              responsibility
            </span>{" "}
            to deliver projects that create lasting value for our clients,
            partners, and communities.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialImpact