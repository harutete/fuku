import styles from  './index.module.css'

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <small className={styles.textCopyright}>&copy; 2021 Fu-cloud.</small>
    </div>
  </footer>
)