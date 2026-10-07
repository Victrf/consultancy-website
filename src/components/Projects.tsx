import { motion, type Variants } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

import jainImage from "../assets/project jain.jpg"
import karnatakaImage from "../assets/project karnataka.jpg"
import apolloImage from "../assets/project apollo.jpg"
import asterImage from "../assets/project aster.jpg"
import faithImage from "../assets/project faith.jpg"

type Project = {
  number: string
  title: string
  sector: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    number: "01",
    title: "Jain University",
    sector: "Education",
    description:
      "Our experience in the education sector includes projects involving Jain University and other educational organizations.",
    image: jainImage,
  },
  {
    number: "02",
    title: "Karnataka College",
    sector: "Education",
    description:
      "Our education-sector experience extends to projects involving Karnataka College and other educational institutions.",
    image: karnatakaImage,
  },
  {
    number: "03",
    title: "Apollo Hospitals",
    sector: "Healthcare",
    description:
      "Our portfolio includes projects and collaborations with established healthcare institutions such as Apollo Hospitals.",
    image: apolloImage,
  },
  {
    number: "04",
    title: "Aster Hospitals",
    sector: "Healthcare",
    description:
      "Our healthcare experience includes projects and collaborations involving Aster Hospitals.",
    image: asterImage,
  },
  {
    number: "05",
    title: "Faith & Religious Projects",
    sector: "Faith & Religious",
    description:
      "Our work also extends to faith and religious projects and initiatives involving prominent figures and organizations.",
    image: faithImage,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="
            mb-14
            flex
            flex-col
            gap-8
            lg:mb-20
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-3xl">
            <motion.div
              variants={itemVariants}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-neutral-900" />

              <span className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                PROJECT EXPERIENCE
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
                lg:text-6xl
              "
            >
              Experience across
              <span className="text-neutral-400"> sectors and environments.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="
              max-w-md
              text-base
              leading-7
              text-neutral-500
              sm:text-lg
              sm:leading-8
            "
          >
            Our experience spans education, healthcare, and faith-based
            projects, with work involving established institutions and
            organizations.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ y: -5 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-neutral-950
                ${
                  index === projects.length - 1
                    ? "md:col-span-2"
                    : ""
                }
              `}
            >
              {/* Image */}
              <div
                className={`
                  relative
                  w-full
                  overflow-hidden
                  ${
                    index === projects.length - 1
                      ? "aspect-[16/7]"
                      : "aspect-[4/3]"
                  }
                `}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 1.04 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
                    to-black/10
                  "
                />

                {/* Project number */}
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-xs
                    font-medium
                    tracking-[0.18em]
                    text-white/70
                    sm:left-7
                    sm:top-7
                  "
                >
                  {project.number}
                </span>

                {/* Arrow */}
                <motion.div
                  whileHover={{ rotate: 45 }}
                  whileTap={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/40
                    bg-black/20
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:border-white
                    group-hover:bg-white
                    group-hover:text-neutral-950
                    sm:right-7
                    sm:top-7
                    sm:h-11
                    sm:w-11
                  "
                >
                  <FiArrowUpRight size={18} />
                </motion.div>

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    sm:bottom-7
                    sm:left-7
                    sm:right-7
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-white/60
                    "
                  >
                    {project.sector}
                  </span>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-medium
                      tracking-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-xl
                      text-sm
                      leading-6
                      text-white/70
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom animation */}
                <motion.div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-white
                    transition-transform
                    duration-700
                    group-hover:scale-x-100
                    group-active:scale-x-100
                  "
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects