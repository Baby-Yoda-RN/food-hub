import React, {FC, useState} from 'react';
import {TFavoriteFoodItemsNavigation} from './FavoriteFoodItems.type';
import {FavoriteFoodItemsScreenView} from './FavoriteFoodItems.view';

const FavoriteFoods = [
  {
    uuid: '12345',
    name: 'Vegan Pizza',
    description: 'Vegan Pizza',
    rating: 5,
    usersVoted: 100,
    price: 5.5,
    favorite: false,
    imageName: 'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
  },
  {
    uuid: '12346',
    name: 'Boneless',
    description: 'Delicious Boneless',
    rating: 5,
    usersVoted: 2,
    price: 20.99,
    favorite: true,
    imageName: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Boneless-Buffalo-Wings-3.jpg',
  },
  {
    uuid: '12347',
    name: 'Big Mac',
    description: 'The classic Big Mac',
    rating: 5,
    usersVoted: 2,
    price: 7.99,
    favorite: true,
    imageName: 'https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/07/21/14691145976379.jpg',
  },
  {
    uuid: '12348',
    name: 'Cripsy Chicken Sandwich',
    description: 'Arriba Mexico Cabrones',
    rating: 5,
    usersVoted: 2,
    price: 20.99,
    favorite: true,
    imageName: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/mcdonalds-chicken-sandwich.jpg?quality=82&strip=all',
  },
  {
    uuid: '12349',
    name: 'Boneless',
    description: 'Delicious Boneless',
    rating: 5,
    usersVoted: 2,
    price: 20.99,
    favorite: true,
    imageName: 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Boneless-Buffalo-Wings-3.jpg',
  },
];

const restaurants = [
  {
  uuid: '1234',
  name: "McDonald's",
  rating: 4,
  usersVoted: 25,
  favorite: true,
  freeDelivery: 'Free Delivery',
  deliveryTime: 10,
  items: ['Burger', 'Chicken', 'Fast Food', 'Breakfast', 'American'],
  imageName:
    'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
  },
];


export const FavoriteFoodItems: FC<TFavoriteFoodItemsNavigation> = ({navigation}) => {
  const handleOnPress = () => {
    console.log('navigate to screen');
  };
  
  const [option, setOption] = useState<boolean>(true)

  return (
    <FavoriteFoodItemsScreenView
      favoriteFoodItems={FavoriteFoods}
      favoriteResturants={restaurants}
      onPress={handleOnPress} 
      isLoading={false} 
      showFavoriteFoods={option}
      setShowFavoriteFoods={setOption}   />
  );
};
