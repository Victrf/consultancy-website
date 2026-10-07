import { motion } from "framer-motion"

function GradientSection() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[420px]
        overflow-hidden
        bg-[#08090f]
        sm:min-h-[500px]
        lg:min-h-[600px]
      "
    >
      {/* Base animated gradient */}
      <motion.div
        className="
          absolute
          inset-[-25%]
          -z-10
          bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.8),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.75),transparent_32%),radial-gradient(circle_at_75%_80%,rgba(6,182,212,0.65),transparent_30%),radial-gradient(circle_at_25%_85%,rgba(236,72,153,0.55),transparent_30%),linear-gradient(135deg,#08090f,#111827,#0f172a)]
        "
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%",
            "35% 25%, 65% 40%, 75% 55%, 25% 70%, 0% 0%",
            "80% 50%, 20% 75%, 30% 20%, 90% 30%, 0% 0%",
            "45% 90%, 85% 20%, 10% 70%, 60% 10%, 0% 0%",
            "0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%",
          ],
          scale: [1, 1.08, 1.03, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundSize:
            "160% 160%, 160% 160%, 160% 160%, 160% 160%, 100% 100%",
        }}
      />

      {/* Blue light */}
      <motion.div
        className="
          absolute
          -left-24
          top-[-10%]
          h-64
          w-64
          rounded-full
          bg-blue-500/30
          blur-[90px]
          sm:h-80
          sm:w-80
          lg:h-[28rem]
          lg:w-[28rem]
        "
        animate={{
          x: [0, 180, 80, -40, 0],
          y: [0, 100, 240, 80, 0],
          scale: [1, 1.25, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet light */}
      <motion.div
        className="
          absolute
          right-[-10%]
          top-[-15%]
          h-72
          w-72
          rounded-full
          bg-violet-500/30
          blur-[100px]
          sm:h-96
          sm:w-96
          lg:h-[32rem]
          lg:w-[32rem]
        "
        animate={{
          x: [0, -140, -220, -60, 0],
          y: [0, 120, 260, 60, 0],
          scale: [1, 1.15, 1.35, 0.95, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan light */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          left-[30%]
          h-72
          w-72
          rounded-full
          bg-cyan-400/25
          blur-[100px]
          sm:h-96
          sm:w-96
          lg:h-[30rem]
          lg:w-[30rem]
        "
        animate={{
          x: [0, 180, -100, 100, 0],
          y: [0, -160, -280, -100, 0],
          scale: [1, 0.85, 1.25, 1.05, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Magenta light */}
      <motion.div
        className="
          absolute
          bottom-[-15%]
          right-[5%]
          h-60
          w-60
          rounded-full
          bg-fuchsia-500/20
          blur-[90px]
          sm:h-80
          sm:w-80
        "
        animate={{
          x: [0, -160, -40, -180, 0],
          y: [0, -100, -220, -50, 0],
          scale: [1, 1.2, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Warm highlight */}
      <motion.div
        className="
          absolute
          left-[45%]
          top-[30%]
          h-32
          w-32
          rounded-full
          bg-amber-300/15
          blur-[70px]
          sm:h-48
          sm:w-48
        "
        animate={{
          x: [0, 100, -80, 60, 0],
          y: [0, -80, 120, -40, 0],
          scale: [1, 1.3, 0.8, 1.15, 1],
          opacity: [0.4, 0.8, 0.5, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft glass overlay */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/[0.025]
          backdrop-blur-[2px]
        "
      />

      {/* Subtle grain-like light */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.25)_100%)]
        "
        animate={{
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[420px]
          max-w-7xl
          items-center
          px-5
          py-20
          sm:min-h-[500px]
          sm:px-8
          lg:min-h-[600px]
          lg:px-10
        "
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-xs
              font-semibold
              tracking-[0.22em]
              text-white/60
            "
          >
            LIGHT CORPORATION
          </motion.span>

          <motion.h2
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
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-5
              text-4xl
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-white
              sm:text-5xl
              lg:text-7xl
            "
          >
            Ideas into
            <span className="text-white/45">
              {" "}
              meaningful impact.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-white/55
              sm:text-base
              sm:leading-8
            "
          >
            Professional expertise, strategic vision, and social
            responsibility working together to create lasting value.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default GradientSection