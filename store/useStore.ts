"use client"

import { create } from 'zustand'
import { InstagramPost, SearchResult } from '@/types'

interface AppState {
  searchQuery: string
  setSearchQuery: (query: string) => void
  
  searchResults: SearchResult | null
  setSearchResults: (results: SearchResult | null) => void
  
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  
  selectedPost: InstagramPost | null
  setSelectedPost: (post: InstagramPost | null) => void
  
  searchHistory: string[]
  addToSearchHistory: (query: string) => void
  clearSearchHistory: () => void
  
  sortBy: 'engagement' | 'likes' | 'comments' | 'recent'
  setSortBy: (sort: 'engagement' | 'likes' | 'comments' | 'recent') => void
  
  filterMediaType: 'all' | 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  setFilterMediaType: (type: 'all' | 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM') => void
}

export const useStore = create<AppState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  searchResults: null,
  setSearchResults: (results) => set({ searchResults: results }),
  
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  
  selectedPost: null,
  setSelectedPost: (post) => set({ selectedPost: post }),
  
  searchHistory: [],
  addToSearchHistory: (query) => set((state) => ({
    searchHistory: [query, ...state.searchHistory.filter(q => q !== query)].slice(0, 30)
  })),
  clearSearchHistory: () => set({ searchHistory: [] }),
  
  sortBy: 'engagement',
  setSortBy: (sort) => set({ sortBy: sort }),
  
  filterMediaType: 'all',
  setFilterMediaType: (type) => set({ filterMediaType: type }),
}))