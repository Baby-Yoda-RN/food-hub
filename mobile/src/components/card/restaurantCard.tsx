import React, {FC} from 'react';
import {Restaurant} from '../../types/data';
import {Card} from './card';
import {TCardProps} from './card.type';

export const RestaurantCard: FC<TCardProps> = ({restaurant}) => {
  const restaurantDummy: Restaurant = {
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

  const {
    name,
    rating,
    usersVoted,
    favorite,
    freeDelivery,
    deliveryTime,
    items,
    imageName,
  } = restaurantDummy;

  return (
    <Card
      isRestaurant={true}
      image={imageName}
      title={name}
      tags={items}
      rating={rating}
      usersVoted={usersVoted}
      favorite={favorite}
      freeDelivery={freeDelivery}
      deliveryTime={deliveryTime}
    />
  );
};
