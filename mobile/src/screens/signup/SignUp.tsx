import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TSignUpNavigation} from './SignUp.type';
import {SignUpScreenView} from './SignUp.view';

export const SignUpScreen: FC<TSignUpNavigation> = ({navigation}) => {
  return (
    <SignUpScreenView
      title="Sign Up"
      onPress={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
    />
  );
};
