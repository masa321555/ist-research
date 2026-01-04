"use client"

import { useState, useEffect, useCallback } from 'react'
import { User } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  })

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me')
      const data = await response.json()
      setAuthState({
        user: data.user,
        isAuthenticated: data.isAuthenticated,
        isLoading: false
      })
    } catch {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false
      })
    }
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = (locale: string = 'ja') => {
    window.location.href = `/api/auth/facebook?locale=${locale}`
  }

  const logout = async (locale: string = 'ja') => {
    window.location.href = `/api/auth/logout?locale=${locale}`
  }

  return {
    ...authState,
    login,
    logout,
    checkAuth
  }
}
