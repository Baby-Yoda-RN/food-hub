import React, {FC} from 'react';
import {RestaurantReviewScreenView} from './RestaurantReview.view';
import {TRestaurantReviewNavigation} from './RestaurantReview.type';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';

export const RestaurantReviewScreen: FC<TRestaurantReviewNavigation> = ({
  navigation,
}) => {
  return (
    <RestaurantReviewScreenView
      leftIconPress={() => navigation.goBack()}
      submit={() => navigation.navigate(EAppNavigationRoutes.REVIEW)}
    />
  );
};
