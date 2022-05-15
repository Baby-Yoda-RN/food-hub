import React, {FC, useState, useEffect} from 'react';
import {foodHubAPI} from '../../config';
import {EAppNavigationRoutes} from '../../navigation/appNavigation/AppNavigation.type';
import {TRatingNavigation} from './Rating.type';
import {RatingScreenView} from './Rating.view';

export const RatingScreen: FC<TRatingNavigation> = ({route, navigation}) => {
  const [review, setReview] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [background, setBackground] = useState(
    'https://i.imgur.com/oi3XvKU.jpg',
  );
  const [logo, setLogo] = useState('https://i.imgur.com/QG0JYZz.jpg');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await foodHubAPI.get('/home');
      setRestaurant(
        response.data.restaurant.filter(
          item => item.uuid === route.params.restaurantId,
        )[0].name,
      );
      setBackground(
        response.data.restaurant.filter(
          item => item.uuid === route.params.restaurantId,
        )[0].imageName,
      );
      setLogo(
        response.data.restaurant.filter(
          item => item.uuid === route.params.restaurantId,
        )[0].logo,
      );
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <RatingScreenView
      isLoading={isLoading}
      restaurant={restaurant}
      background={background}
      logo={logo}
      leftPress={() => navigation.goBack()}
      setReview={setReview}
      press={() => navigation.navigate(EAppNavigationRoutes.REVIEW)}
    />
  );
};
