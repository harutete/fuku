import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import type { NextPageWithLayout } from '../_app'
import { loginApp } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'
import { useDisplayErrorMessage } from '../../hooks/useDisplayErrorMessage'

import { LoginLayout } from '../../components/templates/LoginLayout'
import { Heading01 } from '../../components/atoms/Heading01'
import { Form } from '../../components/organisms/Form'

import styles from './index.module.css'

const Login: NextPageWithLayout = () => {
  const { errorMessage, handleSetErrorMessage } = useDisplayErrorMessage('')
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const router = useRouter()

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.length || !password.length) {
      return handleSetErrorMessage('メールアドレスとパスワードを入力してください')
    } else {
      handleSetErrorMessage('')
    }

    const response = await loginApp({ email, password })

    if (response) {
      router.push('/')
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.login}>
        <Heading01 text="Login" />
        <Form onSubmit={handleLogin} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Login" errorMessage={errorMessage} />
        <p className={styles.signInLink}><Link href="/sign-in">Create account?</Link></p>
      </div>
    </>
  )
}

export default Login

Login.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <LoginLayout>{page}</LoginLayout>
  )
}