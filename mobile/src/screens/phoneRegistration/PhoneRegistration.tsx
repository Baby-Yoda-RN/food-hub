import React, {FC} from 'react';
import {TPhoneRegistrationProps} from './PhoneRegistration.type';
import {PhoneRegistrationView} from './PhoneRegistration.view';

export const PhoneRegistration: FC<TPhoneRegistrationProps> = () => {
  return <PhoneRegistrationView message="Phone Registration" />;
};
