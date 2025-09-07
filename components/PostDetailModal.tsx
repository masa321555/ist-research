"use client"

import { Heart, MessageCircle, ExternalLink, Copy, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { InstagramPost } from '@/types'

interface PostDetailModalProps {
  post: InstagramPost
  isOpen: boolean
  onClose: () => void
}

export default function PostDetailModal({ post, isOpen, onClose }: PostDetailModalProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(post.permalink)
    alert('リンクをコピーしました')
  }

  const engagementRate = ((post.engagement_count / (post.like_count + 1)) * 100).toFixed(2)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>投稿詳細</DialogTitle>
          <DialogDescription>
            投稿日: {new Date(post.posted_at).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  動画
                </div>
              )}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  複数枚投稿
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {post.username && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">投稿者</h3>
                <p className="text-lg font-semibold">@{post.username}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">エンゲージメント指標</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    いいね数
                  </span>
                  <span className="font-bold text-lg">{post.like_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                    コメント数
                  </span>
                  <span className="font-bold text-lg">{post.comment_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    総エンゲージメント
                  </span>
                  <span className="font-bold text-lg text-purple-600">{post.engagement_count.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">キャプション</h3>
              <div className="p-3 bg-gray-50 rounded-lg max-h-40 overflow-y-auto">
                <p className="text-sm whitespace-pre-wrap">{post.caption}</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1"
                onClick={() => window.open(post.permalink, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Instagramで見る
              </Button>
              <Button 
                variant="outline"
                onClick={handleCopyLink}
              >
                <Copy className="mr-2 h-4 w-4" />
                リンクをコピー
              </Button>
            </div>

            <div className="text-xs text-gray-500 pt-2 border-t">
              <p>メディアタイプ: {post.media_type}</p>
              <p>投稿ID: {post.id}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}