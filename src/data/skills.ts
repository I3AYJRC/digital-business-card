// 技能数据 - 在此处修改为你自己的技能

export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: '前端开发',
    items: ['React', 'TypeScript', 'Vue', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: '后端开发',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis'],
  },
  {
    category: '工具与平台',
    items: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma'],
  },
  {
    category: 'AI 与数据',
    items: ['LLM 应用开发', 'Prompt Engineering', 'RAG', '数据分析'],
  },
]
