import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TAuthNavigationRoutes,
  EAuthNavigationRoutes,
} from './AuthNavigation.type';
import {
  SignUpScreen,
  LoginScreen,
  PhoneRegistration,
  WelcomeScreen,
} from '../../screens';

const Stack = createStackNavigator<TAuthNavigationRoutes>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAuthNavigationRoutes.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.PHONE_REGISTRATION}
        component={PhoneRegistration}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.SIGNUP}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
