"use client"

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Heart, MessageCircle, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useStore } from '@/store/useStore'
import { generateDummyPosts } from '@/utils/dummyData'
import { InstagramPost } from '@/types'
import PostDetailModal from '@/components/PostDetailModal'

export default function SearchContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  
  const { 
    setSearchResults, 
    searchResults,
    isLoading,
    setIsLoading,
    sortBy,
    setSortBy,
    filterMediaType,
    setFilterMediaType,
    selectedPost,
    setSelectedPost
  } = useStore()
  
  const [displayPosts, setDisplayPosts] = useState<InstagramPost[]>([])

  useEffect(() => {
    if (query) {
      setIsLoading(true)
      setTimeout(() => {
        const dummyPosts = generateDummyPosts(query)
        setSearchResults({
          hashtag: query,
          posts: dummyPosts,
          total_count: dummyPosts.length,
          cached_at: new Date().toISOString(),
          expires_at: new Date(Date.now() + 60 * 60 * 1000).toISOString()
        })
        setIsLoading(false)
      }, 1000)
    }
  }, [query, setSearchResults, setIsLoading])

  useEffect(() => {
    if (searchResults?.posts) {
      let filtered = [...searchResults.posts]
      
      if (filterMediaType !== 'all') {
        filtered = filtered.filter(post => post.media_type === filterMediaType)
      }
      
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'engagement':
            return b.engagement_count - a.engagement_count
          case 'likes':
            return b.like_count - a.like_count
          case 'comments':
            return b.comment_count - a.comment_count
          case 'recent':
            return new Date(b.posted_at).getTime() - new Date(a.posted_at).getTime()
          default:
            return 0
        }
      })
      
      setDisplayPosts(filtered)
    }
  }, [searchResults, sortBy, filterMediaType])

  const handleExportCSV = () => {
    if (!displayPosts.length) return
    
    const csv = [
      ['投稿ID', 'キャプション', 'いいね数', 'コメント数', 'エンゲージメント数', 'メディアタイプ', '投稿日時', 'URL'],
      ...displayPosts.map(post => [
        post.id,
        post.caption.substring(0, 100),
        post.like_count,
        post.comment_count,
        post.engagement_count,
        post.media_type,
        post.posted_at,
        post.permalink
      ])
    ].map(row => row.join(',')).join('\n')
    
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `instagram_${query}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">データを取得中...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              戻る
            </Button>
            <h1 className="text-2xl font-bold">#{query}</h1>
            <span className="text-gray-500">
              {displayPosts.length}件の投稿
            </span>
          </div>
          
          <Button onClick={handleExportCSV} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            CSV出力
          </Button>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">並び替え:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as 'engagement' | 'likes' | 'comments' | 'recent')}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm"
            >
              <option value="engagement">エンゲージメント順</option>
              <option value="likes">いいね順</option>
              <option value="comments">コメント順</option>
              <option value="recent">新着順</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">メディアタイプ:</span>
            <select 
              value={filterMediaType} 
              onChange={(e) => setFilterMediaType(e.target.value as 'all' | 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM')}
              className="px-3 py-1 border border-gray-200 rounded-md text-sm"
            >
              <option value="all">すべて</option>
              <option value="IMAGE">画像</option>
              <option value="VIDEO">動画</option>
              <option value="CAROUSEL_ALBUM">カルーセル</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {displayPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-square relative">
                <Image
                  src={post.media_url}
                  alt={post.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    動画
                  </div>
                )}
                {post.media_type === 'CAROUSEL_ALBUM' && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    複数
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-red-500" />
                      {post.like_count.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      {post.comment_count.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {new Date(post.posted_at).toLocaleDateString('ja-JP')}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-600 line-clamp-2">
                  {post.caption}
                </p>
                {post.username && (
                  <p className="mt-1 text-xs font-medium text-gray-700">
                    @{post.username}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPost && (
          <PostDetailModal
            post={selectedPost}
            isOpen={!!selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </div>
    </div>
  )
}