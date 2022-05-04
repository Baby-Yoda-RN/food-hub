import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TAppNavigationRoutes, EAppNavigationRoutes} from './AppNavigation.type';
import {
  CartScreen,
  ReviewScreen,
  HomeScreen,
  CategoryScreen,
} from '../../screens';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';

const Stack = createStackNavigator<TAppNavigationRoutes>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={EAppNavigationRoutes.REVIEW}
        component={ReviewScreen}
      />
      <BottomTabNavigation />
    </Stack.Navigator>
  );
};

// const Stack = createStackNavigator<TAppNavigationRoutes>();

// export const AppNavigation = () => {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name={EAppNavigationRoutes.HOME} component={HomeScreen} />
//       <Stack.Screen
//         name={EAppNavigationRoutes.REVIEW}
//         component={ReviewScreen}
//       />
//       <Stack.Screen
//         name={EAppNavigationRoutes.CATEGORY}
//         component={CategoryScreen}
//       />
//       <Stack.Screen name={EAppNavigationRoutes.CART} component={CartScreen} />
//     </Stack.Navigator>
//   );
// };
