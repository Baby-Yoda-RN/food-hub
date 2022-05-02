import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import {AppTheme} from '../../theme/apptheme/AppTheme';
export const Router = () => {
  return (
    <NavigationContainer theme={AppTheme.orange}>
      <AuthNavigation />
      {/* <AppNavigation /> */}
    </NavigationContainer>
  );
};
