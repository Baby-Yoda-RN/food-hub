import { TGlobalState } from "./global.type";
import { authReducer } from "../auth";
import { userReducer } from "../user";

export const globalReducer = (state: TGlobalState, action: any) => ({
  auth: authReducer(state.auth, action),
  userInfo: userReducer(state.userInfo, action),
})