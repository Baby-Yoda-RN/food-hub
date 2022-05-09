import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  HomeScreen,
  CategoryScreen,
  MyOrdersScreen,
  AddNewAddress,
} from '../../screens';
import {CartScreen, ReviewScreen, FavoriteFoodItems} from '../../screens';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.HOME} component={HomeScreen} />
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
        name={EAppNavigationRoutes.ADDNEWADDRESS}
        component={AddNewAddress}
        name={EAppNavigationRoutes.FAVORITEFOODITEMS}
        component={FavoriteFoodItems}
      />
    </Stack.Navigator>
  );
};
