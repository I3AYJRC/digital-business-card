import { profile } from '../data/profile'

/**
 * 页脚
 */
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-8 border-t border-gray-200/60 px-5 py-6 text-center text-sm text-gray-400 dark:border-gray-800/60">
      <p>
        © {year} {profile.name}. Made with React & Tailwind CSS.
      </p>
    </footer>
  )
}
