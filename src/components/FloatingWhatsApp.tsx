
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const smoothEase = [0.22, 1, 0.36, 1] as const

function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919008477294"
  const emailUrl = "mailto:admin@lightcorporations.com"

  const buttonAnimation = {
    initial: {
      opacity: 0,
      scale: 0.6,
      x: -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    transition: {
      duration: 0.7,
      delay: 1,
      ease: smoothEase,
    },
  }

  return (
    <div className="fixed bottom-5 left-5 z-[100] flex items-center gap-3 sm:bottom-7 sm:left-7">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={buttonAnimation.initial}
        animate={buttonAnimation.animate}
        transition={buttonAnimation.transition}
        className="group relative"
      >
        {/* Pulsing ring */}
        <motion.span
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.45, 0, 0.45],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full bg-green-500"
        />

        {/* Button */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-shadow duration-300 group-hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)] sm:h-16 sm:w-16"
        >
          <FaWhatsapp size={29} className="sm:h-8 sm:w-8" />
        </motion.div>

        {/* Hover label */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white shadow-lg sm:block"
        >
          Chat with us
        </motion.span>
      </motion.a>

      {/* Email Button */}
      <motion.a
        href={emailUrl}
        aria-label="Send us an email"
        initial={buttonAnimation.initial}
        animate={buttonAnimation.animate}
        transition={{
          ...buttonAnimation.transition,
          delay: 1.15,
        }}
        className="group relative"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:bg-neutral-700 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] sm:h-16 sm:w-16"
        >
          <FiMail size={25} className="sm:h-7 sm:w-7" />
        </motion.div>

        {/* Hover label */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-neutral-950 px-4 py-2 text-xs font-medium text-white shadow-lg sm:block"
        >
          Email us
        </motion.span>
      </motion.a>
    </div>
  )
}

export default FloatingWhatsApp
