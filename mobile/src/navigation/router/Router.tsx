import React, {useLayoutEffect, useState} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import {getToken, removeToken} from '../../utilities';
import {TGetTokenFromLocalStorage} from './Router.type';
import {BottomTabNavigation} from '../bottomTabNavigation/BottomTabNavigator';

export const Router = () => {
  const [token, setToken] = useState<string>();

  useLayoutEffect(() => {
    const getTokenFromLocalStorage: TGetTokenFromLocalStorage = async () => {
      setToken(await getToken('key'));
    };
    getTokenFromLocalStorage();
  }, []);

  SplashScreen.hide();

  // To LogOut
  // removeToken('key')

  if (!token) return <BottomTabNavigation />;
  else if (token) return <AuthNavigation />;
  else return <></>;
};
