import React, {FC, useLayoutEffect, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Login.type';
import {LoginScreenView} from './Login.view';
import {storeToken, getToken} from '../../utilities';
import {AppNavigation} from '../../navigation';
import {handleLogin} from '../../helpers';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>();

  const loginPress = async () => {
    const tempToken = await handleLogin(email, password);
    if (tempToken.token) {
      setToken(tempToken.token);
      storeToken('key', tempToken.token);
    }
  };

  useLayoutEffect(() => {
    const getTokenFromLocalStorage = async () => {
      setToken(await getToken('key'));
    };
    getTokenFromLocalStorage();
  }, []);

  if (token) return <AppNavigation />;
  else
    return (
      <LoginScreenView
        title="Login"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        login={() => loginPress()}
        isLoading={false}
        goToSignUp={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
        goBack={() => navigation.goBack()}
        goToResetPassword={() =>
          navigation.navigate(EAuthNavigationRoutes.RESET_PASSWORD)
        }
      />
    );
};
