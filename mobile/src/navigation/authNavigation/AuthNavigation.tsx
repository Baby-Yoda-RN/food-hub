import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
} from './AuthNavigation.type';
import {SignUpScreen, LoginScreen, VerifyScreen} from '../../screens';

const Stack = createStackNavigator<TAuthNavigationRoutes>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAuthNavigationRoutes.VERIFY}
        component={VerifyScreen}
      />
    </Stack.Navigator>
  );
};
