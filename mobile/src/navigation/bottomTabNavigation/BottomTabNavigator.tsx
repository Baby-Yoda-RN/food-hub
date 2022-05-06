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
  MyOrdersScreen,
} from '../../screens';
import {styles} from './BottomTabNavigation.style';
import {View} from 'react-native';
import {Badge, Icon} from '../../components';
import {color, size} from '../../theme';

const Tab = createBottomTabNavigator<TAppNavigationRoutes>();

const DisplayTab = (
  iconName: string,
  buttonColor: string,
  badge: boolean = false,
) => (
  <View>
    <Icon name={iconName} height={size.lg} width={size.lg} fill={buttonColor} />
    {badge && <Badge containerStyle={styles.badgeContainer} value={3} />}
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
      {/* Will be favorites screen */}
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
        name={EAppNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Bell', buttonColor, true);
          },
        }}
      />
    </Tab.Navigator>
  );
};
