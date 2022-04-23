import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {FoodItem, Restaurant} from '../../types/data';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({cardType, containerStyle}) => {
  const restaurantDummy: Restaurant = {
    name: "McDonald's",
    rating: 4,
    usersVoted: '25+',
    favorite: true,
    freeDelivery: 'Free Delivery',
    deliveryTime: 10,
    items: ['Burger', 'Chicken', 'Fast Food'],
    imageName:
      'https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg',
  };

  const foodItemDummy: FoodItem = {
    name: 'Chicken Hawaiian',
    description: 'Chicken, Chesse and Pineapple',
    rating: 4.5,
    usersVoted: '25+',
    price: 10.35,
    favorite: true,
    imageName:
      'https://www.cookingclassy.com/wp-content/uploads/2015/03/hawaiian-bbq-chicken-pizza6-srgb..jpg',
  };

  let cardItem;

  if (cardType === 'foodCard') {
    cardItem = foodItemDummy as FoodItem;
  } else if (cardType === 'restaurantCard') {
    cardItem = restaurantDummy as Restaurant;
  }

  // Rating Component and Favorite Component needed
  // All data is dummy data, until server is set up

  return (
    <View style={[styles.container, containerStyle]}>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: cardItem?.imageName,
          }}
        />
      </View>
      {cardItem === restaurantDummy ? (
        <View style={styles.information}>
          <Text style={styles.title}>{cardItem?.name}</Text>
          <Text style={styles.details}>
            {`${cardItem?.freeDelivery}    ${cardItem?.deliveryTime} mins`}
          </Text>
          <View style={styles.tagContainer}>
            {cardItem?.items?.map((item, key) => (
              <Text style={styles.itemTags} key={key}>
                {item.toUpperCase()}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.information}>
            <Text style={styles.title}>{cardItem?.name}</Text>
            <Text style={styles.details}>
              {(cardItem as FoodItem).description}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
