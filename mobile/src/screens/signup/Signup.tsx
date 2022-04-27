import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'Signup'>;

export const Signup: FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <>
      <Button
        title="Go To Login!"
        onPress={() => {
          navigation.navigate('Login', {name: 'Login'});
        }}
      />
      <Text>Signup Screen</Text>
    </>
  );
};
