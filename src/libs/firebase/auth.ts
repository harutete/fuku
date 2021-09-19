import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const isLoggedIn = () => {
  const auth = getAuth()
  return !!auth.currentUser
}
