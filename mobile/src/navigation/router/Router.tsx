import React, {useLayoutEffect} from 'react';
import {AuthNavigation} from '../authNavigation/AuthNavigation';
import {AppNavigation} from '../appNavigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import {getToken, ELocalStorage} from '../../utilities';
import {TGetTokenFromLocalStorage} from './Router.type';
import {useGlobalState} from '../../context/global/global.provider';
import {EAuthAction} from '../../context/auth';

export const Router = () => {
  SplashScreen.hide();

  const {
    state: {auth},
    dispatch,
  } = useGlobalState();

  useLayoutEffect(() => {
    const getTokenFromLocalStorage: TGetTokenFromLocalStorage = async () => {
      let tempToken = await getToken(ELocalStorage.TOKEN_KEY);
      dispatch({type: EAuthAction.RESTORE_TOKEN, token: tempToken});
    };
    getTokenFromLocalStorage();
  }, [dispatch]);

  return auth.token ? <AppNavigation /> : <AuthNavigation />;
};
