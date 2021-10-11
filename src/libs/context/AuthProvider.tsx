import React, { createContext, useState, useEffect } from 'react'

import { UserState } from '../../models/auth'
import { getAppAuth } from '../../libs/firebase/auth'

type Props = {
  children: React.ReactNode
}

const initialState = {
  user: null
}

export const AuthContext = createContext<{ user: UserState | null }>(initialState)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<{ user: UserState | null }>(initialState);

  useEffect(() => {
    const { currentUser } = getAppAuth()

    if (currentUser && user === null) {
      setUser({
        user: {
          email: currentUser.email,
          uid: currentUser.uid
        }
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ user, getAppAuth }}>{children}</AuthContext.Provider>
  );
};