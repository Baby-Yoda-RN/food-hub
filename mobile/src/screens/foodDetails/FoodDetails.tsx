import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsScreenView} from './FoodDetails.view';

export const FoodDetailsScreen: FC<TFoodDetailsNavigation> = ({navigation}) => {
  return <FoodDetailsScreenView />;
};
