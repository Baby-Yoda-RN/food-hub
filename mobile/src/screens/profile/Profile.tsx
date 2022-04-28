import React, {FC} from 'react';
import {Text, Button, SafeAreaView} from 'react-native';
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/header/Header';
import {TextInput} from '../../components/textInput/TextInput'
import {TProfile} from './Profile.type';
import {ProfileView} from './Profile.view';


export const Profile: FC<TProfile> = () => {
  return (
    <ProfileView/>
  )
};