import React, {FC} from 'react';
import {EAuthNavigationRoutes} from '../../navigation/authNavigation/AuthNavigation.type';
import {TLoginNavigation} from './Category.type';
import {CategoryScreenView} from './Category.view';

export const CategoryScreen: FC<TLoginNavigation> = ({navigation}) => {
  return (
    <CategoryScreenView
      title="Category"
      press={() => navigation.navigate(EAuthNavigationRoutes.SIGNUP)}
    />
  );
};
