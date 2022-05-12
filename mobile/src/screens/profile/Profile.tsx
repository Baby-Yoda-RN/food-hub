import React, {FC} from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/header/Header';
import {TextInput} from '../../components/textInput/TextInput';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TProfileNavigation} from './Profile.type';
import {ProfileView} from './Profile.view';
import {profileDummyData} from  './profileDummyData';

export const Profile: FC<TProfileNavigation> = ({
  navigation,
}) => {
  return (
    <ProfileView
      goBack={() => navigation.goBack()}
    />
  );
};
