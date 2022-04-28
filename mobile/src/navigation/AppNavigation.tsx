import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './AppNavigation.type';
import {Login, Signup} from '../screens';
import {PhoneRegistrationView} from '../screens/phoneRegistration/PhoneRegistration.view';

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="PhoneRegistration"
          component={PhoneRegistrationView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
