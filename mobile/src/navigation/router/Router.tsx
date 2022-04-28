import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation} from '../appNavigation/AppNavigation';

export const Router = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
