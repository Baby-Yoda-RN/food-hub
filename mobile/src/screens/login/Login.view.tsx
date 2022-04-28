import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {TLoginScreenViewProps} from './Login.type';
import {styles} from './Login.style';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({title, press}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button title={`Go to SIGNUP`} onPress={press} />
    </View>
  );
};
