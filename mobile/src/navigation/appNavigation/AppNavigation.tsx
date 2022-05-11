import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  WelcomeScreen,
  FoodDetailsScreen,
  HomeScreen,
  CategoryScreen,
} from '../../screens';
import {MyDrawer} from '../drawer/DrawerNavigation';
import {
  //TAppNavigationRoutes,
  //EAppNavigationRoutes,
  TAppNavigation,
} from './AppNavigation.type';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.FOODDETAIL}
        component={FoodDetailsScreen}
      />
    </Stack.Navigator>
  );
};
