import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/919008477294"

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.6,
        x: -20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        fixed
        bottom-5
        left-5
        z-[100]
        sm:bottom-7
        sm:left-7
      "
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
        className="
          absolute
          inset-0
          rounded-full
          bg-green-500
        "
      />

      {/* Button */}
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.35)]
          transition-shadow
          duration-300
          group-hover:shadow-[0_10px_40px_rgba(37,211,102,0.5)]
          sm:h-16
          sm:w-16
        "
      >
        <FaWhatsapp
          size={29}
          className="sm:h-8 sm:w-8"
        />
      </motion.div>

      {/* Hover label */}
      <motion.span
        initial={{
          opacity: 0,
          x: -8,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        className="
          pointer-events-none
          absolute
          left-full
          top-1/2
          ml-3
          hidden
          -translate-y-1/2
          whitespace-nowrap
          rounded-full
          bg-neutral-950
          px-4
          py-2
          text-xs
          font-medium
          text-white
          shadow-lg
          sm:block
        "
      >
        Chat with us
      </motion.span>
    </motion.a>
  )
}

export default FloatingWhatsApp