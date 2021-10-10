import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import type { NextPageWithLayout } from '../_app'
import { signUpApp } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'
import { useDisplayErrorMessage } from '../../hooks/useDisplayErrorMessage'

import { Heading01 } from '../../components/atoms/Heading01'
import { LoginLayout } from '../../components/templates/LoginLayout'
import { Form } from '../../components/organisms/Form'

import styles from './index.module.css'

const SignIn: NextPageWithLayout = () => {
  const { errorMessage, handleSetErrorMessage } = useDisplayErrorMessage('')
  const { value: email, handleSetValue: handleSetEmail } = useInput('')
  const { value: password, handleSetValue: handleSetPassword } = useInput('')
  const router = useRouter()

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.length || !password.length) {
      return handleSetErrorMessage('メールアドレスとパスワードを入力してください。')
    } else {
      handleSetErrorMessage('')
    }

    try {
      await signUpApp({ email, password })
      router.push('/')
    } catch(error) {
      handleSetErrorMessage('もう一度入力してください。')
    }
  }

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className={styles.signIn}>
        <Heading01 text="Sign in" />
        <Form onSubmit={handleSignIn} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Sign in" errorMessage={errorMessage} />
      </div>
    </>
  )
}

export default SignIn

SignIn.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <LoginLayout>{page}</LoginLayout>
  )
}