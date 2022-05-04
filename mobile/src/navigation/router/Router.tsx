import React, {useLayoutEffect, useState} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import {getToken, removeToken} from '../../utilities';
import { TGetTokenFromLocalStorage } from './Router.type';
import StorybookUIRoot from '../../../storybook/index';

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
  
  if (__DEV__) return <StorybookUIRoot />
  else if (token) return <AppNavigation />;
  else if (!token) return <AuthNavigation />;
  else return <></>
};
