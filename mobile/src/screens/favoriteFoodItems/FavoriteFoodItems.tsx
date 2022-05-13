import React, {FC, useState, useEffect} from 'react';
import {TFavoriteFoodItemsNavigation} from './FavoriteFoodItems.type';
import {FavoriteFoodItemsScreenView} from './FavoriteFoodItems.view';
import { foodHubAPI } from '../../config';


export const FavoriteFoodItems: FC<TFavoriteFoodItemsNavigation> = ({navigation}) => {
  
  const [favoritesData, setFavoritesData]= useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await foodHubAPI.get('/favorites')
      setFavoritesData(response.data)
    }
    getData()
  },[])

  const handleOnPress = () => {
    console.log('navigate to screen');
  };

  const [showFavoriteFoods, setShowFavoriteFoods] = useState<boolean>(true)

  return (
    <FavoriteFoodItemsScreenView
      favoriteFoodItems={favoritesData.foods}
      favoriteResturants={favoritesData.restaurants}
      onPress={handleOnPress} 
      isLoading={false} 
      showFavoriteFoods={showFavoriteFoods}
      setShowFavoriteFoods={setShowFavoriteFoods}
      onLeftPress={() => navigation.goBack()}
    />
  );
};
