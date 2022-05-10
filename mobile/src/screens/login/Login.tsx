import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Login.type';
import {LoginScreenView} from './Login.view';
import {useHandleLogin} from './helper';
import {useGlobalState} from '../../context/global';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  const {dispatch} = useGlobalState();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const loginPress = async () =>
    await useHandleLogin(email!, password!, dispatch);

  return (
    <LoginScreenView
      title="Login"
      email={email!}
      setEmail={setEmail}
      password={password!}
      setPassword={setPassword}
      login={() => loginPress()}
      isLoading={false}
      goToSignUp={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
      goBack={() => navigation.goBack()}
      goToResetPassword={() =>
        navigation.navigate(EAuthNavigationRoutes.RESET_PASSWORD)
      }
    />
  );
};
