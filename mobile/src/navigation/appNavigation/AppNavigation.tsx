import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  HomeScreen,
  CategoryScreen,
  MyOrdersScreen,
  AddNewAddressScreen,
  WelcomeScreen,
  FoodDetailsScreen,
  FavoriteFoodItems,
  Profile,
  Rating,
  RestaurantReviewScreen,
} from '../../screens';
import {MyDrawer} from '../drawer/DrawerNavigation';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={EAppNavigationRoutes.BOTTOM_TAB_STACK}
      screenOptions={{headerShown: false}}>
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
        name={EAppNavigationRoutes.ADDNEWADDRESS}
        component={AddNewAddressScreen}
      />

      <Stack.Screen
        name={EAppNavigationRoutes.FAVORITEFOODITEMS}
        component={FavoriteFoodItems}
      />

      <Stack.Screen
        name={EAppNavigationRoutes.CATEGORY}
        component={CategoryScreen}
      />
      <Stack.Screen
        name={EAppNavigationRoutes.FOODDETAIL}
        component={FoodDetailsScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.RATING} component={Rating} />
      <Stack.Screen
        name={EAppNavigationRoutes.RESTAURANTREVIEW}
        component={RestaurantReviewScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.PROFILE} component={Profile} />
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} /> 
      <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />
    </Stack.Navigator>
  );
};
