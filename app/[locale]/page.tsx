"use client"

import { useState } from 'react'
import { Search, TrendingUp, Shield, Zap, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useStore } from '@/store/useStore'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'
import LoginButton from '@/components/LoginButton'
import { Link } from '@/i18n/navigation'

export default function HomePage() {
  const router = useRouter()
  const { setSearchQuery, addToSearchHistory, searchHistory } = useStore()
  const { isAuthenticated, isLoading } = useAuth()
  const [inputValue, setInputValue] = useState('')
  const t = useTranslations()
  const locale = useLocale()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAuthenticated) return
    if (inputValue.trim()) {
      const hashtag = inputValue.trim().replace(/^#/, '')
      setSearchQuery(hashtag)
      addToSearchHistory(hashtag)
      router.push(`/search?q=${encodeURIComponent(hashtag)}`)
    }
  }

  const handleQuickSearch = (tag: string) => {
    if (!isAuthenticated) return
    setSearchQuery(tag)
    addToSearchHistory(tag)
    router.push(`/search?q=${encodeURIComponent(tag)}`)
  }

  const popularTags = locale === 'ja'
    ? ['東京カフェ', '渋谷グルメ', '原宿ファッション', '京都観光', '大阪グルメ']
    : ['TokyoCafe', 'ShibuyaFood', 'HarajukuFashion', 'KyotoTravel', 'OsakaFood']

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="block">{t('home.title')}</span>
              <span className="block text-3xl mt-2">{t('home.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600">
              {t('home.description')}
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              ) : isAuthenticated ? (
                <form onSubmit={handleSearch} className="flex gap-4">
                  <Input
                    type="text"
                    placeholder={t('home.placeholder')}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 text-lg h-12"
                  />
                  <Button type="submit" size="lg" className="px-8">
                    <Search className="mr-2 h-5 w-5" />
                    {t('common.search')}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-600 mb-4">{t('home.loginRequired')}</p>
                  <div className="flex flex-col items-center gap-3">
                    <LoginButton />
                    <Link
                      href="/permissions"
                      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <Info className="h-4 w-4" />
                      {t('home.permissionsInfo')}
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Searches - Only show when authenticated */}
          {isAuthenticated && searchHistory.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t('home.recentSearches')}</h3>
              <div className="flex flex-wrap gap-2">
                {searchHistory.slice(0, 10).map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickSearch(tag)}
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Popular Hashtags - Only show when authenticated */}
          {isAuthenticated && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">{t('home.popularHashtags')}</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Button
                    key={tag}
                    variant="secondary"
                    size="sm"
                    onClick={() => handleQuickSearch(tag)}
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">{t('home.featureEngagement')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {t('home.featureEngagementDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle className="text-lg">{t('home.featureRealtime')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {t('home.featureRealtimeDesc')}
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">{t('home.featureSecurity')}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  {t('home.featureSecurityDesc')}
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>{t('home.footer')}</p>
            <p className="mt-2">{t('home.apiLimit')}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/privacy" className="text-blue-600 hover:underline mx-2">
                {t('home.privacyPolicy')}
              </Link>
              |
              <Link href="/terms" className="text-blue-600 hover:underline mx-2">
                {t('home.termsOfService')}
              </Link>
              |
              <Link href="/permissions" className="text-blue-600 hover:underline mx-2">
                {t('home.permissionsInfo')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
