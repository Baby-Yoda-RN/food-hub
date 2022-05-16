import React, {FC, useEffect, useState} from 'react';
import {TFoodDetailsNavigation} from './FoodDetails.type';
import {FoodDetailsScreenView} from './FoodDetails.view';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {foodHubAPI} from '../../config';
import {TFoodItem} from '../../types/data';

export const FoodDetailsScreen: FC<TFoodDetailsNavigation> = ({
  route,
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, countChange] = useState(1);
  const [foodData, setFoodData] = useState<TFoodItem>();
  const [addOnSelected, setAddOnSelected] = useState(false);
  const [addOnPrice, setAddOnPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await foodHubAPI.get('/favorites');
      const [matchedFood] = response.data.foods.filter(
        (item: TFoodItem) => item.uuid === route.params!['itemId'],
      );
      setFoodData(matchedFood);
      setIsLoading(false);
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

  const calPrice = (price: number, addOn: number) => (price + addOn) * count;

  const toggleAddOn = () => {
    const tempAddOnSeleted = addOnSelected;
    setAddOnSelected(!addOnSelected);
    if (!tempAddOnSeleted) setAddOnPrice(foodData!.addOns![0].price);
    else setAddOnPrice(0);
  };

  return (
    <FoodDetailsScreenView
      isLoading={isLoading}
      title={foodData?.name!}
      image={foodData?.imageName!}
      description={foodData?.description!}
      ratings={foodData?.rating!}
      reviewCount={foodData?.usersVoted!}
      reviewCountMax={30}
      countPlusMinus={count}
      addOns={foodData?.addOns!}
      count={count}
      pressAddOn={() => toggleAddOn()}
      selected={addOnSelected}
      onPressMinus={() => onMinus()}
      onPressPlus={() => onPlus()}
      price={calPrice(foodData?.price!, addOnPrice)}
      onPressGoBack={() => navigation.goBack()}
      onpressSeeReview={() => navigation.navigate(EAppNavigationRoutes.REVIEW)}
      onPressAddToCart={() => {
        navigation.navigate(EAppNavigationRoutes.CART, [{
          name: foodData?.name,
          description: foodData?.description,
          imageName: foodData?.imageName,
          price: foodData?.price,
          quantity: count,
          uuid: foodData?.uuid,
        }]);
      }}
    />
  );
};
