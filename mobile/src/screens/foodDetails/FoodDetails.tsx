import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {TFoodDetailsProps} from './FoodDetails.type';
import {styles} from './FoodDetails.style';

export const FoodDetails: FC<TFoodDetailsProps> = (
  Textfield = 'foodDetails',
) => {
  return <Text>{Textfield}</Text>;
};
