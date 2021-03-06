import React, {FC} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
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
  error,
}) => {
  return (
    <Container
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
      {(typeof error !== 'undefined') && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View style={styles.textInputContainer}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput type="regular" value={email} onChangeText={setEmail} />
      </View>
      <Text style={styles.text}>Password</Text>
      <TextInput
        type="password"
        rightIcon="Eye"
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.textContainer}>
        <Text
          style={[styles.text, styles.textNavigate]}
          onPress={goToResetPassword}>
          Forgot password?
        </Text>
      </View>
      {isLoading?
        <ActivityIndicator size={'small'} color={color.primary}/>
        :
        <Button title="LOGIN" containerStyle={styles.button} onPress={login} />
      }
      
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
