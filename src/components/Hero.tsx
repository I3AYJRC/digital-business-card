import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { profile } from '../data/profile'

/**
 * 个人信息展示区域（Hero）
 * - 头像（无图时显示姓名首字母）
 * - 姓名、职位、公司
 * - 个人简介
 * - 所在城市
 */
export default function Hero() {
  const initial = profile.name.charAt(0)

  return (
    <section className="px-5 pt-12 pb-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-4xl font-bold text-white shadow-lg"
      >
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          initial
        )}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold sm:text-4xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-2 text-lg text-purple-500 dark:text-purple-400"
      >
        {profile.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-1 text-sm text-gray-500 dark:text-gray-400"
      >
        {profile.company}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300"
      >
        {profile.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-4 flex items-center justify-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
      >
        <FaMapMarkerAlt className="h-3.5 w-3.5" />
        <span>{profile.location}</span>
      </motion.div>
    </section>
  )
}
