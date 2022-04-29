import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TCartNavigation} from './Cart.type';
import {CartScreenView} from './Cart.view';

export const CartScreen: FC<TCartNavigation> = ({navigation}) => {
  return (
    <CartScreenView
      title="Cart"
      onPress={() => navigation.navigate(EAppNavigationRoutes.REVIEW)}
    />
  );
};
