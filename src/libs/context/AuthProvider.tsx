import React, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { getAppAuth } from '../firebase/auth'
import type { User } from '@firebase/auth'

type AuthContextType = {
  user: User | null
}

type Props = {
  children: React.ReactNode
}

const initialState = {
  user: null,
}

export const AuthContext = createContext<AuthContextType>(initialState)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<{ user: User | null }>(initialState);
  const handleSetUser = (user: User | null) => {
    setUser({ user })
  }

  useEffect(() => {
    const { currentUser } = getAppAuth()
    console.log({currentUser})
    // ログイン済みの状態でログイン、サインインページに遷移した場合はTOPページにリダイレクトする
    if ((router.pathname === '/login' || router.pathname === '/sign-in') && currentUser !== null) {
      router.push('/')
    }

    // 未ログインの状態でTOPページに遷移した場合はログインページにリダイレクトする
    if (router.pathname === '/' && currentUser === null) {
      router.push('/login')
    }

    setUser({ user: currentUser })
  }, [router.pathname])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};