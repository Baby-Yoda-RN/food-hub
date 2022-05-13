import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {MyDrawer} from '../drawer/DrawerNavigation';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
    </Stack.Navigator>
  );
};
