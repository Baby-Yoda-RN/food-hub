import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  HomeScreen,
  CategoryScreen,
  MyOrdersScreen,
  Profile,
} from '../../screens';
import {MyDrawer} from '../drawer/DrawerNavigation';
import {TAppNavigationRoutes, EAppNavigationRoutes, TAppNavigation} from './AppNavigation.type';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.MYORDERS} component={MyOrdersScreen}/>
      <Stack.Screen name={EAppNavigationRoutes.HOME} component={HomeScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.CATEGORY}
        component={CategoryScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
      <Stack.Screen name={EAppNavigationRoutes.PROFILE} component={Profile} />
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
    </Stack.Navigator>
  );
};
