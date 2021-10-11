import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage'
import { getFirebaseApp } from './initializeApp'

export const getAppStorage = () =>  getStorage(getFirebaseApp())

export const getAppStorageList = async () => {
  const storageListRef = ref(getAppStorage(), 'images')
  const listResponse = await listAll(storageListRef)
  return await Promise.all(listResponse.items.map(async (item) => await getDownloadURL(item)))
}