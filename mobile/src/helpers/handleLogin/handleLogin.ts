import { foodHubAPI } from "../../config";
import { THandleLogin } from "./handleLogin.type";

export const handleLogin: THandleLogin = async (email, password) => {
    const response = await foodHubAPI.post('/login', {
        email,
        password,
    });

    try {
        if (response.status === 200) {
            if (response.data.token) {
                return {token: response.data.token}
            } else {
                return {token: undefined}
            }
        }
    } catch (error) {
        console.error(error);
        return {token: undefined}
    }

    return {token: undefined}
};