import React from 'react';
import {Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Login: any = ({}) => {
    const navigation = useNavigation();
  return (
    <>
      <Button title="Go To SignUp!" onPress={() => {navigation.navigate('Signup')}} />
      <Text>Login</Text>
    </>
  );
};
