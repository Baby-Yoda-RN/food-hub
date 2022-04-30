import React, {FC} from 'react';
import {View, Text,Image, TouchableOpacity} from 'react-native';
import {Card, Header, PinInput, TextInput, Icon} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size} from '../../theme';
import {TRestaurant} from '../../types/data';
import {styles} from './Profile.style';
import {TProfileViewProps} from './Profile.type';

export const ProfileView: FC<TProfileViewProps> = ({
    name,
    email,
    phoneNumber,
    profileURL

 }) => {
  return (
    <>
      <View  style={styles.container}>
        <Header 
        leftIconName="ChevronLeft" 
        iconHeight={size.rg} 
        iconWidth={size.rg} 
        containerStyle={styles.header}
        />
        <View style={styles.profileContainer}>
            <Image style={[styles.image]} source={{uri: profileURL}} />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Full name</Text>
            <TextInput type={'regular'} placeholder={name}/>
            <Text style={styles.text}>E-mail</Text>
            <TextInput type={'regular'} placeholder={email} />
            <Text style={styles.text}>Phone number</Text>
            <TextInput type={'regular'} placeholder={phoneNumber}/>
        </View>
      </View>
    </>
  );
};
