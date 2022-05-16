import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TResetPasswordNavigation} from './ResetPassword.type';
import {ResetPasswordView} from './ResetPassword.view';

export const ResetPasswordScreen: FC<TResetPasswordNavigation> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  return (
    <ResetPasswordView
      title="Reset Password"
      subtitle="Please enter your email address to request a password reset"
      sendNewPassword={() => navigation.navigate(EAuthNavigationRoutes.VERIFY)}
      goBack={() => navigation.goBack()}
      setEmail={setEmail}
    />
  );
};
