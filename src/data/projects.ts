// 项目/作品数据 - 在此处修改为你自己的项目

export interface Project {
  name: string
  description: string
  techStack: string[]
  url: string
  image?: string // 可选，项目截图 URL
}

export const projects: Project[] = [
  {
    name: '个人数字名片',
    description: '基于 React + Tailwind CSS 开发的在线数字名片，支持二维码分享和一键保存通讯录。',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    url: '#',
  },
  {
    name: 'AI 智能助手',
    description: '基于大语言模型的多轮对话助手，支持联网搜索、文件解析和工具调用。',
    techStack: ['Next.js', 'LangChain', 'OpenAI API', 'PostgreSQL'],
    url: '#',
  },
  {
    name: '待办事项应用',
    description: '功能完善的任务管理工具，支持分类、优先级、截止日期和数据统计。',
    techStack: ['React', 'Zustand', 'Tailwind CSS', 'LocalStorage'],
    url: '#',
  },
  {
    name: '天气查询应用',
    description: '实时天气查询应用，支持城市搜索、自动定位和未来天气预报。',
    techStack: ['React', 'OpenWeatherMap API', 'Framer Motion'],
    url: '#',
  },
]
