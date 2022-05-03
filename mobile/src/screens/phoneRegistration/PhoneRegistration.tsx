import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {
  TPhoneRegistrationNavigation,
  TPhoneRegistrationProps,
} from './PhoneRegistration.type';
import {PhoneRegistrationView} from './PhoneRegistration.view';

export const PhoneRegistration: FC<TPhoneRegistrationNavigation> = ({
  navigation,
}) => {
  return (
    <PhoneRegistrationView
      title="Registration"
      subtitle="Enter your phone number to verify your account"
      handleSendRequest={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
      handleBackRequest={() => navigation.goBack()}
    />
  );
};
