import React from 'react';
import {TRestaurant} from '../../types/data';
import {Card} from './card';
import {Text, View, ScrollView, Image} from 'react-native';
import {styles} from './card.style';
import {Icon} from '../icon/Icon';
import {size} from '../../theme';

export const RestaurantCard = (restaurant?: TRestaurant) => {
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

  restaurant = restaurantDummy;

  const {
    name,
    rating,
    usersVoted,
    favorite,
    freeDelivery,
    deliveryTime,
    items,
    imageName,
  } = restaurant;

  const render = () => (
    <>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: imageName,
          }}
        />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.detailsContainer}>
          <Icon
            name="Motorcycle"
            height={size.md}
            width={size.md}
            containerStyle={styles.iconContainer}
          />
          <Text style={styles.details}>{freeDelivery}</Text>
          <Icon
            name="Clock"
            height={size.md}
            width={size.md}
            containerStyle={styles.iconContainer}
          />
          <Text style={styles.details}>{`${deliveryTime} mins`}</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tagsContainer}>
          {items?.map((item, key) => (
            <Text style={styles.itemTags} key={key}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    </>
  );

  return <Card renderDetails={render} />;
};