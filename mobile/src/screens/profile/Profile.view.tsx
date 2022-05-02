import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Header, TextInput} from '../../components';
import {size, color} from '../../theme';
import {styles} from './Profile.style';
import {TProfileViewProps} from './Profile.type';

export const ProfileView: FC<TProfileViewProps> = ({
  name,
  email,
  phoneNumber,
  profileURL,
  goBack,
}) => {

  return (
    <>
      <View>
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftIconStyle={{backgroundColor: color.white}}
          leftPress={goBack}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image style={[styles.image]} source={{uri: profileURL}} />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Full name</Text>
        <TextInput type={'regular'} placeholder={name} />
        <Text style={styles.text}>E-mail</Text>
        <TextInput type={'regular'} placeholder={email} />
        <Text style={styles.text}>Phone number</Text>
        <TextInput type={'regular'} placeholder={phoneNumber} />
      </View>
    </>
  );
};
