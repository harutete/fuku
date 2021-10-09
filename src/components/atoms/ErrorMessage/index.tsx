import styles from  './index.module.css'

type Props = {
  text: string
}

export const ErrorMessage: React.FC<Props> = ({ text }) => (
  <p className={styles.errorMessage}>{text}</p>
)