import React, {FC} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, TextInput} from '../../components';
import {BottomTabNavigator} from '../../components/bottomTabNavigator/BottomTabNavigator';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size, color} from '../../theme';
import {TFoodItem, TRestaurant} from '../../types/data';
import {styles} from './Home.style';
import {THomeView} from './Home.type';

const restaurantDummy: TRestaurant = {
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

const foodDummy: TFoodItem = {
  uuid: '12345',
  name: 'Vegan Pizza',
  description: 'Pizza para jotos',
  rating: 5,
  usersVoted: 100,
  price: 5.5,
  favorite: false,
  imageName: 'https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg',
};

export const HomeView: FC<THomeView> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        deliveryLocation="4102 Pretty View Lane"
        leftIconName="Hamburger"
        iconHeight={20}
        iconWidth={20}
        rightIconName="Hamburger"
        containerStyle={{marginHorizontal: size.rg, paddingBottom: size.rg}}
      />
      <ScrollView
        style={{flex: 1, marginHorizontal:size.rg}}
        nestedScrollEnabled
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>What would you like to order</Text>
        <TextInput
          leftIcon="Magnify"
          type="search"
          placeholder="Find food by name"
        />
        <View style={{flexDirection: 'row'}}>
          <Text>Featured Restaurants</Text>
          <Text>View All</Text>
        </View>
        <View>
          <ScrollView
            nestedScrollEnabled
            horizontal
            contentContainerStyle={[styles.horizontalContainer]}>
            <RestaurantCard restaurant={restaurantDummy} />
            <RestaurantCard restaurant={restaurantDummy} />
            <RestaurantCard restaurant={restaurantDummy} />
            <RestaurantCard restaurant={restaurantDummy} />
          </ScrollView>
        </View>
        <Text>Popular Items</Text>
        <View style={[styles.horizontalContainer, styles.foodCardContainer]}>
          <FoodCard foodItem={foodDummy} />
          <FoodCard foodItem={foodDummy} />
          <FoodCard foodItem={foodDummy} />
          <FoodCard foodItem={foodDummy} />
        </View>
      </ScrollView>
      <BottomTabNavigator fillPin={color.primary} />
    </SafeAreaView>
  );
};
