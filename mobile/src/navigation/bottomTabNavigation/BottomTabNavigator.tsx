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
import {View} from 'react-native';
import {Icon} from '../../components';
import {color, size} from '../../theme';

const Tab = createBottomTabNavigator<TAppNavigationRoutes>();

const DisplayTab = (iconName: string, buttonColor: string) => (
  <View style={styles.tabContainer}>
    <Icon name={iconName} height={size.lg} width={size.lg} fill={buttonColor} />
  </View>
);

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {...styles.container},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={EAppNavigationRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Compass', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.CATEGORY}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Pin', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Bag', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Heart', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EAppNavigationRoutes.RATING}
        component={Rating}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Bell', buttonColor);
          },
        }}
      />
    </Tab.Navigator>
  );
};
