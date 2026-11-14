import { useEffect, useRef, useState } from "react"
import { NavLink, Link } from "react-router-dom"
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion"
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import type { IconType } from "react-icons"
import {
  FiArrowRight,
  FiChevronDown,
  FiMail,
  FiMenu,
  FiPause,
  FiPlay,
  FiX,
} from "react-icons/fi"

// Company logo
import logo from "../assets/logo.png"

type NavLinkItem = {
  name: string
  href: string
  cta?: boolean
}

type SocialItem = {
  name: string
  href: string
  icon: IconType
}

type SocialLinkProps = {
  social: SocialItem
  size?: number
  className?: string
}

type SocialButtonProps = {
  social: SocialItem
  index: number
  reduce: boolean | null
}

type NewsTickerProps = {
  items: readonly string[]
  reduce: boolean | null
}

type LanguageCode = "EN" | "FR"

type LanguageSwitcherProps = {
  language: LanguageCode
  onChange: (language: LanguageCode) => void
}

const navLinks: readonly NavLinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact", cta: true },
]

// Replace each "#" with the real profile URL
const socialLinks: readonly SocialItem[] = [
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "X", href: "#", icon: FaXTwitter },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "GitHub", href: "#", icon: FaGithub },
]

const languages = [
  { code: "EN", label: "English" },
  { code: "FR", label: "Français" },
] as const

// Headlines that scroll in the top bar. Edit, add or remove freely.
const tickerItems = [
  "Light Corporation is an architecture and project management firm and a subsidiary of Music Royalty.",
  "Professional solutions across a diverse range of sectors and project environments.",
  "Education: projects with institutions such as Jain University and Karnataka College.",
  "Healthcare: projects and collaborations with Apollo Hospitals and Aster Hospitals.",
  "Faith sector: supporting projects involving David Ize, Dr. Job Mukadi and Pastor Marcello Tunasi.",
  "Social impact: supporting hundreds of young Africans in accessing educational opportunities abroad.",
  "Professional expertise, strategic vision and social responsibility.",
] as const

const EMAIL = "admin@lightcorporations.com"

const ease = [0.22, 1, 0.36, 1] as const

