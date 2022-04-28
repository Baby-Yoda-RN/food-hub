import React, {FC} from "react";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation'
import { useNavigation } from "@react-navigation/native";
import { TResetPassword } from "./ResetPassword.type";
import { ResetPasswordView } from "./ResetPassword.view";

export const ResetPassword: FC<TResetPassword> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const press = () => {
        navigation.navigate('ResetPassword', {name: 'ResetPassword'});
    };
    return(
        <ResetPasswordView press={press}/>
    )
}