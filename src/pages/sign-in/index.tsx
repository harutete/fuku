import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import type { NextPageWithLayout } from '../_app'
import { createAppAccount } from '../../libs/firebase/auth'
import { useInput } from '../../hooks/useInput'

import { Heading01 } from '../../components/atoms/Heading01'
import { LoginLayout } from '../../components/templates/LoginLayout'
import { Form } from '../../components/organisms/Form'

import styles from './index.module.css'

const SignIn: NextPageWithLayout = () => {
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
      <div className={styles.signIn}>
        <Heading01 text="Sign in" />
        <Form onSubmit={handleSignIn} email={email} handleSetEmail={handleSetEmail} password={password} handleSetPassword={handleSetPassword} submitValue="Sign in" />
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