import React, {FC} from "react";
import { Text } from "react-native";
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation'

type Props = NativeStackScreenProps<RootStackParams, "ResetPassword">;

export const ResetPassword: FC<Props> = () => {
    return(
        <Text>Hello World</Text>
    )
}