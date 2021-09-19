import { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { getAppAuth } from '../libs/firebase/auth'

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    console.log('aaa', getAppAuth())
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
