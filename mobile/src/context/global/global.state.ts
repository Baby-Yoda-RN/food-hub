import { TGlobalState } from "./global.type";
import { authInitialState } from "../auth";
import { userInitialState } from "../user";

export const globalInitialState: TGlobalState = {
  auth: authInitialState,
  userInfo: userInitialState,
}