import type { FormEventHandler } from 'react'
import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'

import { createAppAccount } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

const Login: NextPage = () => {
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createAppAccount({ email, password })
  }

  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>

      <main>
        <h1>Sign in</h1>
        <div>
        <form onSubmit={handleSignIn}>
            <div>
              <input type="text" placeholder="email" value={email} onChange={handleSetEmail} />
            </div>
            <div>
              <input type="password" placeholder="password" value={password} onChange={handleSetPassword} />
            </div>
            <input type="submit" value="Sign in" />
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
