import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {TVerificationCodeProps} from './VerificationCode.type';
import {styles} from './VerificationCode.style';

export const VerificationCode: FC<TVerificationCodeProps> = (
  Textfield = 'VerificationCode',
) => {
  return <Text>{Textfield}</Text>;
};
