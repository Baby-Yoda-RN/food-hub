import React, {FC} from 'react';
import {TProfileNavigation} from './Profile.type';
import {ProfileView} from './Profile.view';
import {useGlobalState} from '../../context/global';

export const Profile: FC<TProfileNavigation> = ({navigation}) => {
  const {state} = useGlobalState();

  return (
    <ProfileView
      goBack={() => navigation.goBack()}
      name={state.userInfo.name}
      email={state.userInfo.email}
      phoneNumber={state.userInfo.phone}
      saveButton={() => {}}
    />
  );
};
