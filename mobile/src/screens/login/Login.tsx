import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Login.type';
import {LoginScreenView} from './Login.view';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  return (
    <LoginScreenView
      title="Login"
      isLoading={false}
      goToSignUp={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
      goBack={() => navigation.goBack()}
      goToResetPassword={() =>
        navigation.navigate(EAuthNavigationRoutes.RESET_PASSWORD)}
    />
  );
};