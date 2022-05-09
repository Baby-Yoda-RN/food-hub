import { authReducer } from "../auth";
import { TGlobalState } from "./global.type";

export const globalReducer = (state: TGlobalState, action:any) => ({
  auth:authReducer(state.auth,action)
})