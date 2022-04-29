import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Card, Header, PinInput, TextInput, Icon} from '../../components';
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
    <>
        <Header 
        leftIconName="ChevronLeft" 
        iconHeight={size.rg} 
        iconWidth={size.rg} 
        containerStyle={styles.header}
        />
        <View style={styles.profileContainer}>
            <Icon name={'Profile'} width={size.xl} height={size.xl}/>
            <Text style={styles.name}>Eljad Eendaz</Text>
            <Text>Edit Profile</Text>
        </View>
        <View style={styles.inputContainer}>
            <Text>Full name</Text>
            <TextInput type={'regular'} />
            <Text>E-mail</Text>
            <TextInput type={'regular'} />
            <Text>Phone number</Text>
            <TextInput type={'regular'} />
      </View>
    </>
  );
};
