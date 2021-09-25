import React from "react";

import { Header } from '../../organisms/Header'
import { MainWrapper } from '../../organisms/MainWrapper'
import { Footer } from '../../organisms/Footer'

import styles from  './index.module.css'

interface Props {
  children: React.ReactNode
}

export const LoginLayout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>
      <MainWrapper>{children}</MainWrapper>
    </main>
    <Footer />
  </div>
)
