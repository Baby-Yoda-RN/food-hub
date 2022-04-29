import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TFavoriteFoodItemsNavigation} from './FavoriteFoodItems.type';
import {FavoriteFoodItemsScreenView} from './FavoriteFoodItems.view';

export const FavoriteFoodItems: FC<TFavoriteFoodItemsNavigation> = ({navigation}) => {
  return (
    <FavoriteFoodItemsScreenView
      title="FavoriteFoodItems"
      press={() => navigation.navigate(EAuthNavigationRoutes.LOGIN)}
    />
  );
};
