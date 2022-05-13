import { Dispatch } from "react";

export type TDispatchData = {
    type: string;
    token?: string | null;
    userInfo?: {
        name: string,
        email: string,
        image: string,
        address: {
            street: string,
            city: string,
            state: string,
            zipcode: number
        },
        phone: string
    }
}

export type THandleLogin = (email: string, password: string, dispatch: Dispatch<TDispatchData>) => void;

export type TUseHandleLogout = (dispatch: Dispatch<TDispatchData>, signOut: string) => void;
