import React from 'react';
import {Text, View} from 'react-native';
import {Restaurant} from '../../types/data';
import {Card} from './card';
import {styles} from './card.styles';

export const CardView = () => {
  const dummy: Restaurant = {
    name: "McDonald's",
    rating: 4,
    usersVoted: 25,
    favorite: true,
    freeDelivery: 'Free Delivery',
    deliveryTime: 10,
    items: ['Burger', 'Chicken', 'Fast Food'],
  };

  return <Card item={dummy} />;
};
