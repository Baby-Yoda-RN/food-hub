export type TUserState = {
  isSignOut: boolean
  token: string | null
  isLoading: boolean
}

export type TUserAction = {
  type:EUserAction
  token: string | null
}

export enum EUserAction {
  RESTORE_TOKEN = 'RESTORE_TOKEN',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}