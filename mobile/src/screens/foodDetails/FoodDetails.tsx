import React, {FC, useEffect, useState} from 'react';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsScreenView} from './FoodDetails.view';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import images from '../../assets/images';
import {foodHubAPI} from '../../config';

export const FoodDetailsScreen: FC<TFoodDetailsNavigation> = ({
  route,
  navigation,
}) => {
  const [count, countChange] = useState(1);
  const [foodData, setFoodData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await foodHubAPI.get('/favorites');
      const [matchedFood] = response.data.foods.filter(
        item => item.uuid === route.params.itemId,
      );
      console.log(matchedFood);
      setFoodData(matchedFood);
    };
    getData();
  }, []);

  const onMinus = () => {
    if (count > 1) {
      countChange(count - 1);
    }
  };

  const onPlus = () => {
    countChange(count + 1);
  };

  const calPrice = price => price * count

  return (
    <FoodDetailsScreenView
      title={foodData?.name}
      description="Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder."
      subtitle="Choice of Add On"
      ratings={4.5}
      reviewCount={31}
      reviewCountMax={30}
      countPlusMinus={count}
      addOns={[
        {image: images.pepperJulienned, name: 'Pepper Julienned', price: 2.3},
        {image: images.pepperJulienned, name: 'Baby Spinach', price: 4.7},
        {image: images.pepperJulienned, name: 'Mushroom', price: 2.5},
      ]}
      onPressMinus={() => onMinus()}
      onPressPlus={() => onPlus()}
      price={calPrice(foodData?.price)}
      onPressGoBack={() => navigation.goBack()}
      onPressAddToCart={() => {
        navigation.navigate(EAppNavigationRoutes.CART);
      }}
    />
  );
};
