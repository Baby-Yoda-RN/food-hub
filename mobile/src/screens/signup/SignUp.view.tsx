import React, {FC} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TextInput, Button, Container} from '../../components';
import {TSignUpScreenViewProps} from './SignUp.type';
import {styles} from './SignUp.style';
import {Footer} from '../../components';
import images from '../../assets/images';
import {color} from 'theme';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({
  title,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  signup,
  onPressGoToLogin,
  isLoading = false,
  error,
}) => {
  return (
    <Container
      backgroundImage={images.authBackground}
      isScrollViewDisabled={false}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <Text style={styles.text}>Full Name</Text>
        <TextInput type="regular" value={name} onChangeText={setName} />

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
      {isLoading ? (
        <ActivityIndicator size="small" color={color.primary} />
      ) : (
        <Button
          title="SIGN UP"
          containerStyle={styles.button}
          onPress={signup}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Already Have an account? </Text>
        <Text
          style={[styles.text, styles.textNavigate]}
          onPress={onPressGoToLogin}>
          Login
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
