import React from 'react';
import {Text} from 'react-native';
import {FoodItem} from '../../types/data';
import {Card} from './Card';
import {styles} from './Card.style';

export const FoodCard = (foodItem: FoodItem) => {
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

  foodItem = foodItemDummy;

  const {name, description, rating, usersVoted, price, favorite, imageName} =
    foodItem;

  const render = () => <Text style={styles.details}>{description}</Text>;

  return <Card image={imageName} title={name} renderDetails={render} />;
};
