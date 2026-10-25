import ThemeToggle from './ThemeToggle'
import { profile } from '../data/profile'

interface HeaderProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

/**
 * 顶部导航栏：显示姓名 + 主题切换按钮
 */
export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-800/60 dark:bg-[#0a0a0a]/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-lg font-bold text-transparent">
          {profile.name}
        </span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </header>
  )
}
