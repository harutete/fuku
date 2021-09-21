import { UserInfo } from 'firebase/auth'

export interface UserState {
  email: Pick<UserInfo, 'email'>
  uid: Pick<UserInfo, 'uid'>
}