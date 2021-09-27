import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { getAppStorageList } from '../libs/firebase/storage'

import { ThumbnailList } from '../components/organisms/ThumbnailList'

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
        {list.length && <ThumbnailList items={list} />}
      </div>
    </>
  )
}

export default Home
