"use client"

import { useState } from 'react'
import { ArrowLeft, Trash2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useRouter, Link } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function DataDeletionPage() {
  const router = useRouter()
  const t = useTranslations('common')
  const locale = useLocale()
  const [isDeleted, setIsDeleted] = useState(false)

  const handleDeleteLocalData = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
      sessionStorage.clear()
      setIsDeleted(true)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.push('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('back')}
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">
            {locale === 'ja' ? 'ユーザーデータの削除' : 'User Data Deletion'}
          </h1>

          <div className="space-y-6">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    {locale === 'ja' ? 'データ削除について' : 'About Data Deletion'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-500">
                    <p>
                      {locale === 'ja'
                        ? '本サービスは、Meta社のプラットフォーム要件に基づき、ユーザーデータの削除機能を提供しています。'
                        : 'This Service provides user data deletion functionality based on Meta platform requirements.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'ja' ? '削除可能なデータ' : 'Deletable Data'}
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {locale === 'ja' ? '1. ローカルデータ（ブラウザ内）' : '1. Local Data (Browser)'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      {locale === 'ja' ? (
                        <>
                          <li>検索履歴（LocalStorage）</li>
                          <li>セッションデータ（SessionStorage）</li>
                          <li>Cookieデータ</li>
                        </>
                      ) : (
                        <>
                          <li>Search history (LocalStorage)</li>
                          <li>Session data (SessionStorage)</li>
                          <li>Cookie data</li>
                        </>
                      )}
                    </ul>
                    {!isDeleted ? (
                      <Button
                        onClick={handleDeleteLocalData}
                        className="mt-4"
                        variant="destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        {locale === 'ja' ? 'ローカルデータを削除' : 'Delete Local Data'}
                      </Button>
                    ) : (
                      <div className="mt-4 p-3 bg-green-50 text-green-700 rounded">
                        {locale === 'ja' ? '✓ ローカルデータが削除されました' : '✓ Local data has been deleted'}
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {locale === 'ja' ? '2. サーバー側データ' : '2. Server-side Data'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      {locale === 'ja' ? (
                        <>
                          <li>アクセスログ（IPアドレス、アクセス日時等）</li>
                          <li>利用統計データ</li>
                          <li>キャッシュされた検索結果（1時間で自動削除）</li>
                        </>
                      ) : (
                        <>
                          <li>Access logs (IP address, access time, etc.)</li>
                          <li>Usage statistics data</li>
                          <li>Cached search results (automatically deleted after 1 hour)</li>
                        </>
                      )}
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded">
                      <p className="text-sm text-gray-700 mb-2">
                        {locale === 'ja'
                          ? 'サーバー側データの削除をご希望の場合は、以下の連絡先までメールでご連絡ください：'
                          : 'If you wish to delete server-side data, please contact us by email:'}
                      </p>
                      <div className="mt-3 p-3 bg-white rounded">
                        <p className="font-semibold text-sm">Email: inquiry.otoiawase@tbwahakuhodo.co.jp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'ja' ? '関連リンク' : 'Related Links'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a href="https://developers.facebook.com/docs/development/release/data-deletion-callback"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    {locale === 'ja' ? 'Meta データ削除要件' : 'Meta Data Deletion Requirements'}
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-blue-600 hover:underline">
                    {locale === 'ja' ? '当社プライバシーポリシー' : 'Our Privacy Policy'}
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
