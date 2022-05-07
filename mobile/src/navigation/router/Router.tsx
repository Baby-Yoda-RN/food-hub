import React, {useLayoutEffect, useState} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import {getToken, removeToken} from '../../utilities';
import {TGetTokenFromLocalStorage} from './Router.type';
import { MyDrawer } from '../drawer/DrawerNavigation';
import {useGlobalState} from '../../context/global/global.provider';
import {EAuthAction} from '../../context/auth';

export const Router = () => {
  const {
    state: {auth},
    dispatch,
  } = useGlobalState();
  const [token, setToken] = useState<string>();

  useLayoutEffect(() => {
    const isAuthenticated = () => {
      const token = 'dummyToken';
      dispatch({type: EAuthAction.RESTORE_TOKEN, token: token});
    };
    isAuthenticated();
    // const getTokenFromLocalStorage: TGetTokenFromLocalStorage = async () => {
    //   setToken(await getToken('key'));
    // };
    // getTokenFromLocalStorage();
  }, [dispatch]);

  SplashScreen.hide();

  return auth.token ? <AppNavigation /> : <AuthNavigation />;
};
