import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { createAppAccount } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

import { Heading01 } from '../../components/atoms/Heading01'
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
    <>
      <Head>
        <title>Sign in</title>
      </Head>

      <div>
        <Heading01 text="Sign in" />
        <Form onSubmit={handleSignIn} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Login" />
      </div>
    </>
  )
}

export default Login
