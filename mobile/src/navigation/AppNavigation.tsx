import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../screens';

const AppStack = createNativeStackNavigator();

export const AppNavigation: any = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Signup" component={Signup} />
    </AppStack.Navigator>
  );
};
