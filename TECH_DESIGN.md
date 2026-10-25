# 技术设计文档

## 技术栈
- **框架**：React 18 + TypeScript + Vite
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **二维码**：qrcode.react
- **图标**：react-icons
- **部署**：Vercel

## 项目结构
```
src/
  components/
    Header.tsx          # 顶部导航栏（含主题切换按钮）
    Hero.tsx            # 个人信息展示区域
    Skills.tsx          # 技能展示
    Projects.tsx        # 作品/项目展示
    Contact.tsx         # 联系方式 + 交互功能
    Footer.tsx          # 页脚
    ThemeToggle.tsx     # 深色/浅色主题切换组件
  data/
    profile.ts          # 个人信息数据
    skills.ts           # 技能数据
    projects.ts         # 项目数据
  hooks/
    useTheme.ts         # 主题切换 Hook
  utils/
    vcard.ts            # 生成 vCard 文件
  App.tsx
  main.tsx
  index.css
```

## 数据管理
- 所有个人信息、技能、项目数据存储在 `src/data/` 目录下的 TypeScript 文件中
- 使用 TypeScript 接口定义数据结构，保证类型安全
- 修改数据只需编辑对应文件，无需改动组件代码

## 关键功能实现方案

### 主题切换
- 使用 `useTheme` Hook 管理主题状态
- 通过 `document.documentElement.classList` 切换 `dark` 类名
- 主题偏好持久化到 `localStorage`
- 默认读取系统主题偏好（`prefers-color-scheme`）

### vCard 生成
- 按照 vCard 3.0 格式拼接字符串
- 使用 `Blob` + `URL.createObjectURL` 生成下载链接
- 点击按钮触发下载，文件名格式为 `姓名.vcf`

### 二维码
- 使用 `qrcode.react` 组件
- 编码内容为当前页面的 URL
- 点击展示二维码弹窗，支持长按保存图片

### 响应式设计
- 移动端优先（Mobile First）
- 使用 Tailwind 的 `sm:`、`md:`、`lg:` 断点
- 移动端联系方式改为图标列表，节省空间

## 构建与部署
- 构建命令：`npm run build`
- 输出目录：`dist/`
- 部署平台：Vercel（自动检测 Vite 项目并配置）
