import React from 'react'
import Link from 'next/link'

import styles from  './index.module.css'

type Props = {
  label: string
  href?: string
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ label, href, onClick }) => {
  if (href) {
    return <Link href={href}><a className={styles.button}>{label}</a></Link>
  } else {
    return <button className={styles.button} onClick={onClick}>{label}</button>
  }
}
