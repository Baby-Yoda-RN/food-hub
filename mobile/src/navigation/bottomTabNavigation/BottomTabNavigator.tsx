import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EAppNavigationRoutes,
  TAppNavigationRoutes,
} from '../appNavigation/AppNavigation.type';
import {
  HomeScreen,
  ReviewScreen,
  CategoryScreen,
  CartScreen,
  Rating,
} from '../../screens';
import {styles} from './BottomTabNavigation.style';
import {
  BagButton,
  FavoritesButton,
  HomeButton,
  NotificationsButton,
  PinButton,
} from '../../components/bottomTabNavigator/BottomTabNavigator';
import {View} from 'react-native';
import {Icon} from '../../components';
import {color, size} from '../../theme';

const Tab = createBottomTabNavigator<TAppNavigationRoutes>();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.container},
      }}>
      <Tab.Screen name={EAppNavigationRoutes.HOME} component={HomeScreen} />
      <Tab.Screen
        name={EAppNavigationRoutes.CATEGORY}
        component={CategoryScreen}
        options={{tabBarIcon: ({focused}) => <PinButton highlight={focused} />}}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.CART}
        component={CartScreen}
        options={{tabBarIcon: ({focused}) => <BagButton />}}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
        options={{tabBarIcon: ({focused}) => <FavoritesButton />}}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.RATING}
        component={Rating}
        options={{tabBarIcon: ({focused}) => <NotificationsButton />}}
      />
    </Tab.Navigator>
  );
};
