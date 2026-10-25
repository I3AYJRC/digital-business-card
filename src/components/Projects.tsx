import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/projects'

/**
 * 作品/项目展示组件
 * - 项目卡片列表
 * - 每个卡片包含名称、描述、技术栈标签、访问链接
 */
export default function Projects() {
  return (
    <section className="px-5 py-8">
      <h2 className="mb-5 text-xl font-bold">项目作品</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <FaExternalLinkAlt className="mt-1 h-3.5 w-3.5 shrink-0 text-gray-400 transition-colors group-hover:text-purple-500" />
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-purple-50 px-2 py-0.5 text-xs text-purple-600 dark:bg-purple-900/30 dark:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
