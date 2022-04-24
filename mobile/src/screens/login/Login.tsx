import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

export const Login: FC<Props> = ({navigation}: Props) => {
  return (
    <>
      <Button
        title="Go To SignUp!"
        onPress={() => {
          navigation.navigate('Signup', {name: 'Signup'});
        }}
      />
      <Text>Login Screen</Text>
    </>
  );
};
