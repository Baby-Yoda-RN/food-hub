import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Card, Header, PinInput, TextInput} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size} from '../../theme';
import {TRestaurant} from '../../types/data';
import {styles} from './Profile.style';
import {TProfileView} from './Profile.type';

export const ProfileView: FC<TProfileView> = () => {
  return (
    <View style={styles.container}>
        <Header leftIconName="ChevronLeft" />
        <Text>Hello World</Text>
    </View>
  );
};
