import { ErrorMessage } from '../../atoms/ErrorMessage'

import styles from  './index.module.css'

type Props = {
  onSubmit: any;
  email: string;
  handleSetEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handleSetPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitValue: string
  errorMessage: string
}

export const Form: React.FC<Props> = ({ onSubmit, email, handleSetEmail, password, handleSetPassword, submitValue, errorMessage }) => (
  <form onSubmit={onSubmit}>
    {!!errorMessage.length && <ErrorMessage text={errorMessage} />}
    <ul className={styles.formList}>
      <li>
        <input type="text" placeholder="email" value={email} onChange={handleSetEmail} />
      </li>
      <li>
      <input type="password" placeholder="password" value={password} onChange={handleSetPassword} />
      </li>
    </ul>
    <div className={styles.buttonSubmitWrap}>
      <button type="submit" className={styles.buttonSubmit}>{submitValue}</button>
    </div>
  </form>
)