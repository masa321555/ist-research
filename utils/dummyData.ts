import { InstagramPost } from '@/types'

export const generateDummyPosts = (hashtag: string): InstagramPost[] => {
  const dummyPosts: InstagramPost[] = []
  const mediaTypes: Array<'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'> = ['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM']
  const usernames = ['tokyo_cafe_lover', 'coffee_addict_jp', 'cafe_hopper_tokyo', 'sweet_tokyo', 'japan_foodie']
  
  for (let i = 1; i <= 50; i++) {
    const likeCount = Math.floor(Math.random() * 10000) + 100
    const commentCount = Math.floor(Math.random() * 500) + 10
    
    dummyPosts.push({
      id: `dummy_${i}`,
      caption: `${hashtag} で見つけた素敵なカフェ☕️ #tokyo #cafe #coffee #japan #instafood #カフェ巡り #東京グルメ`,
      permalink: `https://www.instagram.com/p/dummy_${i}/`,
      media_type: mediaTypes[Math.floor(Math.random() * mediaTypes.length)],
      media_url: `https://picsum.photos/seed/${i}/640/640`,
      thumbnail_url: `https://picsum.photos/seed/${i}/320/320`,
      like_count: likeCount,
      comment_count: commentCount,
      engagement_count: likeCount + commentCount,
      posted_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      username: usernames[Math.floor(Math.random() * usernames.length)],
      account_name: usernames[Math.floor(Math.random() * usernames.length)]
    })
  }
  
  return dummyPosts.sort((a, b) => b.engagement_count - a.engagement_count)
}