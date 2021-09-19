import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { loginApp } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

const Login: NextPage = () => {
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const handleLogin = () => {
    loginApp({ email, password })
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <h1>Login</h1>
        <div>
          <form>
            <div>
              <input type="text" placeholder="email" value={email} onChange={handleSetEmail} />
            </div>
            <div>
              <input type="password" placeholder="password" value={password} onChange={handleSetPassword} />
            </div>
            <button type="submit" onSubmit={handleLogin}>Login</button>
          </form>
          <p><Link href="/sign-in"><a>Create new account.</a></Link></p>
        </div>
      </main>
    </div>
  )
}

export default Login
