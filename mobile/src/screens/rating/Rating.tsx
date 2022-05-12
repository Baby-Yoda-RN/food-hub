import React, {FC} from 'react';
import {TRating} from './Rating.type';
import {RatingScreenView} from './Rating.view';

export const Rating: FC<TRating> = ({navigation}) => {
  return <RatingScreenView />;
};
