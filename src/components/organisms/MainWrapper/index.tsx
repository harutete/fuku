import styles from  './index.module.css'

interface Props {
  children: React.ReactNode
}

export const MainWrapper: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    {children}
  </main>
)