import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation';
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
      press={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
    />
  );
};
