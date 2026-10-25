import { motion } from 'framer-motion'
import { skills } from '../data/skills'

/**
 * 技能展示组件
 * - 按分类展示技能标签
 * - 标签使用胶囊形状
 */
export default function Skills() {
  return (
    <section className="px-5 py-8">
      <h2 className="mb-5 text-xl font-bold">技能专长</h2>
      <div className="space-y-5">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.05 }}
          >
            <h3 className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 transition-colors hover:border-purple-300 hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-purple-900/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