/* ---------------------------------------------------------
   Plain social icon (top bar and mobile drawer)
--------------------------------------------------------- */
function SocialLink({ social, size = 16, className = "" }: SocialLinkProps) {
  const Icon = social.icon
  const external = social.href.startsWith("http")

  return (
    <a
      href={social.href}
      aria-label={social.name}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 ${className}`}
    >
      <Icon size={size} />
    </a>
  )
}

/* ---------------------------------------------------------
   Animated social button (main navbar)
   - drops in one after another
   - lifts and grows on hover, fills black
   - shrinks slightly when pressed
--------------------------------------------------------- */
function SocialButton({ social, index, reduce }: SocialButtonProps) {
  const Icon = social.icon
  const external = social.href.startsWith("http")

  return (
    <motion.a
      href={social.href}
      aria-label={social.name}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      initial={reduce ? false : { opacity: 0, y: -14, scale: 0.7 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: reduce ? 0 : 0.35 + index * 0.09,
          ease,
        },
      }}
      whileHover={
        reduce
          ? undefined
          : { y: -3, scale: 1.12, transition: { duration: 0.2 } }
      }
      whileTap={
        reduce
          ? undefined
          : { scale: 0.92, transition: { duration: 0.1 } }
      }
      className="flex h-9 w-9 items-center justify-center rounded-full text-black/70 transition-colors duration-300 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
    >
      <Icon size={16} />
    </motion.a>
  )
}

/* ---------------------------------------------------------
   News ticker (top bar)
   - scrolls continuously and loops seamlessly
   - pauses on hover and with the pause button
   - reduced motion: shows the first headline, no scrolling
--------------------------------------------------------- */
function NewsTicker({ items, reduce }: NewsTickerProps) {
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)

  const characters = items.join("").length
  // Longer text scrolls for longer, so the reading speed stays steady
  const duration = Math.max(45, Math.round(characters * 0.11))

  const edgeFade =
    "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)"

  return (
    <div
      role="region"
      aria-label="Highlights"
      className="flex min-w-0 flex-1 items-center gap-3"
    >
      {/* Label */}
      <span className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          {!reduce && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Highlights
      </span>

      {reduce ? (
        <p className="min-w-0 flex-1 truncate text-xs text-white/80">
          {items[0]}
        </p>
      ) : (
        <>
          <div
            className="relative min-w-0 flex-1 overflow-hidden"
            style={{
              maskImage: edgeFade,
              WebkitMaskImage: edgeFade,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="flex w-max"
              style={{
                animation: `lc-ticker ${duration}s linear infinite`,
                animationPlayState:
                  paused || hovered ? "paused" : "running",
              }}
            >
              {/* Two identical copies make a seamless loop */}
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  aria-hidden={copy === 1}
                  className="flex shrink-0 items-center"
                >
                  {items.map((item) => (
                    <li
                      key={`${copy}-${item}`}
                      className="flex items-center whitespace-nowrap px-5 text-xs text-white/80"
                    >
                      <span
                        className="mr-5 h-1 w-1 shrink-0 rounded-full bg-white/40"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPaused((prev) => !prev)}
            aria-label={paused ? "Play highlights" : "Pause highlights"}
            aria-pressed={paused}
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            {paused ? <FiPlay size={12} /> : <FiPause size={12} />}
          </button>
        </>
      )}

      {/* Keyframes for the scrolling track */}
      <style>{`
        @keyframes lc-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

/* ---------------------------------------------------------
   Language dropdown (top bar)
--------------------------------------------------------- */
function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${language}. Change language`}
        className="flex items-center gap-1.5 rounded text-xs font-medium tracking-wide text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
      >
        {language}
        <FiChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-36 rounded-lg border border-black/10 bg-white p-1 shadow-xl"
          >
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                role="menuitemradio"
                aria-checked={language === item.code}
                onClick={() => {
                  onChange(item.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-100 ${
                  language === item.code
                    ? "font-semibold text-black"
                    : "text-black/70"
                }`}
              >
                {item.label}
                <span className="text-xs text-black/40">
                  {item.code}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------------------------------------------------
   Navbar
--------------------------------------------------------- */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>("EN")
  const [scrolled, setScrolled] = useState(false)

  const reduce = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setMenuOpen(false)

  // Shrink and add a shadow once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the drawer when browser Back or Forward navigation occurs.
  // Internal navigation links already call closeMenu directly.
  useEffect(() => {
    const handlePopState = () => setMenuOpen(false)

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Keep the page language attribute in step with the selector
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase()
  }, [language])

  // Drawer: lock scroll, close on Escape, manage focus
  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const button = menuButtonRef.current

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      button?.focus()
    }
  }, [menuOpen])

  return (
    <>
      {/* =========================================================
          TOP BAR (desktop): email | news ticker | social + language
          Social icons show here on tablet widths only; from large
          screens up they sit beside the nav links.
          Scrolls away; the main bar below stays fixed to the top.
      ========================================================= */}
      <div className="relative z-[60] hidden bg-neutral-950 text-white md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center gap-5 px-5 sm:px-6 lg:px-8">
          <a
            href={`mailto:${EMAIL}`}
            className="flex shrink-0 items-center gap-2 rounded text-xs text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            <FiMail size={14} aria-hidden="true" />
            {EMAIL}
          </a>

          <span
            className="h-4 w-px shrink-0 bg-white/20"
            aria-hidden="true"
          />

          <NewsTicker items={tickerItems} reduce={reduce} />

          <span
            className="h-4 w-px shrink-0 bg-white/20"
            aria-hidden="true"
          />

          <div className="flex shrink-0 items-center gap-5">
            <div className="flex items-center gap-4 lg:hidden">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.name}
                  social={social}
                  size={14}
                  className="rounded text-white/70 hover:text-white focus-visible:ring-offset-neutral-950"
                />
              ))}
            </div>

            <span
              className="h-4 w-px bg-white/20 lg:hidden"
              aria-hidden="true"
            />

            <LanguageSwitcher
              language={language}
              onChange={setLanguage}
            />
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduce ? 0 : 0.5 }}
        aria-label="Main"
        className={`sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
          scrolled
            ? "border-black/10 shadow-md"
            : "border-black/5 shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-[height] duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "h-[4.5rem]" : "h-24"
          }`}
        >
          {/* LOGO + COMPANY NAME: one link, one entity */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Light Corporations, home"
            className="group flex min-w-0 shrink-0 items-center gap-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
          >
            <img
              src={logo}
              alt=""
              className={`block w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? "h-11 sm:h-12 lg:h-14"
                  : "h-14 sm:h-16 lg:h-[72px]"
              }`}
            />

            {/* Fine-tune the line-up here: -translate-y-0.5 nudges the
                name up 2px. Try -translate-y-1 (more up), translate-y-0
                (none) or translate-y-0.5 (down). Also tune -ml-1 for
                the gap to the logo. */}
            <span className="-ml-1 -translate-y-0.5 whitespace-nowrap text-[15px] font-semibold leading-none tracking-tight text-black sm:text-lg lg:text-xl">
              Light Corporations
            </span>
          </Link>

          {/* STATEMENT: short text between the brand and the links
              (wide screens only, so it never crowds the bar) */}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.3,
            }}
            className="hidden min-w-0 flex-1 justify-center px-6 xl:flex"
          >
            <div className="flex items-center gap-5">
              <span
                className="h-10 w-px shrink-0 bg-black/15"
                aria-hidden="true"
              />

              <p className="max-w-[17.5rem] text-xs leading-snug text-black/55">
                <span className="mb-0.5 block text-[13px] font-semibold text-black/80">
                  Architecture &amp; Project Management
                </span>
                A subsidiary of Music Royalty &middot; Education,
                healthcare and faith-based projects.
              </p>
            </div>
          </motion.div>

          {/* DESKTOP: NAVIGATION + SOCIAL ICONS */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) =>
              link.cta ? (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  {link.name}
                </NavLink>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `relative rounded py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 ${
                      isActive
                        ? "text-black"
                        : "text-black/60 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          transition={{
                            duration: reduce ? 0 : 0.35,
                            ease,
                          }}
                          className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-black"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}

            {/* Divider, then the social icons */}
            <span
              className="hidden h-6 w-px bg-black/15 lg:block"
              aria-hidden="true"
            />

            <div className="hidden items-center gap-1 lg:flex">
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={social.name}
                  social={social}
                  index={index}
                  reduce={reduce}
                />
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black md:hidden"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* =========================================================
          MOBILE DRAWER
          Sits outside <nav> so the blur on the bar cannot affect
          its fixed positioning.
      ========================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              onClick={closeMenu}
              aria-hidden="true"
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] md:hidden"
            />

            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: reduce ? 0 : 0.45,
                ease,
              }}
              className="fixed right-0 top-0 z-[70] flex h-screen w-[88%] max-w-sm flex-col overflow-y-auto bg-white px-6 pb-8 pt-5 shadow-2xl md:hidden"
              style={{ height: "100dvh" }}
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label="Light Corporation, home"
                  className="flex min-w-0 items-center gap-0.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
                >
                  <img
                    src={logo}
                    alt=""
                    className="block h-14 w-auto shrink-0 object-contain"
                  />
                  <span className="-ml-1 -translate-y-0.5 whitespace-nowrap text-base font-semibold leading-none tracking-tight text-black">
                    Light Corporation
                  </span>
                </Link>

                <button
                  type="button"
                  ref={closeRef}
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* NAVIGATION LINKS */}
              <nav
                aria-label="Mobile"
                className="mt-8 flex flex-col border-t border-black/10"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: reduce ? 0 : 24,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.4,
                      delay: reduce ? 0 : 0.1 + index * 0.07,
                      ease,
                    }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group flex items-center justify-between border-b border-black/10 py-4 text-xl tracking-tight no-underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                          isActive
                            ? "font-semibold text-black"
                            : "text-black/70 hover:text-black"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{link.name}</span>
                          <FiArrowRight
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* ABOUT US */}
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  About us
                </p>

                <p className="mt-3 text-sm leading-relaxed text-black/65">
                  <span className="font-semibold text-black/85">
                    Light Corporation
                  </span>{" "}
                  is an architecture and project management firm and a
                  subsidiary of Music Royalty, delivering projects in
                  education, healthcare and faith-based sectors.
                </p>
              </div>

              {/* LANGUAGE */}
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Language
                </p>

                <div
                  role="radiogroup"
                  aria-label="Language"
                  className="mt-3 inline-flex rounded-full bg-black/5 p-1"
                >
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      role="radio"
                      aria-checked={language === item.code}
                      onClick={() => setLanguage(item.code)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                        language === item.code
                          ? "bg-black text-white"
                          : "text-black/60 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Contact
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-3 flex items-center gap-2 rounded text-sm text-black/75 transition-colors hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                >
                  <FiMail size={16} aria-hidden="true" />
                  {EMAIL}
                </a>

                <div className="mt-4 flex items-center gap-5">
                  {socialLinks.map((social) => (
                    <SocialLink
                      key={social.name}
                      social={social}
                      size={19}
                      className="rounded text-black hover:text-black/50 focus-visible:ring-black"
                    />
                  ))}
                </div>
              </div>

              {/* SECTORS */}
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
                  Sectors
                </p>

                <ul className="mt-3 flex flex-col gap-2 text-sm text-black/60">
                  <li>Education</li>
                  <li>Healthcare</li>
                  <li>Faith &amp; Religious</li>
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar