import React, {FC, useEffect, useState} from 'react';
import {TProfileNavigation} from './Profile.type';
import {ProfileView} from './Profile.view';
import {useGlobalState} from '../../context/global';
import {foodHubAPI} from '../../config';
import {EUserAction} from '../../context/user';

export const Profile: FC<TProfileNavigation> = ({navigation}) => {
  const {state, dispatch} = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState(state.userInfo.name);
  const [email, setEmail] = useState(state.userInfo.email);
  const [phone, setPhone] = useState(state.userInfo.phone);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const {data} = await foodHubAPI.get('/userInfo');
      dispatch({type: EUserAction.SET_NAME, name: data.name});
      dispatch({type: EUserAction.SET_EMAIL, email: data.email});
      dispatch({type: EUserAction.SET_PHONE, phone: data.phone});
      dispatch({type: EUserAction.SET_IMAGE, image: data.image});
      setIsLoading(false);
    };
    getData();
  }, []);

  const saveProfile = () => {
    dispatch({type: EUserAction.SET_NAME, name});
    dispatch({type: EUserAction.SET_EMAIL, email});
    dispatch({type: EUserAction.SET_PHONE, phone});
  };

  return (
    <ProfileView
      isLoading={isLoading}
      goBack={() => navigation.goBack()}
      name={state.userInfo.name}
      email={state.userInfo.email}
      image={state.userInfo.image}
      phoneNumber={state.userInfo.phone}
      saveButton={() => saveProfile()}
      setName={setName}
      setEmail={setEmail}
      setPhone={setPhone}
    />
  );
};
