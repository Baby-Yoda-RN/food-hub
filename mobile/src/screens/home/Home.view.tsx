import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Card, Header, PinInput, TextInput} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size} from '../../theme';
import {TRestaurant} from '../../types/data';
import {styles} from './Home.style';
import {THomeView} from './Home.type';

const restaurantDummy: TRestaurant = {
  name: "McDonald's",
  rating: 4,
  usersVoted: 25,
  favorite: true,
  freeDelivery: 'Free Delivery',
  deliveryTime: 10,
  items: ['Burger', 'Chicken', 'Fast Food', 'Breakfast', 'American'],
  imageName:
    'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
};

export const HomeView: FC<THomeView> = () => {
  return (
    <View style={styles.container}>
      <Header deliveryLocation={'Delivery Location'} leftIconName="Burger" />
      <Text>What would you like to order</Text>
      <TextInput leftIcon="Bag" type="search" placeholder="Find food by name" />
      <View style={{flexDirection: 'row'}}>
        <Text>Featured Restaurants</Text>
        <Text>View All</Text>
      </View>
      <View>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </View>
      <Text>Popular Items</Text>
      <FoodCard />
      <FoodCard />
    </View>
  );
};
