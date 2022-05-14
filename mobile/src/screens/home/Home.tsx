import React, {FC, useEffect, useState} from 'react';
import {foodHubAPI} from '../../config';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TFoodItem, TRestaurant, TUserInfo} from '../../types/data';
import {TGetItemId, THomeData, THomeScreenNavigation} from './Home.type';
import {HomeScreenView} from './Home.view';
import {useGlobalState} from '../../context/global';

export const HomeScreen: FC<THomeScreenNavigation> = ({navigation}) => {
  const {state} = useGlobalState();
  const [userInfo, setUserInfo] = useState<TUserInfo>(state.userInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<string>('');
  const [homeData, setHomeData] = useState<null | THomeData>(null);
  const [filteredFoodItems, setFilteredFoodItems] = useState<
    TFoodItem[] | undefined
  >(undefined);
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    TRestaurant[] | undefined
  >(undefined);

  const handleViewAll = () => {
    console.log('navigate to Restaurants Screen');
  };

  const handleOnPressRestaurantCard: TGetItemId = (id: string) => {
    navigation.navigate(EAppNavigationRoutes.RATING, {restaurantId: id});
  };

  const handleOnPressPopularItemCard: TGetItemId = (id: string) => {
    navigation.navigate(EAppNavigationRoutes.FOODDETAIL, {itemId: id});
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

  useEffect(() => {
    setFilteredFoodItems(
      homeData?.popularItems?.filter(item => {
        if (item.category === category?.toLowerCase()) return item;
      }),
    );

    setFilteredRestaurants(
      homeData?.restaurant?.filter(restaurant => {
        const items = restaurant.items?.map(item => item.toLowerCase());
        return items?.includes(category?.toLowerCase());
      }),
    );
  }, [category]);

  return (
    <HomeScreenView
      isLoading={isLoading}
      featuredRestaurants={
        filteredRestaurants && category
          ? filteredRestaurants
          : homeData?.restaurant
      }
      popularItems={
        filteredFoodItems && category
          ? filteredFoodItems
          : homeData?.popularItems
      }
      onPressRestaurantCard={handleOnPressRestaurantCard}
      onPressFoodCard={handleOnPressPopularItemCard}
      onPressViewAll={handleViewAll}
      categories={homeData?.categories}
      categoryState={[category, setCategory]}
      leftPress={() => navigation.toggleDrawer()}
      rightPress={() => navigation.navigate(EAppNavigationRoutes.PROFILE)}
      deliveryLocation={state.userInfo.address.street || userInfo.address.street}
      rightIconLocation={userInfo.image}
    />
  );
};
