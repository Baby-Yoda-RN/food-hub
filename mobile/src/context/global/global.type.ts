import { TAuthState } from '../auth'

export type TGlobalState = {
  auth: TAuthState
}

export type TGlobalProvider = {
  reducer:any
  state:any
}