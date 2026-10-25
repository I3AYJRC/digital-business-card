import { FaSun, FaMoon } from 'react-icons/fa'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

/**
 * 深色/浅色主题切换按钮
 */
export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="切换主题"
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:scale-110 hover:bg-gray-200 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
    </button>
  )
}
