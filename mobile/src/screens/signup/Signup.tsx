import React from 'react';
import {Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Signup: any = () => {
    const navigation = useNavigation();
  return (
    <>
      <Button title="Go To Login" onPress={() => {navigation.navigate('Login')}} />
      <Text>Signup</Text>
    </>
  );
};
