
import { motion, type Variants } from "framer-motion"
import { Link } from "react-router-dom"
import type { IconType } from "react-icons"
import {
  FiArrowUpRight,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi"

// Company logo
import logo from "../assets/logo.png"

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

// Navigation matches the main Navbar routes
const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
]

const sectorLinks = [
  "Education",
  "Healthcare",
  "Faith & Religious",
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
  {
    label: "X",
    href: "#",
    icon: FiTwitter,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FiInstagram,
  },
  {
    label: "GitHub",
    href: "#",
    icon: FiGithub,
  },
]

// Updated company contact email
const EMAIL = "admin@lightcorporations.com"

const developerSocialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/prince-emmanuel-lokko/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Victrf",
    icon: FiGithub,
  },
]

/* ---------------------------------------------------------
   Social Icon Component
--------------------------------------------------------- */

type SocialLinkItem = {
  label: string
  href: string
  icon: IconType
}

type SocialIconProps = {
  item: SocialLinkItem
  size?: number
}

function SocialIcon({ item, size = 17 }: SocialIconProps) {
  const Icon = item.icon

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={
        item.href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      aria-label={item.label}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.94 }}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full border border-neutral-200
        text-neutral-600
        transition-colors duration-300
        hover:border-neutral-950
        hover:bg-neutral-950 hover:text-white
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-black
      "
    >
      <Icon size={size} />
    </motion.a>
  )
}

/* ---------------------------------------------------------
   Footer
--------------------------------------------------------- */

function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-white text-neutral-950"
    >
      {/* Subtle top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-neutral-950 via-amber-400 to-neutral-950" />

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
            border-b border-neutral-200
            py-16 sm:py-20 lg:py-24
          "
        >
          {/* =====================================================
              MAIN FOOTER GRID
          ===================================================== */}
          <div
            className="
              grid gap-14
              sm:grid-cols-2
              lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr_1fr]
              lg:gap-12
            "
          >
            {/* =====================================================
                BRAND SECTION
            ===================================================== */}
            <motion.div variants={itemVariants}>
              {/* Logo + Company Name */}
              <Link
                to="/"
                aria-label="Light Corporation Home"
                className="
                  group inline-flex items-center
                  gap-2 rounded-md
                  focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-black
                "
              >
                <img
                  src={logo}
                  alt="Light Corporation logo"
                  className="
                    h-20 w-auto max-w-[155px]
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />

                <span
                  className="
                    max-w-[150px]
                    text-lg font-semibold
                    leading-tight tracking-tight
                    text-neutral-950
                    sm:text-xl
                  "
                >
                  Light Corporation
                </span>
              </Link>

              {/* Brand Description */}
              <p
                className="
                  mt-6 max-w-sm
                  text-sm leading-7
                  text-neutral-500
                "
              >
                Architecture and project management solutions
                built around strategic planning, professional
                expertise, and lasting impact.
              </p>

              {/* Company Identity */}
              <div className="mt-6 border-l-2 border-amber-400 pl-4">
                <p
                  className="
                    text-xs font-semibold
                    uppercase tracking-[0.16em]
                    text-neutral-800
                  "
                >
                  Architecture &amp; Project Management
                </p>

                <p
                  className="
                    mt-2 text-xs leading-6
                    text-neutral-500
                  "
                >
                  A subsidiary of Music Royalty.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-7 flex items-center gap-3">
                {socialLinks.map((item) => (
                  <SocialIcon
                    key={item.label}
                    item={item}
                  />
                ))}
              </div>
            </motion.div>

            {/* =====================================================
                NAVIGATION
            ===================================================== */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                NAVIGATION
              </p>

              <nav
                aria-label="Footer navigation"
                className="mt-6 flex flex-col gap-4"
              >
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ x: 4 }}
                    className="w-fit"
                  >
                    <Link
                      to={link.to}
                      className="
                        group flex items-center gap-2
                        text-sm text-neutral-600
                        transition-colors duration-300
                        hover:text-neutral-950
                      "
                    >
                      <span>{link.label}</span>

                      <FiArrowUpRight
                        size={13}
                        className="
                          opacity-0
                          transition-all duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:opacity-100
                        "
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>

            {/* =====================================================
                SECTORS
            ===================================================== */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs font-semibold
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
                      w-fit text-sm
                      text-neutral-600
                      transition-colors duration-300
                      hover:text-neutral-950
                    "
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* =====================================================
                CONTACT
            ===================================================== */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                GET IN TOUCH
              </p>

              <div className="mt-6">
                <p
                  className="
                    text-sm leading-7
                    text-neutral-500
                  "
                >
                  Have a project or opportunity you would like
                  to discuss?
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="
                    mt-4 inline-flex items-center gap-2
                    break-all text-sm font-medium
                    text-neutral-950
                    transition-colors duration-300
                    hover:text-amber-600
                  "
                >
                  {EMAIL}

                  <FiArrowUpRight
                    size={15}
                    className="shrink-0"
                  />
                </a>
              </div>

              {/* Contact CTA */}
              <Link
                to="/contact"
                className="
                  mt-7 inline-flex items-center gap-2
                  rounded-full border border-neutral-200
                  px-5 py-3 text-xs font-semibold
                  text-neutral-800
                  transition-all duration-300
                  hover:border-neutral-950
                  hover:bg-neutral-950 hover:text-white
                "
              >
                Start a Conversation
                <FiArrowUpRight size={14} />
              </Link>
            </motion.div>

            {/* =====================================================
                DEVELOPER
            ===================================================== */}
            <motion.div variants={itemVariants}>
              <p
                className="
                  text-xs font-semibold
                  tracking-[0.2em]
                  text-neutral-400
                "
              >
                DEVELOPED BY
              </p>

              <div className="mt-6">
                <p
                  className="
                    text-sm font-semibold
                    tracking-wide text-neutral-950
                  "
                >
                  KAYYED DEV TECH
                </p>

                <p
                  className="
                    mt-2 text-sm
                    text-neutral-500
                  "
                >
                  Full-Stack Software Developer
                </p>

                <a
                  href="mailto:lokkoprince32@gmail.com"
                  className="
                    mt-4 block w-fit
                    break-all text-sm
                    text-neutral-600
                    transition-colors duration-300
                    hover:text-neutral-950
                  "
                >
                  lokkoprince32@gmail.com
                </a>

                {/* Developer Social Links */}
                <div className="mt-5 flex items-center gap-3">
                  {developerSocialLinks.map((item) => (
                    <SocialIcon
                      key={item.label}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}
          <motion.div
            variants={itemVariants}
            className="
              mt-14 flex flex-col gap-5
              border-t border-neutral-200 pt-7
              sm:mt-16
              sm:flex-row sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs text-neutral-400
                  sm:text-sm
                "
              >
                © {new Date().getFullYear()} Light Corporation.
                All rights reserved.
              </p>

              <p
                className="
                  mt-2 text-[11px]
                  text-neutral-400
                "
              >
                Architecture · Project Management · Professional Excellence
              </p>
            </div>

            {/* Back to Top */}
            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex w-fit items-center gap-3
                text-xs font-medium
                text-neutral-500
                transition-colors duration-300
                hover:text-neutral-950
                sm:text-sm
              "
            >
              Back to top

              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full border border-neutral-200
                  transition-all duration-300
                  hover:border-neutral-950
                  hover:bg-neutral-950 hover:text-white
                "
              >
                <FiArrowUpRight
                  size={15}
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
