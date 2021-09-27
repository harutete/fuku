import styles from  './index.module.css'

type Props = {
  children: React.ReactNode
}

export const MainWrapper: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
)