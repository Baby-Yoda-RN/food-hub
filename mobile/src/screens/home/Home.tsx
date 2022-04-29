import React, {FC} from 'react';
import {Alert} from 'react-native';
import {TFoodItem, TRestaurant} from '../../types/data';
import {TGetItemId, THome} from './Home.type';
import {HomeView} from './Home.view';

const restaurantDummy: TRestaurant = {
  uuid: '1234',
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

const foodDummy: TFoodItem = {
  uuid: '12345',
  name: 'Vegan Pizza',
  description: 'Vegan Pizzaaaaaaaaaaaa',
  rating: 5,
  usersVoted: 100,
  price: 5.5,
  favorite: false,
  imageName: 'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
};

const featuredRestaurants = [restaurantDummy, restaurantDummy, restaurantDummy];

const popularItems = [
  foodDummy,
  foodDummy,
  foodDummy,
  foodDummy,
  foodDummy,
  foodDummy,
];

export const Home: FC<THome> = () => {


  const handleViewAll = () => {
    console.log('navigate to Restaurants Screen')
  }

  const handleOnPressCard: TGetItemId = (id: string) => {
    Alert.alert('Card Pressed', id);
  };

  return (
    <HomeView
      featuredRestaurants={featuredRestaurants}
      popularItems={popularItems}
      onPressRestaurantCard={handleOnPressCard}
      onPressFoodCard={handleOnPressCard}
      onPressViewAll={handleViewAll}
    />
  );
};
