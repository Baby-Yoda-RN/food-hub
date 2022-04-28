import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {SignUpScreen, LoginScreen} from '../../screens';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EAppNavigationRoutes.SIGNUP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.LOGIN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
