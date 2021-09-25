import styles from  './index.module.css'

type Props = {
  items: string[]
}

export const ThumbnailList: React.FC<Props> = ({ items }) => (
  <>
    {items.length &&
    (<ul className={styles.thumbnailList}>
      {items.map((item, index) =>
        <li key={index}><img src={item} /></li>
      )}
    </ul>)}
  </>
)