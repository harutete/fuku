import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { AuthContext, AuthProvider } from '../libs/context/AuthProvider'
import { DefaultLayout } from '../components/templates/DefaultLayout'

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const AppInit = () => {
  const authContext = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    // ログイン済みの状態でログイン、サインインページに遷移した場合はTOPページにリダイレクトする
    if ((router.pathname === '/login' || router.pathname === '/sign-in') && authContext.user !== null) {
      router.push('/')
    }

    // 未ログインの状態でTOPページに遷移した場合はログインページにリダイレクトする
    if (router.pathname === '/' && authContext.user === null) {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthProvider>
      <AppInit />
      {getLayout(
        <Component {...pageProps} />
      )}
    </AuthProvider>
)
}

export default MyApp
