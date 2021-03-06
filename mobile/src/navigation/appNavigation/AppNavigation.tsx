import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {MyDrawer} from '../drawer/DrawerNavigation';
import {
  RatingScreen,
  FoodDetailsScreen,
  MyOrdersScreen,
  ReviewScreen,
  RestaurantReviewScreen,
} from '../../screens/';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={EAppNavigationRoutes.DRAWER}>
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
      <Stack.Screen
        name={EAppNavigationRoutes.RATING}
        component={RatingScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.FOODDETAIL}
        component={FoodDetailsScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.RESTAURANTREVIEW}
        component={RestaurantReviewScreen}
      />
    </Stack.Navigator>
  );
};
