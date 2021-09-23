import { getStorage, ref, listAll } from 'firebase/storage'
import { getFirebaseApp } from './initializeApp'

export const getAppStorage = () =>  getStorage(getFirebaseApp())

export const getAppStorageList = async () => {
  const storageListRef = ref(getAppStorage(), 'images')

  try {
    const listResponse = await listAll(storageListRef)
    return listResponse.items.map((item) => `gs://${item.bucket}/${item.fullPath}`)
  } catch(error) {
    console.error(error)
  }
}