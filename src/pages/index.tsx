import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { getAppStorageList } from '../libs/firebase/storage'

import { ThumbnailList } from '../components/organisms/ThumbnailList'
import { useDisplayErrorMessage } from '../hooks/useDisplayErrorMessage'
import { ErrorMessage } from '../components/atoms/ErrorMessage'
import { FirebaseError } from '@firebase/util'

const Home: NextPage = () => {
  const [list, setList] = useState<string[]>([])
  const { errorMessage, handleSetErrorMessage } = useDisplayErrorMessage('')
  useEffect(() => {
    const getImageList = async () => {
      try {
        const imageList = await getAppStorageList()
        return setList(imageList ? imageList : [])
      } catch(error) {
        if (error instanceof FirebaseError) {
          handleSetErrorMessage(error.code)
        }
      }
    }
    getImageList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Fuku</title>
      </Head>

      <div>
        <h1>Fuku</h1>
        {!!errorMessage.length && <ErrorMessage text={errorMessage} />}
        {!!list.length && <ThumbnailList items={list} />}
      </div>
    </>
  )
}

export default Home
