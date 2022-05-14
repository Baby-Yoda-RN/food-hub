import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {
  TResetPasswordNavigation,
  TResetPasswordProps,
} from './ResetPassword.type';
import {ResetPasswordView} from './ResetPassword.view';

export const ResetPasswordScreen: FC<TResetPasswordNavigation> = ({
  navigation,
}) => {
  return (
    <ResetPasswordView
      title="Reset Password"
      subtitle="Please enter your email address to request a password reset"
      press={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
    />
  );
};
