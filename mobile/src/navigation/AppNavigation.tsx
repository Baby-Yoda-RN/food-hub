import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ERootStackRoutes, RootStackParams} from './AppNavigation.type';
import {Login, Signup, Home} from '../screens';


const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ERootStackRoutes.HOME_SCREEN} component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};