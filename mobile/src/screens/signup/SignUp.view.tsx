import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button} from '../../components';
import {styles} from './SignUp.style';
import {TSignUpScreenViewProps} from './SignUp.type';
import {size} from '../../theme';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({
  title,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={styles.header}
      />
      <Text style={styles.title}>{title}</Text>

      <Text style = {styles.inputTitles}>Full name</Text>
      <TextInput type="regular" />

      <Text style = {styles.inputTitles}>E-mail</Text>
      <TextInput type="regular" />

      <Text style = {styles.inputTitles}>Password</Text>
      <TextInput type="password" rightIcon="Eye" />
      
      <View style={styles.buttonContainer}>
      <Button title="SIGN UP" containerStyle={styles.button} />
      </View>

      <Text style={styles.text} onPress={onPress}>
      Already have an account? Login
      </Text>
    </View>
  );
};
