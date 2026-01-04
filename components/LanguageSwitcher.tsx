"use client"

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('common')

  const switchLocale = (newLocale: 'en' | 'ja') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-gray-500" />
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value as 'en' | 'ja')}
        className="text-sm border border-gray-200 rounded px-2 py-1 bg-white cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label={t('language')}
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
