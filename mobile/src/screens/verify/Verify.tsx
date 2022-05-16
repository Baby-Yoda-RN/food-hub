import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TVerifyScreenNavigation} from './Verify.type';
import {VerifyScreenView} from './Verify.view';

export const VerifyScreen: FC<TVerifyScreenNavigation> = ({navigation}) => {
  return (
    <VerifyScreenView
      title="Verification Code"
      emailName="test@gmail.com"
      goBack={() => navigation.goBack()}
      onPressSubmit={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
      OnPressResend={() =>
        navigation.navigate(EAuthNavigationRoutes.PHONE_REGISTRATION)
      }
    />
  );
};
