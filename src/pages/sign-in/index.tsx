import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { createAppAccount } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

import { Form } from '../../components/organisms/Form'

const Login: NextPage = () => {
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const router = useRouter()

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await createAppAccount({ email, password })

    if (response) {
      router.push('/')
    }
  }

  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>

      <main>
        <h1>Sign in</h1>
        <Form onSubmit={handleSignIn} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Login" />
      </main>
    </div>
  )
}

export default Login
