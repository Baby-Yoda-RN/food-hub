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
} from '../../screens';
import {MyDrawer} from '../drawer/DrawerNavigation';
<<<<<<< HEAD
import {
  //TAppNavigationRoutes,
  //EAppNavigationRoutes,
  TAppNavigation,
} from './AppNavigation.type';
=======
>>>>>>> 1eca91ee288f847a6d240355cd8df3a6ac0c4f4f

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
<<<<<<< HEAD
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
=======
>>>>>>> 1eca91ee288f847a6d240355cd8df3a6ac0c4f4f
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
    </Stack.Navigator>
  );
};
