"use client"

import Link from 'next/link'
import { ArrowLeft, Trash2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

export default function DataDeletionPage() {
  const [isDeleted, setIsDeleted] = useState(false)

  const handleDeleteLocalData = () => {
    // LocalStorageのデータを削除
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
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              ホームに戻る
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">ユーザーデータの削除</h1>
          
          <div className="space-y-6">
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    データ削除について
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-500">
                    <p>
                      本サービスは、Meta社のプラットフォーム要件に基づき、ユーザーデータの削除機能を提供しています。
                    </p>
                    <p>
                      本サービスはログイン機能を持たないため、個人を特定するデータは保存していませんが、
                      以下のデータについて削除をリクエストすることができます。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">削除可能なデータ</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1. ローカルデータ（ブラウザ内）</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>検索履歴（LocalStorage）</li>
                      <li>セッションデータ（SessionStorage）</li>
                      <li>Cookieデータ</li>
                    </ul>
                    {!isDeleted ? (
                      <Button 
                        onClick={handleDeleteLocalData}
                        className="mt-4"
                        variant="destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        ローカルデータを削除
                      </Button>
                    ) : (
                      <div className="mt-4 p-3 bg-green-50 text-green-700 rounded">
                        ✓ ローカルデータが削除されました
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">2. サーバー側データ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
                      <li>アクセスログ（IPアドレス、アクセス日時等）</li>
                      <li>利用統計データ</li>
                      <li>キャッシュされた検索結果（1時間で自動削除）</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 rounded">
                      <p className="text-sm text-gray-700 mb-2">
                        サーバー側データの削除をご希望の場合は、以下の情報を添えてメールでご連絡ください：
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                        <li>削除希望のデータ種別</li>
                        <li>おおよその利用時期</li>
                        <li>使用したIPアドレス（わかる場合）</li>
                      </ul>
                      <div className="mt-3 p-3 bg-white rounded">
                        <p className="font-semibold text-sm">連絡先：</p>
                        <p className="text-sm">Email: inquiry.otoiawase@tbwahakuhodo.co.jp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">データ削除のタイムライン</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold">即時削除</p>
                        <p className="text-sm text-gray-600">ローカルデータ（ブラウザ内のデータ）</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold">1時間後に自動削除</p>
                        <p className="text-sm text-gray-600">Instagram投稿データのキャッシュ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold">90日後に自動削除</p>
                        <p className="text-sm text-gray-600">アクセスログ</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-semibold">リクエストから30日以内</p>
                        <p className="text-sm text-gray-600">手動削除リクエストへの対応</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-4">Meta社の要件について</h2>
              <p className="text-gray-600">
                この削除機能は、Meta社のプラットフォーム要件に準拠して提供されています。
                詳細については、以下のポリシーをご参照ください：
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>
                  <a href="https://developers.facebook.com/docs/development/release/data-deletion-callback" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Meta データ削除要件
                  </a>
                </li>
                <li>
                  <a href="/privacy" 
                     className="text-blue-600 hover:underline">
                    当社プライバシーポリシー
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}