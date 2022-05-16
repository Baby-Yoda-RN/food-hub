import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Login.type';
import {LoginScreenView} from './Login.view';
import {useHandleLogin} from './helper';
import {useGlobalState} from '../../context/global';

export const LoginScreen: FC<TLoginNavigation> = ({navigation}) => {
  const {dispatch} = useGlobalState();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const loginPress = async () => {
    setError('');
    setLoading(true);
    if (email && password) {
      try{
        await useHandleLogin(email!, password!, dispatch);
      }catch(error){
        setError(error+'')
        setLoading(false);
      }
    }else{
      setError('Credentials required');
      setLoading(false);
    }

  };

  return (
    <LoginScreenView
      error={error}
      title="Login"
      email={email!}
      setEmail={setEmail}
      password={password!}
      setPassword={setPassword}
      login={() => loginPress()}
      isLoading={loading}
      goToSignUp={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
      goBack={() => navigation.goBack()}
      goToResetPassword={() =>
        navigation.navigate(EAuthNavigationRoutes.RESET_PASSWORD)
      }
    />
  );
};
