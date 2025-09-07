import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-6">プライバシーポリシー（改訂版）</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-4">最終更新日：2025年1月</p>
              <p>
                TBWA HAKUHODO（以下「当社」）は、Instagram高エンゲージメント投稿分析ツール（以下「本サービス」）をご利用いただく皆様（以下「ユーザー」）のプライバシーを尊重し、個人情報及び関連情報の保護に努めています。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">1. 収集する情報</h2>
              <p className="mb-2">本サービスは以下の情報を収集します：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>検索したハッシュタグ（ユーザーのブラウザのLocalStorageに保存）</li>
                <li>アクセスログ（IPアドレス、アクセス日時、ユーザーエージェント等のオンライン識別子）</li>
                <li>利用統計情報（検索回数、利用機能など）</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                当社は氏名・メールアドレス等の直接識別子は取得しません。ただし、IPアドレスやユーザーエージェント等は法域によっては個人情報または個人関連情報に該当する可能性があるため、適用法および本ポリシーに基づき適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Instagram Graph APIの使用</h2>
              <p className="mb-2">本サービスはMeta社のInstagram Graph APIを使用し、以下の範囲でデータを取得します：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>公開されているハッシュタグ投稿データのみを取得</li>
                <li>ユーザー個人アカウント情報にはアクセスしない</li>
                <li>RecentメディアはAPI仕様により直近24時間の投稿のみ対象</li>
                <li>取得データは1時間のみキャッシュし、その後自動削除</li>
                <li>スクレイピング等の手法は一切使用しません</li>
                <li>Meta社のプラットフォーム利用規約に準拠</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. 情報の利用目的</h2>
              <p className="mb-2">収集した情報は以下の目的で利用します：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>本サービスの提供および運営</li>
                <li>サービス改善および新機能の開発</li>
                <li>利用統計の分析</li>
                <li>技術的な問題の解決</li>
                <li>不正利用の防止</li>
                <li>法令上の義務履行</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. データの保存と削除</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>検索履歴：ユーザーのブラウザLocalStorageに最大30件まで保存</li>
                <li>Instagram投稿データ：取得から1時間後に自動削除</li>
                <li>アクセスログ：90日間保存後に自動削除</li>
                <li>統計データ：集計後に個別データは削除</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                ユーザーは、第10章に定める窓口を通じて、保有データの削除請求を行うことができます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. 第三者提供・委託</h2>
              <p className="mb-2">当社は、以下の場合を除き、ユーザーの同意なく第三者に情報を提供しません。</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>法令に基づく場合</li>
              </ul>
              <p className="mt-3 mb-2">また、当社は本サービスの運営に必要な範囲で以下を委託する場合があります：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>クラウドホスティング（例：Vercel、Supabase、Redis等）</li>
                <li>アクセス解析・モニタリング（例：Vercel Analytics、Sentry等）</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">
                これら受託者は国外に所在する場合があり、当社は契約に基づき適切に監督します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. セキュリティ</h2>
              <p className="mb-2">当社は、ユーザー情報の保護のために以下の対策を講じます：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>HTTPS通信による暗号化</li>
                <li>APIトークンのサーバー側管理</li>
                <li>定期的なセキュリティアップデート</li>
                <li>アクセス制御およびレート制限</li>
                <li>組織的・技術的・物理的・人的な適切な安全管理措置</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. Cookieおよびローカルストレージの使用</h2>
              <p>
                本サービスは、セッション管理・利用統計のために必要最小限のCookieおよびLocalStorageを使用します。
                ブラウザ設定でこれらを無効化することができますが、一部機能が制限される場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. 子どものプライバシー</h2>
              <p>
                本サービスは未成年者を対象としていません。特に13歳未満の方の利用は想定していません。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. プライバシーポリシーの変更</h2>
              <p>
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                重要な変更がある場合は、本サービス上で通知します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. お問い合わせ・開示等の請求</h2>
              <p>本プライバシーポリシーやユーザー情報の取扱いに関するお問い合わせ、またはユーザー自身の情報の開示・訂正・削除・利用停止等のご請求は、以下までご連絡ください。</p>
              <div className="mt-3 p-4 bg-gray-50 rounded">
                <p className="font-semibold">TBWA HAKUHODO</p>
                <p>Email: privacy@tbwahakuhodo.co.jp</p>
                <p>住所: 〒105-0001 東京都港区虎ノ門</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">11. ユーザーデータの削除方法（Meta要件）</h2>
              <p className="mb-2">
                Metaの要件に基づき、ユーザーデータ削除のための手続きを提供しています。
                削除を希望される場合は以下をご確認ください：
              </p>
              <div className="mt-2 p-4 bg-blue-50 rounded">
                <a href="/data-deletion" className="text-blue-600 hover:underline">
                  https://example.com/data-deletion
                </a>
                <p className="text-sm text-gray-600 mt-2">（実際の運用URLをご指定ください）</p>
              </div>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">12. 参照ポリシー</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a href="https://www.facebook.com/privacy/policy" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Meta プライバシーポリシー
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