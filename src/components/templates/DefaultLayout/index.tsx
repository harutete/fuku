import { useRouter } from 'next/router'

import { logoutApp } from '../../../libs/firebase/auth'

import { Header } from '../../organisms/Header'
import { MainWrapper } from '../../organisms/MainWrapper'
import { Footer } from '../../organisms/Footer'

import styles from  './index.module.css'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter()
  const handleLogoutApp = async () => {
    await logoutApp()
    router.push('/login')
  }

  return (
    <div className={styles.wrapper}>
      <Header isLoggedIn={true} handleLogout={handleLogoutApp()} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  )
}