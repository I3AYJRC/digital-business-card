import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import {
  FaPhone,
  FaEnvelope,
  FaDownload,
  FaQrcode,
  FaLink,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWeibo,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
} from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { profile } from '../data/profile'
import { downloadVCard } from '../utils/vcard'

/** 图标名 -> 组件 的映射表 */
const ICON_MAP: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaWeibo,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGlobe,
}

/**
 * 联系方式 + 名片交互功能
 * - 电话、邮箱（可直接点击）
 * - 社交媒体链接
 * - 一键保存通讯录（vCard）
 * - 二维码分享
 * - 复制链接
 */
export default function Contact() {
  const [showQR, setShowQR] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // 降级方案：创建临时 textarea
      const textarea = document.createElement('textarea')
      textarea.value = window.location.href
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className="px-5 py-8">
      <h2 className="mb-5 text-xl font-bold">联系方式</h2>

      {/* 电话 & 邮箱 */}
      <div className="mb-4 space-y-3">
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300 hover:bg-purple-50 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-purple-500 dark:hover:bg-purple-900/20"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-300">
            <FaPhone className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-gray-400">电话</p>
            <p className="font-medium">{profile.phone}</p>
          </div>
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-purple-300 hover:bg-purple-50 dark:border-gray-800 dark:bg-gray-900/50 dark:hover:border-purple-500 dark:hover:bg-purple-900/20"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
            <FaEnvelope className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs text-gray-400">邮箱</p>
            <p className="font-medium">{profile.email}</p>
          </div>
        </a>
      </div>

      {/* 社交媒体 */}
      {profile.socials.length > 0 && (
        <div className="mb-6">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">社交媒体</p>
          <div className="flex flex-wrap gap-2">
            {profile.socials.map((social) => {
              const Icon = ICON_MAP[social.icon] ?? FaGlobe
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:scale-110 hover:border-purple-400 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-purple-400"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      )}

      {/* 操作按钮组 */}
      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => downloadVCard(profile)}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 bg-white py-3 text-xs font-medium text-gray-700 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
        >
          <FaDownload className="h-5 w-5" />
          保存名片
        </button>

        <button
          type="button"
          onClick={() => setShowQR(true)}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 bg-white py-3 text-xs font-medium text-gray-700 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
        >
          <FaQrcode className="h-5 w-5" />
          二维码
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-200 bg-white py-3 text-xs font-medium text-gray-700 transition-all hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-purple-900/20 dark:hover:text-purple-400"
        >
          <FaLink className="h-5 w-5" />
          {copied ? '已复制' : '复制链接'}
        </button>
      </div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl bg-white p-6 text-center dark:bg-gray-900"
            >
              <button
                type="button"
                onClick={() => setShowQR(false)}
                aria-label="关闭"
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FaTimes className="h-5 w-5" />
              </button>
              <p className="mb-4 font-semibold text-gray-900 dark:text-white">
                扫码访问我的名片
              </p>
              <div className="rounded-xl bg-white p-3">
                <QRCodeSVG
                  value={typeof window !== 'undefined' ? window.location.href : ''}
                  size={200}
                  level="M"
                  includeMargin
                />
              </div>
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                长按二维码可保存图片
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
