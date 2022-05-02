import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
<<<<<<< HEAD
import {CartScreen, ReviewScreen, FavoriteFoodItems} from '../../screens';
=======
import {CartScreen, ReviewScreen, WelcomeScreen} from '../../screens';
>>>>>>> main

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.FAVORITEFOODITEMS}
        component={FavoriteFoodItems}
      />
    </Stack.Navigator>
  );
};
