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
  MyOrdersScreen,
  Profile,
  RatingScreen,
} from '../../screens';
import {MyDrawer} from '../drawer/DrawerNavigation';
const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
      />
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
      <Stack.Screen
        name={EAppNavigationRoutes.RATING}
        component={RatingScreen}
      />
    </Stack.Navigator>
  );
};
