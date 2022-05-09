import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import {MyDrawer} from '../drawer/DrawerNavigation';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {CartScreen, ReviewScreen, FavoriteFoodItems} from '../../screens';
import { TCompositNavigationProp } from '../bottomTabNavigation/BottomTabNavigator.type';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation:FC<TCompositNavigationProp> = () => {
  return (
    <Stack.Navigator
      //initialRouteName={EAppNavigationRoutes.BOTTOM_TAB_STACK}
      screenOptions={{headerShown: false}}>  
          <Stack.Screen name={EAppNavigationRoutes.DRAWER} component={MyDrawer} />

      {/* <Stack.Screen
        name={EAppNavigationRoutes.BOTTOM_TAB_STACK}
        component={BottomTabNavigation}
      />       */}

{/* 
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
      <Stack.Screen
        name={EAppNavigationRoutes.FAVORITEFOODITEMS}
        component={FavoriteFoodItems}
      /> */}
    </Stack.Navigator>
  );
};
