import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TSignUpScreenProps} from './SignUp.type';
import {SignUpScreenView} from './SignUp.view';

export const SignUpScreen: FC<TSignUpScreenProps> = ({route, navigation}) => {
  return (
    <SignUpScreenView
      title={route.name}
      press={() => navigation.navigate(EAppNavigationRoutes.LOGIN)}
    />
  );
};
