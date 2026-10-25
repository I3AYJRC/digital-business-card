// 个人信息数据 - 在此处修改为你自己的信息

export interface SocialLink {
  name: string
  url: string
  icon: string // react-icons 组件名，如 'FaGithub'
}

export interface Profile {
  name: string
  title: string
  company: string
  avatar: string
  bio: string
  location: string
  email: string
  phone: string
  socials: SocialLink[]
}

export const profile: Profile = {
  name: '张三',
  title: '全栈开发工程师',
  company: '某某科技有限公司',
  avatar: '', // 留空则显示首字母头像，或填入图片 URL
  bio: '热爱技术，专注于 Web 开发与 AI 应用。用代码创造价值，用设计传递美感。',
  location: '中国 · 深圳',
  email: 'zhangsan@example.com',
  phone: '+86 138-0000-0000',
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'FaGithub' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'FaLinkedin' },
    { name: '微博', url: 'https://weibo.com', icon: 'FaWeibo' },
  ],
}
