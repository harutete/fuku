import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { loginApp } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

import { Form } from '../../components/organisms/Form'

import styles from './index.module.css'

const Login: NextPage = () => {
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const router = useRouter()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await loginApp({ email, password })

    if (response) {
      router.push('/')
    }
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <h1>Login</h1>
        <Form onSubmit={handleLogin} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Login" />
      </main>
    </div>
  )
}

export default Login
