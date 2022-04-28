import React, {FC} from 'react';
import {Text, View, Button} from 'react-native';
import {TLoginView} from './Login.type';

export const LoginView: FC<TLoginView> = ({press}) => {
  return (
    <View>
      <Button title="Go To SignUp!" onPress={press} />
      <Text>Login Screen: Hello Login</Text>
    </View>
  );
};
