import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';

export const Router = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  );
};
