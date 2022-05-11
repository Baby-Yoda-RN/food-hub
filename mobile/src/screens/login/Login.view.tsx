import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button, Footer, Container} from '../../components';
import {TLoginScreenViewProps} from './Login.type';
import {styles} from './Login.style';
import {size, color} from '../../theme';
import images from '../../assets/images';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  title,
  email,
  setEmail,
  password,
  setPassword,
  login,
  goToSignUp,
  goBack,
  goToResetPassword,
  isLoading,
}) => {
  return (
    <Container
      isLoading={isLoading}
      backgroundImage={images.authBackground}
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
        <TextInput type="regular" text={email} onChangeText={setEmail} />
      </View>
      <Text style={styles.text}>Password</Text>
      <TextInput
        type="password"
        rightIcon="Eye"
        text={password}
        onChangeText={setPassword}
      />
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, styles.textNavigate]}
          onPress={goToResetPassword}>
          Forgot password?
        </Text>
      </View>
      <Button title="LOGIN" containerStyle={styles.button} onPress={login} />
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
