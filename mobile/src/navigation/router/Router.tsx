import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

export const Router = () => {
  SplashScreen.hide();
  return (
    <NavigationContainer>
      <AuthNavigation />
      {/* <AppNavigation /> */}
    </NavigationContainer>
  );
};
