import { motion } from "framer-motion"
import {
  FiBookOpen,
  FiHeart,
  FiUsers,
} from "react-icons/fi"

const environments = [
  {
    number: "01",
    title: "Education",
    description:
      "Projects involving educational institutions and organizations, including work connected with Jain University, Karnataka College, and other educational organizations.",
    icon: FiBookOpen,
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Project solutions and collaborations within the healthcare sector, including experience involving established institutions such as Apollo Hospitals and Aster Hospitals.",
    icon: FiHeart,
  },
  {
    number: "03",
    title: "Faith & Religious",
    description:
      "Projects and initiatives within the faith and religious sector involving prominent figures and organizations.",
    icon: FiUsers,
  },
]

function ProjectEnvironments() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-black/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-black/45">
              Project Environments
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-black sm:text-5xl md:text-6xl lg:text-7xl">
            Different environments.
            <br />

            <span className="text-black/30">
              A multidisciplinary approach.
            </span>
          </h2>
        </motion.div>

        {/* Environments */}
        <div className="mt-24 grid border-t border-black/10 md:grid-cols-3">

          {environments.map((environment, index) => {
            const Icon = environment.icon

            return (
              <motion.div
                key={environment.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.1,
                }}
                className="group border-b border-black/10 py-12 md:border-b-0 md:border-r md:px-8 md:py-14 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs tracking-[0.3em] text-black/30">
                    {environment.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                <h3 className="mt-12 text-3xl font-medium tracking-[-0.03em] text-black sm:text-4xl">
                  {environment.title}
                </h3>

                <p className="mt-6 text-base leading-8 text-black/45 sm:text-lg">
                  {environment.description}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default ProjectEnvironments