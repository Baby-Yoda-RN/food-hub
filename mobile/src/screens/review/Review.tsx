import React, {FC} from 'react';
import {EAppNavigationRoutes} from '../../navigation';
import {TReviewNavigation} from './Review.type';
import {ReviewScreenView} from './Review.view';

export const ReviewScreen: FC<TReviewNavigation> = ({navigation}) => {
  return (
    <ReviewScreenView
      leftPress={() => navigation.goBack()}
      textInputPress={() => navigation.navigate(EAppNavigationRoutes.RATING)}
    />
  );
};
