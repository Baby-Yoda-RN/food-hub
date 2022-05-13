import { authInitialState } from "../auth";
import { TGlobalState } from "./global.type";

export const globalInitialState: TGlobalState = {
  auth:authInitialState
}