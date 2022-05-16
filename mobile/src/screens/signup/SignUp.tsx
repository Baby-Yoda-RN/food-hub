import React, {FC, useState} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TSignUpNavigation} from './SignUp.type';
import {SignUpScreenView} from './SignUp.view';
import {useGlobalState} from '../../context/global';
import {useHandleSignUp} from './helper';

export const SignUpScreen: FC<TSignUpNavigation> = ({navigation}) => {
  const {dispatch} = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const signupPress = async () => {
    setError('');
    setIsLoading(true);
    if(name && email && password){
      try{
        await useHandleSignUp(name!, email!, password!, dispatch);
        //navigation.navigate(EAuthNavigationRoutes.LOGIN);
      }catch(error){
        setError(error+'')
        setIsLoading(false);
      }
    }else{
      setError('All fields are required')
      setIsLoading(false);
    }
  };

  return (
    <SignUpScreenView
      isLoading={isLoading}
      title="Sign Up"
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signup={() => signupPress()}
      onPressGoToLogin={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
      error={error}
    />
  );
};
