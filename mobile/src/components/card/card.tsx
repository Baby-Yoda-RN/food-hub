import React from 'react';
import {Text, View, Image} from 'react-native';
import {Restaurant} from '../../types/data';
import {styles} from './card.styles';

export const Card = ({item}: {item: Restaurant}) => {
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
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.deliveryDetails}>
          {`${item.freeDelivery}    ${item.deliveryTime} mins`}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {item.items?.map((item, key) => (
            <Text style={styles.itemTags} key={key}>
              {item.toUpperCase()}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
