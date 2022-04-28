import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Card, Header, PinInput, TextInput} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size} from '../../theme';
import {TRestaurant} from '../../types/data';
import {styles} from './Profile.style';
import {TProfileView} from './Profile.type';

export const ProfileView: FC<TProfileView> = ({
    name,

 }) => {
  return (
    <View style={styles.container}>
        <Header leftIconName="ChevronLeft" />
        <Text>{name}</Text>
        <Text>Full name</Text>
        <TextInput type={'search'}/>
        <Text>E-mail</Text>
        <TextInput type={'search'}/>
        <Text>Phone number</Text>
        <TextInput type={'search'}/>
    </View>
  );
};
