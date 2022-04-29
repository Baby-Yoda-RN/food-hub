import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EAppNavigationRoutes, TAppNavigationRoutes} from './AppNavigation.type';
import {Login, Signup, PhoneRegistration, Rating} from '../screens';

const Stack = createNativeStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={EAppNavigationRoutes.PHONE_REGISTRATION}
          component={PhoneRegistration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
