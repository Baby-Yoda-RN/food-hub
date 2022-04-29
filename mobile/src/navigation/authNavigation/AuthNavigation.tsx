import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAuthNavigationRoutes, EAuthNavigationRoutes} from './AuthNavigation.type';
import {SignUpScreen, LoginScreen} from '../../screens';

const Stack = createStackNavigator<TAuthNavigationRoutes>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EAuthNavigationRoutes.SIGNUP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.LOGIN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};