import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {MyDrawer} from '../drawer/DrawerNavigation';
import { RatingScreen, FoodDetailsScreen } from '../../screens/';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
      <Stack.Screen name={EAppNavigationRoutes.RATING} component={RatingScreen}/>
      <Stack.Screen name={EAppNavigationRoutes.FOODDETAIL} component={FoodDetailsScreen}/>
    </Stack.Navigator>
  );
};
