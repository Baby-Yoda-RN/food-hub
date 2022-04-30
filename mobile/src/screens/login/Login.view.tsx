import React, {FC} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TextInput, Header, Button} from '../../components';
import {TLoginScreenViewProps} from './Login.type';
import {styles} from './Login.style';
import {size, color} from '../../theme';
import {Container} from '../../components';
import BackgroundImage from '../../assets/background/background.svg';
import {Footer} from '../../components';

export const LoginScreenView: FC<TLoginScreenViewProps> = ({
  title,
  goToSignUp,
  goBack,
  goToResetPassword,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const ratioWidthHeight = 383.13 / 88.51;

  return (
    <>
      <View
        style={{height: screenWidth / ratioWidthHeight, width: screenWidth}}>
        <View
          style={[
            {
              height: screenWidth / ratioWidthHeight,
              width: screenWidth,
            },
            styles.backgroundImageContainer,
          ]}>
          <BackgroundImage />
        </View>
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftIconStyle={{backgroundColor: color.white}}
          leftPress={goBack}
        />
      </View>

      <Container isLoading={false}>
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
          isEmailorPhone={false}
          onPress={() => {}}
        />
      </Container>
    </>
  );
};
