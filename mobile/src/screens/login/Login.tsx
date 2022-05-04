import React, {FC, useLayoutEffect, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation, THandleLogin} from './Login.type';
import {LoginScreenView} from './Login.view';
import {foodHubAPI} from '../../config';
import {storeToken, getToken} from '../../utilities';
import {AppNavigation} from '../../navigation';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>();

  const handleLogin: THandleLogin = async (email, password) => {
    const response = await foodHubAPI.post('/login', {
      email,
      password,
    });

    try {
      if (response.status === 200) {
        if (response.data.token) {
          await storeToken('key', response.data.token);
          setToken(await getToken('key'));
        }
      }
    } catch (error) {
      console.error(error);
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
        login={() => handleLogin(email, password)}
        isLoading={false}
        goToSignUp={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
        goBack={() => navigation.goBack()}
        goToResetPassword={() =>
          navigation.navigate(EAuthNavigationRoutes.RESET_PASSWORD)
        }
      />
    );
};
