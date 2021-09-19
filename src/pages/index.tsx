import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import firebase from '../libs/firebase/initializeApp'
import { isLoggedIn } from '../libs/firebase/Auth'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    const firebaseApp = firebase
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Fuku</title>
      </Head>

      <main>
        <h1>Fuku</h1>
        <ul>
          <li>thumbnail</li>
        </ul>
      </main>
    </div>
  )
}

export default Home
