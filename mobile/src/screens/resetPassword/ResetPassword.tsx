import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation';
import {TResetPasswordNavigation} from './ResetPassword.type';
import {ResetPasswordView} from './ResetPassword.view';

export const ResetPasswordScreen: FC<TResetPasswordNavigation> = ({
  navigation,
}) => {
  return (
    <ResetPasswordView
      title="Reset Password"
      subtitle="Please enter your email address to request a password reset"
      sendNewPassword={() => navigation.navigate(EAuthNavigationRoutes.VERIFY)}
      goBack={() => navigation.goBack()}
    />
  );
};
