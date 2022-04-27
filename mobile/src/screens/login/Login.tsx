import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

export const Login: FC<Props> = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
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