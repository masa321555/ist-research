"use client"

import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { useTranslations, useLocale } from 'next-intl'
import { LogOut, User } from 'lucide-react'
import Image from 'next/image'

export default function UserMenu() {
  const { user, logout, isAuthenticated, isLoading } = useAuth()
  const t = useTranslations('common')
  const locale = useLocale()

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="animate-pulse bg-gray-200 rounded-full h-8 w-8"></div>
        <div className="animate-pulse bg-gray-200 rounded h-4 w-20"></div>
      </div>
    )
  }

  if (!isAuthenticated || !user) {
    return null
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        {user.picture ? (
          <Image
            src={user.picture}
            alt={user.name}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4 text-gray-500" />
          </div>
        )}
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {user.name}
        </span>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => logout(locale)}
      >
        <LogOut className="h-4 w-4 mr-1" />
        <span className="hidden sm:inline">{t('logout')}</span>
      </Button>
    </div>
  )
}
