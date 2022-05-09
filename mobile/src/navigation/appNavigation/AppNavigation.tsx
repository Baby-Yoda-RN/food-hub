import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyDrawer} from '../drawer/DrawerNavigation';
import {TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation} from './AppNavigation.type';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
    </Stack.Navigator>
  );
};
