import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { createAppAccount } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

const Login: NextPage = () => {
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const handleSignIn = () => {
    createAppAccount({ email, password })
  }

  return (
    <div>
      <Head>
        <title>Sign in</title>
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
            <button type="submit" onSubmit={handleSignIn}>Login</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
