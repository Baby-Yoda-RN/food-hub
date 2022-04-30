import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Button} from '../../components';
import {TSignUpScreenViewProps} from './SignUp.type';
import {styles} from './SignUp.style';
import {size, color} from '../../theme';
import {Container} from '../../components';
import BackgroundImage from '../../assets/background/background.svg';
import {Footer} from '../../components';

export const SignUpScreenView: FC<TSignUpScreenViewProps> = ({
  title,
  onPressGoToLogin,
}) => {

    return (

      <>
      <View
        style={styles.backgroundImageContainer}>
          <BackgroundImage />
      </View>

      <Container isLoading={false}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.textInputContainer}>
          <Text style={styles.text}>Full Name</Text>
          <TextInput type="regular" />

          <Text style={styles.text}>E-mail</Text>
          <TextInput type="regular" />
        </View>


        <Text style={styles.text}>Password</Text>
        <TextInput type="password" rightIcon="Eye" />
        
        <Button title="SIGN UP" containerStyle={styles.button} />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <Text style={[styles.text, styles.textNavigate]} onPress={onPressGoToLogin}>
            Login
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
