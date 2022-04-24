import React, {FC} from 'react';
import {Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';

type Props = NativeStackScreenProps<RootStackParams, 'Signup'>;

export const Signup: FC<Props> = ({navigation}: Props) => {
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
