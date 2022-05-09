import React, {FC, useState} from 'react';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsScreenView} from './FoodDetails.view';

export const FoodDetailsScreen: FC<TFoodDetailsNavigation> = ({navigation}) => {
  const [count, countChange] = useState(1);

  return (
    <FoodDetailsScreenView
      title="Ground Beef Tacos"
      description="Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder."
      subtitle="Choice of Add On"
      ratings={4.5}
      reviewCount={31}
      countPlusMinus={count}
      onPressMinus={() => {
        if (count > 1) {
          countChange(count - 1);
        }
      }}
      onPressPlus={() => {
        if (count < 99) {
          countChange(count + 1);
        }
      }}
      price={9.99 * count}
    />
  );
};
