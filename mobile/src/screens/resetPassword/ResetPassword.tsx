import React, {FC, useState} from "react";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation'
import { useNavigation } from "@react-navigation/native";
import { TResetPassword } from "./ResetPassword.type";
import { ResetPasswordView } from "./ResetPassword.view";

export const ResetPassword: FC<TResetPassword> = () => {
    return <ResetPasswordView />
}