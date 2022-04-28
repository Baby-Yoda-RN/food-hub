import React, { FC } from 'react'
import { TFoodItem, TRestaurant } from '../../types/data';
import { THome } from './Home.type'
import { HomeView } from './Home.view'



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

const foodDummy: TFoodItem = {
  uuid: '12345',
  name: 'Vegan Pizza',
  description: 'Vegan Pizza',
  rating: 5,
  usersVoted: 100,
  price: 5.5,
  favorite: false,
  imageName: 'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
};

const featuredRestaurants = [
  restaurantDummy,
  restaurantDummy,
  restaurantDummy,
]

const popularItems = [
  foodDummy,
  foodDummy,
  foodDummy,
]

export const Home:FC<THome> = () => {
  return (
    <HomeView featuredRestaurants={featuredRestaurants} popularItems={popularItems}/>
  )
}
