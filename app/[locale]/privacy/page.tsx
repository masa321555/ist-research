"use client"

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function PrivacyPage() {
  const router = useRouter()
  const t = useTranslations('common')
  const locale = useLocale()

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
            {locale === 'ja' ? 'プライバシーポリシー（改訂版）' : 'Privacy Policy (Revised)'}
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-4">
                {locale === 'ja' ? '最終更新日：2025年1月' : 'Last Updated: January 2025'}
              </p>
              <p>
                {locale === 'ja'
                  ? 'TBWA HAKUHODO（以下「当社」）は、Instagram高エンゲージメント投稿分析ツール（以下「本サービス」）をご利用いただく皆様（以下「ユーザー」）のプライバシーを尊重し、個人情報及び関連情報の保護に努めています。'
                  : 'TBWA HAKUHODO ("we", "us", or "our") respects the privacy of all users ("you" or "user") of the Instagram High Engagement Post Analytics Tool ("Service") and is committed to protecting personal information and related data.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '1. 収集する情報' : '1. Information We Collect'}
              </h2>
              <p className="mb-2">
                {locale === 'ja' ? '本サービスは以下の情報を収集します：' : 'This Service collects the following information:'}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>検索したハッシュタグ（ユーザーのブラウザのLocalStorageに保存）</li>
                    <li>アクセスログ（IPアドレス、アクセス日時、ユーザーエージェント等のオンライン識別子）</li>
                    <li>利用統計情報（検索回数、利用機能など）</li>
                    <li>Facebookログイン情報（名前、メールアドレス、プロフィール画像）</li>
                  </>
                ) : (
                  <>
                    <li>Searched hashtags (stored in your browser&apos;s LocalStorage)</li>
                    <li>Access logs (IP address, access time, user agent, and other online identifiers)</li>
                    <li>Usage statistics (search count, features used, etc.)</li>
                    <li>Facebook login information (name, email, profile picture)</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '2. Instagram Graph APIの使用' : '2. Use of Instagram Graph API'}
              </h2>
              <p className="mb-2">
                {locale === 'ja'
                  ? '本サービスはMeta社のInstagram Graph APIを使用し、以下の範囲でデータを取得します：'
                  : 'This Service uses Meta\'s Instagram Graph API to retrieve data within the following scope:'}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>公開されているハッシュタグ投稿データのみを取得</li>
                    <li>RecentメディアはAPI仕様により直近24時間の投稿のみ対象</li>
                    <li>取得データは1時間のみキャッシュし、その後自動削除</li>
                    <li>スクレイピング等の手法は一切使用しません</li>
                    <li>Meta社のプラットフォーム利用規約に準拠</li>
                  </>
                ) : (
                  <>
                    <li>Only publicly available hashtag post data is retrieved</li>
                    <li>Recent media is limited to posts from the last 24 hours per API specifications</li>
                    <li>Retrieved data is cached for 1 hour only, then automatically deleted</li>
                    <li>No scraping or similar techniques are used</li>
                    <li>Compliant with Meta platform terms of service</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '3. 情報の利用目的' : '3. Purpose of Information Use'}
              </h2>
              <p className="mb-2">
                {locale === 'ja' ? '収集した情報は以下の目的で利用します：' : 'Collected information is used for the following purposes:'}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>本サービスの提供および運営</li>
                    <li>サービス改善および新機能の開発</li>
                    <li>利用統計の分析</li>
                    <li>技術的な問題の解決</li>
                    <li>不正利用の防止</li>
                    <li>法令上の義務履行</li>
                  </>
                ) : (
                  <>
                    <li>Provision and operation of this Service</li>
                    <li>Service improvement and new feature development</li>
                    <li>Usage statistics analysis</li>
                    <li>Technical problem resolution</li>
                    <li>Prevention of unauthorized use</li>
                    <li>Legal compliance</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '4. データの保存と削除' : '4. Data Storage and Deletion'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>検索履歴：ユーザーのブラウザLocalStorageに最大30件まで保存</li>
                    <li>Instagram投稿データ：取得から1時間後に自動削除</li>
                    <li>アクセスログ：90日間保存後に自動削除</li>
                    <li>統計データ：集計後に個別データは削除</li>
                  </>
                ) : (
                  <>
                    <li>Search history: Up to 30 items stored in your browser&apos;s LocalStorage</li>
                    <li>Instagram post data: Automatically deleted 1 hour after retrieval</li>
                    <li>Access logs: Automatically deleted after 90 days</li>
                    <li>Statistical data: Individual data deleted after aggregation</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '5. セキュリティ' : '5. Security'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>HTTPS通信による暗号化</li>
                    <li>APIトークンのサーバー側管理</li>
                    <li>定期的なセキュリティアップデート</li>
                    <li>アクセス制御およびレート制限</li>
                  </>
                ) : (
                  <>
                    <li>Encryption via HTTPS communication</li>
                    <li>Server-side API token management</li>
                    <li>Regular security updates</li>
                    <li>Access control and rate limiting</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '6. お問い合わせ' : '6. Contact'}
              </h2>
              <div className="mt-3 p-4 bg-gray-50 rounded">
                <p className="font-semibold">TBWA HAKUHODO</p>
                <p>Email: inquiry.otoiawase@tbwahakuhodo.co.jp</p>
                <p>{locale === 'ja' ? '住所: 〒105-0023　東京都港区芝浦1-13-10第3東運ビル' : 'Address: Daisan Toun Building, 1-13-10 Shibaura, Minato-ku, Tokyo 105-0023, Japan'}</p>
              </div>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '参照ポリシー' : 'Reference Policies'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a href="https://www.facebook.com/privacy/policy"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Meta Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/terms/dfc_platform_terms/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Instagram Platform Policy
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
