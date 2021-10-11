import { User } from '@firebase/auth'
import React, { createContext, useState } from 'react'

type AuthContextType = {
  user: User | null
  handleSetUser?: (user: User | null) => void
}

type Props = {
  children: React.ReactNode
}

const initialState = {
  user: null,
}

export const AuthContext = createContext<AuthContextType>(initialState)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<{ user: User | null }>(initialState);
  const handleSetUser = (user: User | null) => {
    setUser({ user })
  }
  return (
    <AuthContext.Provider value={{ user, handleSetUser }}>{children}</AuthContext.Provider>
  );
};