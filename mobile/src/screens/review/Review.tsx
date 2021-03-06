import React, {FC, useEffect, useState} from 'react';
import {foodHubAPI} from '../../config';
import { EAppNavigationRoutes } from '../../navigation/appNavigation/AppNavigation.type';
import {TReview} from '../../types/data';
import {TReviewNavigation} from './Review.type';
import {ReviewScreenView} from './Review.view';

export const ReviewScreen: FC<TReviewNavigation> = ({
  navigation,
  restaurantId,
}) => {
  restaurantId = '1';

  const [reviews, setReviews] = useState<[TReview]>();

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const newFoodItem = await foodHubAPI.get(`/review/${restaurantId}`);
    setReviews(newFoodItem.data[0].reviews);
  };

  return (
    <ReviewScreenView
      leftPress={() => navigation.goBack()}
      textInputPress={() => navigation.navigate(EAppNavigationRoutes.RESTAURANTREVIEW)}
      reviewsList={reviews}
    />
  );
};
