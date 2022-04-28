import React, {FC} from 'react';
import {Text} from 'react-native';
import {Button, Header, TextInput} from '../../components';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';

export const PhoneRegistrationView: FC<TPhoneRegistrationViewProps> = () => {
  return (
    <>
      <Header />
      <Text>REGISTRATION</Text>
      <Text>Enter your phone number to verify your account</Text>
      <TextInput type="phone" leftIcon="FlagUSA" />
      <Button title="SEND" />
    </>
  );
};
