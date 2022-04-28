import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import { TSignupProps } from './Signup.type';

export const SignupView: FC<TSignupProps> = ({
    Text = '',
}) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParams>>();
  
    return (

    <Button
        title={Text}
        onPress={() => {
        navigation.navigate('Login', {name: 'Login'});
        }}
    />

    );
  };