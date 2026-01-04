"use client"

import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { useTranslations, useLocale } from 'next-intl'
import { LogIn } from 'lucide-react'

export default function LoginButton() {
  const { login, isLoading } = useAuth()
  const t = useTranslations('common')
  const locale = useLocale()

  if (isLoading) {
    return (
      <Button disabled className="min-w-[180px]">
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        {t('loading')}
      </Button>
    )
  }

  return (
    <Button
      onClick={() => login(locale)}
      className="bg-[#1877F2] hover:bg-[#166FE5] text-white min-w-[180px]"
    >
      <LogIn className="mr-2 h-4 w-4" />
      {t('login')}
    </Button>
  )
}
