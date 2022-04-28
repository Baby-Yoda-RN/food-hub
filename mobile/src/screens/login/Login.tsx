import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import {TLogin} from './Login.type';
import {LoginView} from './Login.view';

export const Login: FC<TLogin> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const press = () => {
    navigation.navigate('Signup', {name: 'Signup'});
  };
  return <LoginView press={press} />;
};
