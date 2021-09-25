import styles from  './index.module.css'

type Props = {
  text: string
}

export const Heading01: React.FC<Props> = ({ text }) => (
  <h1 className={styles.heading01}>{text}</h1>
)