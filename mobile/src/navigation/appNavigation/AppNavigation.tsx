import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  HomeScreen,
  CategoryScreen,
} from '../../screens';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.CATEGORY}
        component={CategoryScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.HOME} component={HomeScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
    </Stack.Navigator>
  );
};
