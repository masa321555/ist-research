"use client"

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from '@/i18n/navigation'
import { useTranslations, useLocale } from 'next-intl'

export default function TermsPage() {
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
            {locale === 'ja' ? '利用規約' : 'Terms of Service'}
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-4">
                {locale === 'ja' ? '発効日：2025年1月' : 'Effective Date: January 2025'}
              </p>
              <p>
                {locale === 'ja'
                  ? 'この利用規約（以下「本規約」）は、TBWA HAKUHODO（以下「当社」）が提供するInstagram高エンゲージメント投稿分析ツール（以下「本サービス」）の利用条件を定めるものです。'
                  : 'These Terms of Service ("Terms") govern the use of the Instagram High Engagement Post Analytics Tool ("Service") provided by TBWA HAKUHODO ("we", "us", or "our").'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第1条（適用）' : 'Article 1 (Application)'}
              </h2>
              <p>
                {locale === 'ja'
                  ? '本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。本サービスを利用することにより、ユーザーは本規約に同意したものとみなされます。'
                  : 'These Terms apply to all relationships between users and us regarding the use of this Service. By using this Service, users are deemed to have agreed to these Terms.'}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第2条（サービスの内容）' : 'Article 2 (Service Contents)'}
              </h2>
              <p className="mb-2">
                {locale === 'ja' ? '本サービスは以下の機能を提供します：' : 'This Service provides the following features:'}
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>Instagramハッシュタグの検索と分析</li>
                    <li>高エンゲージメント投稿の抽出と表示</li>
                    <li>エンゲージメント指標の可視化</li>
                    <li>検索結果のCSV出力</li>
                  </>
                ) : (
                  <>
                    <li>Instagram hashtag search and analysis</li>
                    <li>Extraction and display of high engagement posts</li>
                    <li>Visualization of engagement metrics</li>
                    <li>CSV export of search results</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第3条（禁止事項）' : 'Article 3 (Prohibited Actions)'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>法令または公序良俗に違反する行為</li>
                    <li>サーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                    <li>本サービスの運営を妨害するおそれのある行為</li>
                    <li>不正アクセスをし、またはこれを試みる行為</li>
                    <li>APIの制限を回避または悪用する行為</li>
                    <li>自動化ツールやボットを使用した過度なアクセス</li>
                    <li>取得したデータの第三者への販売または商用利用</li>
                  </>
                ) : (
                  <>
                    <li>Actions that violate laws or public order and morals</li>
                    <li>Actions that destroy or interfere with server or network functions</li>
                    <li>Actions that may interfere with the operation of this Service</li>
                    <li>Unauthorized access or attempts thereof</li>
                    <li>Circumventing or abusing API limitations</li>
                    <li>Excessive access using automation tools or bots</li>
                    <li>Selling or commercial use of obtained data to third parties</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第4条（API利用制限）' : 'Article 4 (API Usage Limits)'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>7日間で30個の異なるハッシュタグまで検索可能</li>
                    <li>1時間あたり200回のAPI呼び出し制限</li>
                    <li>24時間以内の投稿のみ取得可能（Recent Media）</li>
                    <li>データは1時間キャッシュされます</li>
                  </>
                ) : (
                  <>
                    <li>Up to 30 different hashtags can be searched within 7 days</li>
                    <li>200 API calls per hour limit</li>
                    <li>Only posts within 24 hours can be retrieved (Recent Media)</li>
                    <li>Data is cached for 1 hour</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第5条（免責事項）' : 'Article 5 (Disclaimer)'}
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                {locale === 'ja' ? (
                  <>
                    <li>本サービスで提供される情報の正確性、最新性、有用性等について、当社は一切保証しません</li>
                    <li>本サービスの利用によりユーザーに生じた損害について、当社は一切の責任を負いません</li>
                    <li>Instagram Graph APIの変更や停止による影響について、当社は責任を負いません</li>
                  </>
                ) : (
                  <>
                    <li>We make no guarantees regarding the accuracy, currency, or usefulness of information provided by this Service</li>
                    <li>We accept no liability for any damages incurred by users through the use of this Service</li>
                    <li>We are not responsible for any effects caused by changes or discontinuation of Instagram Graph API</li>
                  </>
                )}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? '第6条（準拠法・裁判管轄）' : 'Article 6 (Governing Law)'}
              </h2>
              <p>
                {locale === 'ja'
                  ? '本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。'
                  : 'These Terms shall be governed by Japanese law. Any disputes arising in connection with this Service shall be subject to the exclusive jurisdiction of the Tokyo District Court.'}
              </p>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">
                {locale === 'ja' ? 'お問い合わせ' : 'Contact'}
              </h2>
              <div className="mt-3 p-4 bg-gray-50 rounded">
                <p className="font-semibold">TBWA HAKUHODO</p>
                <p>Email: inquiry.otoiawase@tbwahakuhodo.co.jp</p>
                <p>{locale === 'ja' ? '住所: 〒105-0023　東京都港区芝浦1-13-10第3東運ビル' : 'Address: Daisan Toun Building, 1-13-10 Shibaura, Minato-ku, Tokyo 105-0023, Japan'}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
