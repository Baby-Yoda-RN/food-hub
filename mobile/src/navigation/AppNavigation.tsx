import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ERootStackRoutes, RootStackParams} from './AppNavigation.type';
import {Login, Signup, PhoneRegistration} from '../screens';

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name={ERootStackRoutes.PHONE_REGISTRATION_SCREEN}
          component={PhoneRegistration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
