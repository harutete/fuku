import styles from  './index.module.css'

interface Props {
  children: React.ReactNode
}

export const MainWrapper: React.FC<Props> = ({ children }) => (
  <div className={styles.main}>
    {children}
  </div>
)