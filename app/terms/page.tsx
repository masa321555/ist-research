import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold mb-6">利用規約</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <p className="text-sm text-gray-500 mb-4">発効日：2025年1月</p>
              <p>
                この利用規約（以下「本規約」）は、TBWA HAKUHODO（以下「当社」）が提供するInstagram高エンゲージメント投稿分析ツール（以下「本サービス」）の利用条件を定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第1条（適用）</h2>
              <p>
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                本サービスを利用することにより、ユーザーは本規約に同意したものとみなされます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第2条（サービスの内容）</h2>
              <p className="mb-2">本サービスは以下の機能を提供します：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Instagramハッシュタグの検索と分析</li>
                <li>高エンゲージメント投稿の抽出と表示</li>
                <li>エンゲージメント指標の可視化</li>
                <li>検索結果のCSV出力</li>
                <li>その他当社が定める機能</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第3条（利用資格）</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>本サービスはTBWA HAKUHODO社員および関係者向けのツールです</li>
                <li>13歳以上の方がご利用いただけます</li>
                <li>13歳未満の方は保護者の同意が必要です</li>
                <li>本規約に同意いただける方</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第4条（禁止事項）</h2>
              <p className="mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>サーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>APIの制限を回避または悪用する行為</li>
                <li>自動化ツールやボットを使用した過度なアクセス</li>
                <li>取得したデータの第三者への販売または商用利用</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第5条（API利用制限）</h2>
              <p className="mb-2">Instagram Graph APIの利用制限により、以下の制約があります：</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>7日間で30個の異なるハッシュタグまで検索可能</li>
                <li>1時間あたり200回のAPI呼び出し制限</li>
                <li>24時間以内の投稿のみ取得可能（Recent Media）</li>
                <li>データは1時間キャッシュされます</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第6条（知的財産権）</h2>
              <p>
                本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて当社または当社にライセンスを許諾している者に帰属しており、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第7条（サービスの変更・中断）</h2>
              <p>当社は、以下の場合には、ユーザーに事前に通知することなく本サービスの内容を変更し、または本サービスの提供を中断することができるものとします：</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>Instagram Graph APIの仕様変更または利用停止</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第8条（免責事項）</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>本サービスで提供される情報の正確性、最新性、有用性等について、当社は一切保証しません</li>
                <li>本サービスの利用によりユーザーに生じた損害について、当社は一切の責任を負いません</li>
                <li>ユーザー間または第三者との間で生じたトラブルについて、当社は一切責任を負いません</li>
                <li>Instagram Graph APIの変更や停止による影響について、当社は責任を負いません</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第9条（利用規約の変更）</h2>
              <p>
                当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第10条（個人情報の取扱い）</h2>
              <p>
                当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">第11条（準拠法・裁判管轄）</h2>
              <p>
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、東京地方裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">Meta社の利用規約</h2>
              <p>
                本サービスはInstagram Graph APIを使用しているため、以下のMeta社の規約も適用されます：
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <a href="https://www.facebook.com/legal/terms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Meta利用規約
                  </a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/docs/instagram-api/policy" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Instagram Platform Policy
                  </a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/terms" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    Meta Platform Terms
                  </a>
                </li>
              </ul>
            </section>

            <section className="pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">お問い合わせ</h2>
              <p>本規約に関するお問い合わせは、以下までご連絡ください：</p>
              <div className="mt-3 p-4 bg-gray-50 rounded">
                <p className="font-semibold">TBWA HAKUHODO</p>
                <p>Email: inquiry.otoiawase@tbwahakuhodo.co.jp</p>
                <p>住所: 〒105-0023　東京都港区芝浦1-13-10第3東運ビル</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}