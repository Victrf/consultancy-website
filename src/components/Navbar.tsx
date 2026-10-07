import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FiArrowRight } from "react-icons/fi"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
  },
]

const languages = ["EN", "FR"]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState("EN")

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage)
    setLanguageOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 w-full bg-white"
    >
      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LEFT — Logo + Company Name + Language */}
        <div className="flex items-center">
          {/* Logo + Name */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
              C
            </div>

            <span className="text-lg font-semibold">
              Light Corporation
            </span>
          </Link>

          {/* Language */}
          <div className="relative ml-8">
            <button
              type="button"
              onClick={() => setLanguageOpen((prev) => !prev)}
              className="flex items-center gap-2 text-sm font-medium"
              aria-expanded={languageOpen}
              aria-haspopup="true"
            >
              {language}

              <motion.span
                animate={{
                  rotate: languageOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                ↓
              </motion.span>
            </button>

            <AnimatePresence>
              {languageOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute left-0 top-8 min-w-20 rounded-lg border bg-white p-1 shadow-lg"
                >
                  {languages.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleLanguageChange(item)}
                      className="block w-full rounded-md px-3 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================
            CENTER — SOCIAL MEDIA
        ========================================================= */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {socialLinks.map((social, index) => {
            const Icon = social.icon

            return (
              <motion.a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -3,
                  scale: 1.1,
                }}
                className="text-black transition-colors hover:text-gray-500"
              >
                <Icon size={18} />
              </motion.a>
            )
          })}
        </div>

        {/* =========================================================
            RIGHT — DESKTOP NAVIGATION
        ========================================================= */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -2,
              }}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `group relative block py-2 text-sm font-medium ${
                    isActive
                      ? "text-black"
                      : "text-black/70"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="transition-colors duration-300 group-hover:text-black">
                      {link.name}
                    </span>

                    {/* Active page indicator */}
                    <motion.span
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-0 left-0 h-[2px] bg-black"
                    />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            MOBILE MENU BUTTON
        ========================================================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-[70] flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex w-6 flex-col gap-1.5">
            <motion.span
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-full bg-black"
            />

            <motion.span
              animate={{
                opacity: menuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-full bg-black"
            />

            <motion.span
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="block h-0.5 w-full bg-black"
            />
          </div>
        </button>
      </div>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
            />

            {/* =====================================================
                MOBILE SIDE DRAWER
            ===================================================== */}
            <motion.div
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed left-0 top-0 z-50 flex h-screen w-[82%] max-w-sm flex-col overflow-y-auto bg-white/65 px-6 pb-8 pt-8 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              {/* =====================================================
                  MOBILE BRAND
              ===================================================== */}
              <div className="mb-10">
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">
                    C
                  </div>

                  <span className="text-lg font-semibold text-black">
                    Light Corporation
                  </span>
                </Link>

                <div className="mt-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                    Navigation
                  </p>

                  <div className="mt-3 h-px w-10 bg-black/30" />
                </div>
              </div>

              {/* =====================================================
                  NAVIGATION LINKS
              ===================================================== */}
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `group relative flex items-center justify-between py-3.5 text-xl font-normal tracking-tight transition-colors duration-300 ${
                          isActive
                            ? "text-black"
                            : "text-black/70"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="transition-transform duration-300 group-hover:translate-x-2">
                            {link.name}
                          </span>

                          <FiArrowRight
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "translate-x-1 opacity-100"
                                : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                            }`}
                          />

                          {/* Active page indicator */}
                          <motion.span
                            initial={false}
                            animate={{
                              width: isActive ? "32px" : "0px",
                              opacity: isActive ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute -left-6 top-1/2 h-[2px] -translate-y-1/2 bg-black"
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* =====================================================
                  SOCIAL LINKS
              ===================================================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                  duration: 0.4,
                }}
                className="mt-5 flex items-center gap-6"
              >
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      className="text-black transition-colors hover:text-black/50"
                    >
                      <Icon size={19} />
                    </a>
                  )
                })}
              </motion.div>

              {/* =====================================================
                  CONTACT
              ===================================================== */}
              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                  Contact
                </p>

                <div className="mt-3 h-px w-10 bg-black/20" />

                <a
                  href="mailto:info@lightcorporation.com"
                  className="mt-4 block text-sm text-black/75 transition-colors hover:text-black"
                >
                  info@lightcorporation.com
                </a>
              </div>

              {/* =====================================================
                  SECTORS
              ===================================================== */}
              <div className="mt-7">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                  Sectors
                </p>

                <div className="mt-3 h-px w-10 bg-black/20" />

                <div className="mt-4 flex flex-col gap-2 text-sm text-black/60">
                  <span>Education</span>
                  <span>Healthcare</span>
                  <span>Faith &amp; Religious</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar