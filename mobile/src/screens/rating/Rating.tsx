import React, {FC} from 'react';
import {TRatingNavigation} from './Rating.type';
import {RatingScreenView} from './Rating.view';

export const RatingScreen: FC<TRatingNavigation> = ({navigation}) => {
  return <RatingScreenView leftPress={() => navigation.goBack()} />;
};
