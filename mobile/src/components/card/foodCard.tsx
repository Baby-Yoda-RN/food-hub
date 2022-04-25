import React, {FC} from 'react';
import {FoodItem} from '../../types/data';
import {Card} from './card';
import {TCardProps} from './card.type';

export const FoodCard: FC<TCardProps> = ({foodItem}) => {
  const foodItemDummy: FoodItem = {
    name: 'Chicken Hawaiian',
    description: 'Chicken, Chesse and Pineapple',
    rating: 4.5,
    usersVoted: 25,
    price: 10.35,
    favorite: true,
    imageName:
      'https://www.cookingclassy.com/wp-content/uploads/2015/03/hawaiian-bbq-chicken-pizza6-srgb..jpg',
  };

  const {name, description, rating, usersVoted, price, favorite, imageName} =
    foodItemDummy;

  return (
    <Card
      isRestaurant={false}
      image={imageName}
      title={name}
      rating={rating}
      usersVoted={usersVoted}
      favorite={favorite}
      price={price}
      subtitle={description}
    />
  );
};
