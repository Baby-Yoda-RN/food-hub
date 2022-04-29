import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TWelcomeNavigation} from './Welcome.type';
import {WelcomeScreenView} from './Welcome.view';

export const WelcomeScreen: FC<TWelcomeNavigation> = ({navigation}) => {
  return (
    <WelcomeScreenView
      title="Welcome"
      press={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
    />
  );
};
