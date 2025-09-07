"use client"

import { useState } from 'react'
import { Search, TrendingUp, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useStore } from '@/store/useStore'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()
  const { setSearchQuery, addToSearchHistory, searchHistory } = useStore()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const hashtag = inputValue.trim().replace(/^#/, '')
      setSearchQuery(hashtag)
      addToSearchHistory(hashtag)
      router.push(`/search?q=${encodeURIComponent(hashtag)}`)
    }
  }

  const handleQuickSearch = (tag: string) => {
    setSearchQuery(tag)
    addToSearchHistory(tag)
    router.push(`/search?q=${encodeURIComponent(tag)}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="block">Instagram</span>
              <span className="block">高エンゲージメント投稿分析ツール</span>
            </h1>
            <p className="text-xl text-gray-600">
              ハッシュタグを入力して、人気投稿とインフルエンサーを発見しましょう
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-4">
                <Input
                  type="text"
                  placeholder="例: 東京カフェ、原宿ファッション..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 text-lg h-12"
                />
                <Button type="submit" size="lg" className="px-8">
                  <Search className="mr-2 h-5 w-5" />
                  検索
                </Button>
              </form>
            </CardContent>
          </Card>

          {searchHistory.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-3">最近の検索</h3>
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

          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-3">人気のハッシュタグ</h3>
            <div className="flex flex-wrap gap-2">
              {['東京カフェ', '渋谷グルメ', '原宿ファッション', '京都観光', '大阪グルメ'].map((tag) => (
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

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">高エンゲージメント分析</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  いいね数とコメント数から算出したエンゲージメント率で、最も反響の高い投稿を特定します
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-yellow-600 mb-2" />
                <CardTitle className="text-lg">リアルタイムデータ</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  Instagram Graph APIを使用して、最新の投稿データと人気投稿をリアルタイムで取得します
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">安全なデータ管理</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-xs leading-relaxed">
                  ログイン不要で利用可能。APIトークンはサーバー側で安全に管理されています
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>
              本ツールはTBWA HAKUHODO社内向けツールです。Instagram Graph APIを使用しています。
            </p>
            <p className="mt-2">
              API制限: 30ハッシュタグ/7日間 | データは1時間キャッシュされます
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a href="/privacy" className="text-blue-600 hover:underline mx-2">
                プライバシーポリシー
              </a>
              |
              <a href="/terms" className="text-blue-600 hover:underline mx-2">
                利用規約
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
