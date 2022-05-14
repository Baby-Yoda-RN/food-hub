import React, {FC, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {foodHubAPI} from '../../config';
import {useGlobalState} from '../../context/global';
import {TUserInfo} from '../../types/data';
import {TGetItemId, THomeData, THomeScreenNavigation} from './Home.type';
import {HomeScreenView} from './Home.view';

export const HomeScreen: FC<THomeScreenNavigation> = ({navigation}) => {
  const {state} = useGlobalState();
  const [category, setCategory] = useState<null | string>(null);
  const [homeData, setHomeData] = useState<null | THomeData>(null);
  const [userInfo, setUserInfo] = useState<TUserInfo>(state.userInfo);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewAll = () => {
    console.log('navigate to Restaurants Screen');
  };

  const handleOnPressCard: TGetItemId = (id: string) => {
    Alert.alert('Card Pressed', id);
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await foodHubAPI.get('/home');
      const tempUserInfo = await foodHubAPI.get('/userInfo');
      setHomeData(response.data);
      setUserInfo(tempUserInfo.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <HomeScreenView
      isLoading={isLoading}
      featuredRestaurants={homeData?.restaurant}
      popularItems={homeData?.popularItems}
      onPressRestaurantCard={handleOnPressCard}
      onPressFoodCard={handleOnPressCard}
      onPressViewAll={handleViewAll}
      categories={homeData?.categories}
      categoryState={[category, setCategory]}
      leftPress={() => navigation.toggleDrawer()}
      deliveryLocation={userInfo.address.street}
      rightIconLocation={userInfo.image}
    />
  );
};
