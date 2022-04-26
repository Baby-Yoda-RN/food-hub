import React from 'react';
import {Text} from 'react-native';
import {TFoodItem} from '../../types/data';
import {Card} from './card';
import {styles} from './card.style';

export const FoodCard = (foodItem: TFoodItem) => {
  const foodItemDummy: TFoodItem = {
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
