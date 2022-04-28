import React, {FC} from 'react';
import {Text} from 'react-native';
import {TPhoneRegistrationViewProps} from './PhoneRegistration.type';

export const PhoneRegistrationView: FC<
  TPhoneRegistrationViewProps
> = message => {
  return <Text>{message}</Text>;
};
