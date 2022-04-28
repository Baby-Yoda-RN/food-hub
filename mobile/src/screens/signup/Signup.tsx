import React, {FC} from 'react';
import { RootStackParams } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TSignup } from "./Signup.type";
import { SignupView } from './Signup.view';

export const Signup: FC<TSignup> = () =>{
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const press = () => {
    navigation.navigate('Login', {name: 'Login'});
  };
  return (
    <SignupView
      press={press}
    />
  )
}