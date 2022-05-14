import React, {FC, useState} from 'react';
import {foodHubAPI} from '../../config';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TSignUpNavigation} from './SignUp.type';
import {SignUpScreenView} from './SignUp.view';

export const SignUpScreen: FC<TSignUpNavigation> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpRequest = async () => {
    setIsLoading(true);
    await foodHubAPI.post('/register', {
      name,
      email,
      password,
    });

    setIsLoading(false);
    navigation.navigate(EAuthNavigationRoutes.LOGIN);
  };

  return (
    <SignUpScreenView
      isLoading={isLoading}
      title="Sign Up"
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      pressLogin={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
      pressSignUp={() => signUpRequest()}
    />
  );
};
