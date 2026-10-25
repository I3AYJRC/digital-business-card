import type { Profile } from '../data/profile'

/**
 * 生成 vCard 3.0 格式字符串
 * 参考标准：https://datatracker.ietf.org/doc/html/rfc2426
 */
export function generateVCard(profile: Profile): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${profile.name}`,
    `N:${profile.name};;;;`,
    `TITLE:${profile.title}`,
    `ORG:${profile.company}`,
    `TEL;TYPE=CELL:${profile.phone}`,
    `EMAIL:${profile.email}`,
    `ADR;TYPE=WORK:;;${profile.location};;;;`,
    `NOTE:${profile.bio}`,
    ...profile.socials.map((s) => `URL:${s.url}`),
    'END:VCARD',
  ]
  return lines.join('\r\n')
}

/**
 * 下载 vCard 文件
 */
export function downloadVCard(profile: Profile): void {
  const vcard = generateVCard(profile)
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${profile.name}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
