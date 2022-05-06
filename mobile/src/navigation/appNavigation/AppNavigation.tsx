import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {Rating} from '../../screens';

const RootStack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName={EAppNavigationRoutes.BOTTOM_TAB_STACK}
      screenOptions={{headerShown: false}}>
      <RootStack.Screen
        name={EAppNavigationRoutes.BOTTOM_TAB_STACK}
        component={BottomTabNavigation}
      />
      <RootStack.Screen name={EAppNavigationRoutes.RATING} component={Rating} />
    </RootStack.Navigator>
  );
};
