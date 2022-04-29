import React, {FC} from 'react';
import {EAuthNavigationRoutes,} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Login.type';
import {LoginScreenView} from './Login.view';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {

  
  return (
    <LoginScreenView
      title="Login"
      press={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
    />
  );
};
