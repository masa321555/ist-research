"use client"

import { useAuth } from '@/hooks/useAuth'
import LoginButton from './LoginButton'
import UserMenu from './UserMenu'
import LanguageSwitcher from './LanguageSwitcher'
import { Link } from '@/i18n/navigation'

export default function Header() {
  const { isAuthenticated, isLoading } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Instagram Analytics
          </Link>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            {!isLoading && (
              isAuthenticated ? <UserMenu /> : <LoginButton />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
