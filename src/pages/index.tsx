import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { getAppStorageList } from '../libs/firebase/storage'

const Home: NextPage = () => {
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    const getImageList = async () => {
      const imageList = await getAppStorageList()
      return setList(imageList ? imageList : [])
    }
    getImageList()
  }, [])

  return (
    <>
      <Head>
        <title>Fuku</title>
      </Head>

      <div>
        <h1>Fuku</h1>
        <ul>
        {list.length && list.map((item, index) =>
          <li key={index}><img src={item} /></li>
        )}
        </ul>
      </div>
    </>
  )
}

export default Home
