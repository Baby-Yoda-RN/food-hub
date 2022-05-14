import React, {FC, useState, useEffect} from 'react';
import {useGlobalState} from '../../context/global';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TFavoriteFoodItemsNavigation} from './FavoriteFoodItems.type';
import {FavoriteFoodItemsScreenView} from './FavoriteFoodItems.view';
import {foodHubAPI} from '../../config';
import {TFoodItem, TRestaurant} from '../../types/data';

export const FavoriteFoodItems: FC<TFavoriteFoodItemsNavigation> = ({
  navigation,
}) => {
  const {state} = useGlobalState();
  const [favoriteFoodItems, setFavoriteFoodItems] = useState<TFoodItem[]>([]);
  const [favoriteRestaurants, setFavoriteRestaurants] = useState<TRestaurant[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showFavoriteFoods, setShowFavoriteFoods] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await foodHubAPI.get('/favorites');
      setFavoriteFoodItems(response.data.foods);
      setFavoriteRestaurants(response.data.restaurants);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <FavoriteFoodItemsScreenView
      image={state.userInfo.image}
      favoriteFoodItems={favoriteFoodItems}
      favoriteRestaurants={favoriteRestaurants}
      isLoading={isLoading}
      showFavoriteFoods={showFavoriteFoods}
      setShowFavoriteFoods={setShowFavoriteFoods}
      leftPress={() => navigation.goBack()}
      rightPress={() => navigation.navigate(EAppNavigationRoutes.PROFILE)}
    />
  );
};
