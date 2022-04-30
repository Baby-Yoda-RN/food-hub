import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TCategoryNavigation} from './Category.type';
import {CategoryScreenView} from './Category.view';

export const CategoryScreen: FC<TCategoryNavigation> = ({navigation}) => {
  return (
    <CategoryScreenView
      title="Category"
      press={() => navigation.navigate(EAppNavigationRoutes.CART)}
    />
  );
};
