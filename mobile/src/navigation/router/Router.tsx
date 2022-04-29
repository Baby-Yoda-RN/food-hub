import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from '../authNavigation/AuthNavigation';

export const Router = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};
