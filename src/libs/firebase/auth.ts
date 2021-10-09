import { FirebaseError } from '@firebase/util'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getFirebaseApp } from './initializeApp'

export const getAppAuth = () => getAuth(getFirebaseApp())

export const createAppAccount = async ({ email, password }: { email: string, password: string }) => {
  const currentAuth = getAppAuth()
  return await createUserWithEmailAndPassword(currentAuth, email, password)
}

export const loginApp = async ({ email, password }: { email: string, password: string }) => {
  const currentAuth = getAppAuth()
  return await signInWithEmailAndPassword(currentAuth, email, password)
}

export const logoutApp = async () => {
  const currentAuth = getAppAuth()
  try {
    await signOut(currentAuth)
  } catch(error) {
    console.error(error)
    return error as FirebaseError
  }
}