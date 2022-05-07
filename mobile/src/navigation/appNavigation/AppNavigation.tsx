import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {CartScreen, ReviewScreen, FavoriteFoodItems} from '../../screens';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={EAppNavigationRoutes.BOTTOM_TAB_STACK}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.BOTTOM_TAB_STACK}
        component={BottomTabNavigation}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.FAVORITEFOODITEMS}
        component={FavoriteFoodItems}
      />
    </Stack.Navigator>
  );
};
