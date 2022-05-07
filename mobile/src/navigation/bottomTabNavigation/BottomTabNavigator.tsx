import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ReviewScreen,
  CategoryScreen,
  CartScreen,
  MyOrdersScreen,
  FavoriteFoodItems,
} from '../../screens';
import {styles} from './BottomTabNavigation.style';
import {View} from 'react-native';
import {Badge, Icon} from '../../components';
import {color, size} from '../../theme';
import {
  EBottomTabNavigationRoutes,
  TBottomTabNavigationRoutes,
} from './BottomTabNavigator.type';

const Tab = createBottomTabNavigator<TBottomTabNavigationRoutes>();

const DisplayTab = (
  iconName: string,
  buttonColor: string,
  badgeValue?: number,
) => (
  <View>
    <Icon name={iconName} height={size.lg} width={size.lg} fill={buttonColor} />
    {badgeValue && (
      <Badge containerStyle={styles.badgeContainer} value={badgeValue} />
    )}
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
        name={EBottomTabNavigationRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Compass', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EBottomTabNavigationRoutes.CATEGORY}
        component={CategoryScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Pin', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EBottomTabNavigationRoutes.CART}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Bag', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EBottomTabNavigationRoutes.FAVORITES}
        component={FavoriteFoodItems}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Heart', buttonColor);
          },
        }}
      />
      <Tab.Screen
        name={EBottomTabNavigationRoutes.MYORDERS}
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({focused}) => {
            const buttonColor = focused ? color.primary : color.secondary;
            return DisplayTab('Bell', buttonColor, 3);
          },
        }}
      />
    </Tab.Navigator>
  );
};
