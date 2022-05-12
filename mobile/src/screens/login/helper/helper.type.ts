import { Dispatch } from "react";

export type TDispatchData = {
    type: string;
    token: string | undefined | null;
}

export type THandleLogin = (email: string, password: string, dispatch: Dispatch<TDispatchData>) => void;

export type TUseHandleLogout = (dispatch: Dispatch<TDispatchData>, signOut: string) => void;
