import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TReviewNavigation} from './Review.type';
import {ReviewScreenView} from './Review.view';

export const ReviewScreen: FC<TReviewNavigation> = ({navigation}) => {
  return (
    <ReviewScreenView
      title="Review"
      onPress={() => navigation.navigate(EAppNavigationRoutes.CART)}
    />
  );
};
