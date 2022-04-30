import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsView} from './FoodDetails.view';

export const FoodDetails: FC<TFoodDetailsNavigation> = ({navigation}) => {
  return <FoodDetailsView />;
};
