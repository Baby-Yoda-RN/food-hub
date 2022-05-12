import React, {FC, useState} from 'react';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsScreenView} from './FoodDetails.view';
import images from '../../assets/images';

export const FoodDetailsScreen: FC<TFoodDetailsNavigation> = ({navigation}) => {
  const [count, countChange] = useState(1);

  function onMinus() {
    if (count > 1) {
      countChange(count - 1);
    }
  }

  function onPlus() {
    if (count < 99) {
      countChange(count + 1);
    }
  }

  function calPrice() {
    const price = 9.99 * count;
    return price;
  }

  return (
    <FoodDetailsScreenView
      title="Ground Beef Tacos"
      description="Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder."
      subtitle="Choice of Add On"
      ratings={4.5}
      reviewCount={31}
      countPlusMinus={count}
      addOns={[
        {image: images.pepperJulienned, name: 'Pepper Julienned', price: 2.3},
        {image: images.pepperJulienned, name: 'Baby Spinach', price: 4.7},
        {image: images.pepperJulienned, name: 'Mushroom', price: 2.5},
      ]}
      onPressMinus={() => {
        onMinus();
      }}
      onPressPlus={() => {
        onPlus();
      }}
      price={calPrice()}
    />
  );
};
