import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../screens';

const Stack = createNativeStackNavigator();

type TNavigation = {
    Login: {
        name: string | undefined,
        
    }
    Signup: string | undefined;
}

export const AppNavigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
