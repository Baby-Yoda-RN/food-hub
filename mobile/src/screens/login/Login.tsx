import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TLoginScreenProps} from './Login.type';
import {LoginScreenView} from './Login.view';

export const LoginScreen: FC<TLoginScreenProps> = ({route, navigation}) => {
  return (
    <LoginScreenView
      title={route.name}
      press={() => navigation.navigate(EAppNavigationRoutes.SIGNUP)}
    />
  );
};
