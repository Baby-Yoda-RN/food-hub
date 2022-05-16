import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TPhoneRegistrationNavigation} from './PhoneRegistration.type';
import {PhoneRegistrationView} from './PhoneRegistration.view';

export const PhoneRegistration: FC<TPhoneRegistrationNavigation> = ({
  navigation,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <PhoneRegistrationView
      title="Registration"
      subtitle="Enter your phone number to verify your account"
      handleSendRequest={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
      handleBackRequest={() => navigation.goBack()}
      setPhoneNumber={setPhoneNumber}
    />
  );
};
