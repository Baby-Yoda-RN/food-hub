import { TAuthState } from '../auth';
import { TUserState } from '../user';

export type TGlobalState = {
  auth: TAuthState,
  userInfo: TUserState,
}

export type TGlobalProvider = {
  reducer: any,
  state: any
}

export type TGlobalReducer = {

}

export type TDispatch = {

}