import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";
export type TResetPassword = NativeStackScreenProps<RootStackParams, 'ResetPassword'>

export type TResetPasswordView = {
    values: {
        email: string;
    };
    isLoading?: boolean;
    errors: {
        emailError: string;
        credentialError: string;
    };
    setValues?: Function;
    handleResetPasswordButtonPress?: Function;
}