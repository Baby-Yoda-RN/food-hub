import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes} from './AppNavigation.type';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <BottomTabNavigation />
    </Stack.Navigator>
  );
};
