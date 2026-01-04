export interface InstagramPost {
  id: string
  caption: string
  permalink: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  like_count: number
  comment_count: number
  engagement_count: number
  posted_at: string
  username?: string
  account_name?: string
}

export interface Hashtag {
  id: string
  name: string
  post_count?: number
  last_queried?: string
}

export interface SearchResult {
  hashtag: string
  posts: InstagramPost[]
  total_count: number
  cached_at?: string
  expires_at?: string
}

export interface ApiUsageStatus {
  hashtag_usage: {
    used: number
    limit: number
    period: string
    reset_at: string
  }
  api_calls: {
    used: number
    limit: number
    period: string
  }
}

export interface User {
  id: string
  name: string
  email?: string
  picture?: string
  accessToken: string
  instagramAccountId?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}