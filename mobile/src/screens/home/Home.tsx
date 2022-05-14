import React, {FC, useEffect, useState} from 'react';
import {foodHubAPI} from '../../config';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TFoodItem, TRestaurant} from '../../types/data';
import {TGetItemId, THomeData, THomeScreenNavigation} from './Home.type';
import {HomeScreenView} from './Home.view';

export const HomeScreen: FC<THomeScreenNavigation> = ({navigation}) => {
  const [category, setCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
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
      const response = await foodHubAPI.get('/home');
      setHomeData(response.data);
    };
    getData();
    setLoading(false);
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
      isLoading={loading}
    />
  );
};
