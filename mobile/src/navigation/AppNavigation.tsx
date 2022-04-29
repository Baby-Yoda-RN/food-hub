import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './AppNavigation.type';
import {Login, Signup, Rating, WelcomeScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Rating" component={Rating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
