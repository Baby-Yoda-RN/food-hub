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
  ResetPasswordScreen,
  VerifyScreen,
} from '../../screens';
import StorybookUIRoot from '../../../storybook';

const Stack = createStackNavigator<TAuthNavigationRoutes>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAuthNavigationRoutes.WELCOME}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.SIGNUP}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.PHONE_REGISTRATION}
        component={PhoneRegistration}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.VERIFY}
        component={VerifyScreen}
      />
      <Stack.Screen
        name={EAuthNavigationRoutes.STORY_BOOK}
        component={StorybookUIRoot}
      />
    </Stack.Navigator>
  );
};
