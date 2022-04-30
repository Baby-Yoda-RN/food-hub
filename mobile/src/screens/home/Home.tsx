import React, {FC, useState} from 'react';
import {Alert} from 'react-native';
import {TFoodItem, TRestaurant} from '../../types/data';
import {TGetItemId, THomeScreen} from './Home.type';
import {HomeScreenView} from './Home.view';

const restaurantDummy: TRestaurant = {
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
};

const featuredRestaurants = [restaurantDummy, restaurantDummy, restaurantDummy];

const popularItems = [
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


const categories = [
  {value:'Burger',image:'https://flyclipart.com/thumb2/burger-energy-food-junk-food-meal-veggie-burger-icon-587826.png'},
  {value:'Pizza',image:'https://cdn-icons-png.flaticon.com/512/3132/3132693.png'},
  {value:'Mexican',image:'https://i.pinimg.com/originals/1b/ec/81/1bec818c51ca78276ffa641f2a210612.png'},
  {value:'Asian',image:'https://cdn.iconscout.com/icon/free/png-256/sushi-hotel-food-fastfood-emoj-symbol-30705.png'},
  {value:'Coffee',image:'https://cdn-icons-png.flaticon.com/512/924/924514.png'},
]

export const HomeScreen: FC<THomeScreen> = () => {

  const [category, setCategory] = useState<null|string>(null)
  const handleViewAll = () => {
    console.log('navigate to Restaurants Screen');
  };

  const handleOnPressCard: TGetItemId = (id: string) => {
    Alert.alert('Card Pressed', id);
  };

  return (
    <HomeScreenView
      featuredRestaurants={featuredRestaurants}
      popularItems={popularItems}
      onPressRestaurantCard={handleOnPressCard}
      onPressFoodCard={handleOnPressCard}
      onPressViewAll={handleViewAll}
      categories={categories}
      categoryState={[category,setCategory]}
    />
  );
};
