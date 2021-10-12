import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { AuthProvider } from '../libs/context/AuthProvider'
import { DefaultLayout } from '../components/templates/DefaultLayout'

import '../styles/globals.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <AuthProvider>
      {getLayout(
        <Component {...pageProps} />
      )}
    </AuthProvider>
)
}

export default MyApp
