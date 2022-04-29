import React, {FC} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './SignUp.style';
import {TSignUpScreenViewProps} from './SignUp.type';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({
  title,
  press,
}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Button
        title={`Go to ${title}`}
        onPress={press}
      />
    </View>
  );
};
