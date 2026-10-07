import { motion, type Variants } from "framer-motion"
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const navigationLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#who-we-are",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
]

const sectorLinks = [
  "Education",
  "Healthcare",
  "Faith & Religious",
]

function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        bg-white
        text-neutral-950
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="
            border-t
            border-neutral-200
            py-16
            sm:py-20
            lg:py-24
          "
        >
          {/* Main footer content */}
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1fr]
              lg:gap-12
            "
          >
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <a
                href="#home"
                className="
                  inline-block
                  text-xl
                  font-semibold
                  tracking-[-0.03em]
                  text-neutral-950
                "
              >
                Light Corporation
              </a>

              <p
                className="
                  mt-5
                  max-w-sm
                  text-sm
                  leading-7
                  text-neutral-500
                "
              >
                Architecture and project management solutions built around
                strategic planning, professional expertise, and lasting
                impact.
              </p>

              {/* Social icons */}
              <div className="mt-7 flex items-center gap-3">
                <motion.a
                  href="#"
                  aria-label="LinkedIn"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:border-neutral-950
                    hover:bg-neutral-950
                    hover:text-white
                  "
                >
                  <FiLinkedin size={17} />
                </motion.a>

                <motion.a
                  href="#"
                  aria-label="X"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:border-neutral-950
                    hover:bg-neutral-950
                    hover:text-white
                  "
                >
                  <FiTwitter size={17} />
                </motion.a>

                <motion.a
                  href="#"
                  aria-label="Instagram"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:border-neutral-950
                    hover:bg-neutral-950
                    hover:text-white
                  "
                >
                  <FiInstagram size={17} />
                </motion.a>

                <motion.a
                  href="#"
                  aria-label="GitHub"
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:border-neutral-950
                    hover:bg-neutral-950
                    hover:text-white
                  "
                >
                  <FiGithub size={17} />
                </motion.a>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                NAVIGATION
              </p>

              <nav className="mt-6 flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{
                      x: 4,
                    }}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-2
                      text-sm
                      text-neutral-600
                      transition-colors
                      duration-300
                      hover:text-neutral-950
                    "
                  >
                    <span>{link.label}</span>

                    <FiArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        group-hover:opacity-100
                      "
                    />
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Sectors */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                SECTORS
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {sectorLinks.map((sector) => (
                  <span
                    key={sector}
                    className="
                      text-sm
                      text-neutral-600
                    "
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                GET IN TOUCH
              </p>

              <div className="mt-6">
                <p
                  className="
                    text-sm
                    leading-7
                    text-neutral-500
                  "
                >
                  Have a project or opportunity you would like to discuss?
                </p>

                <a
                  href="mailto:info@lightcorporation.com"
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-neutral-950
                    transition-colors
                    duration-300
                    hover:text-neutral-500
                  "
                >
                  info@lightcorporation.com

                  <FiArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>

            {/* Developer */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs
                  font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                DEVELOPED BY
              </p>

              <div className="mt-6">
                <p className="text-sm font-semibold text-neutral-950">
                  KAYYED DEV TECH
                </p>

                <p className="mt-2 text-sm text-neutral-500">
                  Full-Stack Software Developer
                </p>

                <a
                  href="mailto:lokkoprince32@gmail.com"
                  className="
                    mt-4
                    block
                    w-fit
                    text-sm
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:text-neutral-950
                  "
                >
                  lokkoprince32@gmail.com
                </a>

                <div className="mt-5 flex items-center gap-3">
                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/prince-emmanuel-lokko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="KAYYED DEV TECH on LinkedIn"
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      text-neutral-600
                      transition-colors
                      duration-300
                      hover:border-neutral-950
                      hover:bg-neutral-950
                      hover:text-white
                    "
                  >
                    <FiLinkedin size={17} />
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/Victrf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="KAYYED DEV TECH on GitHub"
                    whileHover={{
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      text-neutral-600
                      transition-colors
                      duration-300
                      hover:border-neutral-950
                      hover:bg-neutral-950
                      hover:text-white
                    "
                  >
                    <FiGithub size={17} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            variants={itemVariants}
            className="
              mt-14
              flex
              flex-col
              gap-4
              border-t
              border-neutral-200
              pt-7
              sm:mt-16
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-xs
                text-neutral-400
                sm:text-sm
              "
            >
              © {new Date().getFullYear()} Light Corporation. All rights
              reserved.
            </p>

            <motion.a
              href="#home"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                w-fit
                items-center
                gap-2
                text-xs
                font-medium
                text-neutral-500
                transition-colors
                duration-300
                hover:text-neutral-950
                sm:text-sm
              "
            >
              Back to top

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-neutral-200
                "
              >
                <FiArrowUpRight
                  size={14}
                  className="-rotate-45"
                />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer