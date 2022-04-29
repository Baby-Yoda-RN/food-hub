import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button} from '../../components';
import {TLoginScreenViewProps} from './Login.type';
import {styles} from './Login.style';
import {size} from '../../theme';
import {Container} from '../../components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({title, press}) => {
  return (
    <Container>
      <Header
        leftIconName="ChevronLeft"
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput type="regular" />
      </View>
      <Text style={styles.text}>Password</Text>
      <TextInput type="password" rightIcon="Eye" />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.textNavigate]}>Forgot password?</Text>
      </View>
      <Button title="LOGIN" containerStyle={styles.button} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <Text style={[styles.text, styles.textNavigate]} onPress={press}>
          Sign Up
        </Text>
      </View>
    </Container>
  );
};
