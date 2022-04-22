import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {Restaurant} from '../../types/data';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({restaurant}) => {
  const dummy: Restaurant = {
    name: "McDonald's",
    rating: 4,
    usersVoted: 25,
    favorite: true,
    freeDelivery: 'Free Delivery',
    deliveryTime: 10,
    items: ['Burger', 'Chicken', 'Fast Food'],
  };

  restaurant = dummy;

  // Rating Component and Favorite Component needed
  // All data is dummy data, until server is set up

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.restaurantImage}
          source={{
            uri: 'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
          }}
        />
      </View>
      <View style={styles.restaurantInformation}>
        <Text style={styles.restaurantName}>{restaurant?.name}</Text>
        <Text style={styles.deliveryDetails}>
          {`${restaurant?.freeDelivery}    ${restaurant?.deliveryTime} mins`}
        </Text>
        <View style={styles.tagContainer}>
          {restaurant?.items?.map((item, key) => (
            <Text style={styles.itemTags} key={key}>
              {item.toUpperCase()}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
