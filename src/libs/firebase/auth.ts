import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getFirebaseApp } from './initializeApp'

export const getAppAuth = () => getAuth(getFirebaseApp())

export const createAppAccount = async ({ email, password }: { email: string, password: string }) => {
  const currentAuth = getAppAuth()

  try {
    const userCredential = await createUserWithEmailAndPassword(currentAuth, email, password)
    return userCredential.user
  } catch(error) {
    console.error(error)
  }
}

export const loginApp = async ({ email, password }: { email: string, password: string }) => {
  const currentAuth = getAppAuth()
  try {
    const userCredential = await signInWithEmailAndPassword(currentAuth, email, password)
    return userCredential.user
  } catch(error) {
    console.error(error)
  }
}

export const logoutApp = async () => {
  const currentAuth = getAppAuth()
  try {
    await signOut(currentAuth)
  } catch(error) {
    console.error(error)
  }
}