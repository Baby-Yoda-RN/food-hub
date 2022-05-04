import React, {FC, useEffect, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation, THandleLogin} from './Login.type';
import {LoginScreenView} from './Login.view';
import {foodHubAPI} from '../../config';
import {storeToken, getToken} from '../../utilities';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string>();

  console.log(email, password);

  const handleLogin:THandleLogin = async (email, password) => {
    const response = await foodHubAPI.post('/login', {
      email,
      password,
    });

    try {
      if (response.status === 200) {
        console.log(response.data);
        if (response.data.token) {
          await storeToken('key', response.data.token);
          setToken(await getToken('key'));
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getTokenFromLocalStorage = async () => {
      setToken(await getToken('key'));
    };
    getTokenFromLocalStorage();
    console.log(token);
  }, []);

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
