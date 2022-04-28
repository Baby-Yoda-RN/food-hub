import React, {FC, useState} from "react";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation'
import { useNavigation } from "@react-navigation/native";
import { TResetPassword } from "./ResetPassword.type";
import { ResetPasswordView } from "./ResetPassword.view";

export const ResetPassword: FC<TResetPassword> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    const [errors, setErrors] = useState({
        emailError: '',
        credentialError: '',
    })
    const press = () => {
        navigation.navigate('ResetPassword', {name: 'ResetPassword'});
    };
    const [values, setValues] = useState({email: ''})
    const [isLoading, setIsLoading] = useState(false)
    const handleResetPasswordButtonPress = async () => {
        setErrors({emailError: '',credentialError: ''});
        setIsLoading(true);
        if (isValidEmail(values.email) || !values.email) {
            setErrors(prevState => ({
              ...prevState,
              emailError: 'Valid email is required',
            }));
            setIsLoading(false);
        }   else{
                const response = await signIn(values);
                if (response.error) {
                    setErrors(prevState => ({
                    ...prevState,
                    credentialError: response.error,
                }));
                setIsLoading(false);
            }
        }
    }

    return(
        <ResetPasswordView 
            values={values}
            setValues={setValues}
            isLoading={isLoading}
            errors={errors}
            handleResetPasswordButtonPress={handleResetPasswordButtonPress}
        />
    )
}