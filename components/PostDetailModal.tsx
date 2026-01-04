"use client"

import Image from 'next/image'
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
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'

interface PostDetailModalProps {
  post: InstagramPost
  isOpen: boolean
  onClose: () => void
}

export default function PostDetailModal({ post, isOpen, onClose }: PostDetailModalProps) {
  const t = useTranslations('postDetail')
  const tSearch = useTranslations('search')
  const locale = useLocale()
  const [copied, setCopied] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(post.permalink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('title')}</DialogTitle>
          <DialogDescription>
            {new Date(post.posted_at).toLocaleDateString(locale === 'ja' ? 'ja-JP' : 'en-US', {
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
              <Image
                src={post.media_url}
                alt={post.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {tSearch('video')}
                </div>
              )}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {tSearch('carousel')}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {post.username && (
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {locale === 'ja' ? '投稿者' : 'Posted by'}
                </h3>
                <p className="text-lg font-semibold">@{post.username}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                {locale === 'ja' ? 'エンゲージメント指標' : 'Engagement Metrics'}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    {t('likes')}
                  </span>
                  <span className="font-bold text-lg">{post.like_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                    {t('comments')}
                  </span>
                  <span className="font-bold text-lg">{post.comment_count.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <span className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                    {t('totalEngagement')}
                  </span>
                  <span className="font-bold text-lg text-purple-600">{post.engagement_count.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                {locale === 'ja' ? 'キャプション' : 'Caption'}
              </h3>
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
                {t('viewOnInstagram')}
              </Button>
              <Button
                variant="outline"
                onClick={handleCopyLink}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? t('linkCopied') : t('copyLink')}
              </Button>
            </div>

            <div className="text-xs text-gray-500 pt-2 border-t">
              <p>{locale === 'ja' ? 'メディアタイプ' : 'Media Type'}: {post.media_type}</p>
              <p>{locale === 'ja' ? '投稿ID' : 'Post ID'}: {post.id}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
