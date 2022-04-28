import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";

export type TSignup = NativeStackScreenProps<RootStackParams, 'Signup'>;

export type TSignupView = {
    press: () => void;
}