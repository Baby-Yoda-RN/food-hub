import React, {FC, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import { foodHubAPI } from '../../config';
import {TGetItemId, THomeData, THomeScreenNavigation} from './Home.type';
import {HomeScreenView} from './Home.view';

export const HomeScreen: FC<THomeScreenNavigation> = ({navigation}) => {
  const [category, setCategory] = useState<null | string>(null);
  const [homeData, setHomeData] = useState<null | THomeData>(null)
  const handleViewAll = () => {
    console.log('navigate to Restaurants Screen');
  };

  const handleOnPressCard: TGetItemId = (id: string) => {
    Alert.alert('Card Pressed', id);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await foodHubAPI.get('/home')
      setHomeData(response.data)
    }
    getData()
  },[])

  return (
    <HomeScreenView
      featuredRestaurants={homeData?.restaurant}
      popularItems={homeData?.popularItems}
      onPressRestaurantCard={handleOnPressCard}
      onPressFoodCard={handleOnPressCard}
      onPressViewAll={handleViewAll}
      categories={homeData?.categories}
      categoryState={[category, setCategory]}
      leftPress={() => navigation.toggleDrawer() }
    />
  );
};
