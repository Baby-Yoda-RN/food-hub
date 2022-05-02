import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Card, Header, PinInput, TextInput, Icon} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size, color} from '../../theme';
import {TRestaurant} from '../../types/data';
import {styles} from './Profile.style';
import BackgroundImage from '../../assets/background/background.svg';
import {TProfileViewProps} from './Profile.type';

export const ProfileView: FC<TProfileViewProps> = ({
  name,
  email,
  phoneNumber,
  profileURL,
  goBack,

}) => {
  const screenWidth = Dimensions.get('window').width;
  const ratioWidthHeight = 383.13 / 88.51;

  return (
    <>
      <View
        style={{height: screenWidth / ratioWidthHeight, width: screenWidth}}>
        <View
          style={[
            {
              height: screenWidth / ratioWidthHeight,
              width: screenWidth,
            },
            styles.backgroundImageContainer,
          ]}>
          <BackgroundImage />
        </View>
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
