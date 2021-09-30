import styles from  './index.module.css'
type Props = {
  isLoggedIn: boolean
  handleLogout?: () => Promise<void>
}

export const Header: React.FC<Props> = ({ isLoggedIn, handleLogout }) => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.headerTitle}>Fu-cloud</div>
      {isLoggedIn &&
        <div className={styles.logoutButton} onClick={handleLogout}>Logout</div>
      }
    </div>
  </header>
)
