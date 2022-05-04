import React, {FC} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TextInput, Header, Button, Footer, Container} from '../../components';
import {TLoginScreenViewProps} from './Login.type';
import {styles} from './Login.style';
import {size, color, font} from '../../theme';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  title,
  goToSignUp,
  goBack,
  goToResetPassword,
  isLoading,
}) => {
  return (
    <Container
      isLoading={isLoading}
      backgroundImage={require('../../assets/background/auth_background.png')}
      isScrollViewDisabled={false}
      header={
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftIconStyle={{backgroundColor: color.white}}
          leftPress={goBack}
        />
      }>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput type="regular" />
      </View>
      <Text style={styles.text}>Password</Text>
      <TextInput type="password" rightIcon="Eye" />
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, styles.textNavigate]}
          onPress={goToResetPassword}>
          Forgot password?
        </Text>
      </View>
      <Button title="LOGIN" containerStyle={styles.button} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Don't have an account? </Text>
        <Text style={[styles.text, styles.textNavigate]} onPress={goToSignUp}>
          Sign Up
        </Text>
      </View>
        <Footer
          divider="Sign in with"
          dividerTextStyle={styles.footerText}
          dividerStyle={styles.footerLine}
          isEmailorPhone={false}
          onPress={() => {}}
        />
    </Container>
  );
};
