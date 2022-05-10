import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {TFoodItem} from '../../types/data';
import {Card} from './card';
import {styles} from './card.style';
import {TFoodItemCardProps} from './card.type';

export const FoodCard: FC<TFoodItemCardProps> = ({foodItem}) => {
  const {name, description, rating, usersVoted, price, favorite, imageName} =
    foodItem;

  return (
    <Card>
      <View>
        <View>
          <Image
            style={styles.cardImage}
            source={{
              uri: imageName,
            }}
          />
        </View>

        <View style={styles.topLeftTag}>
          <PriceTag price={10.95} />
        </View>
        <View style={styles.topRightTag}>
          <Icon
            name="Heart"
            width={size.rg}
            height={size.rg}
            containerStyle={{
              backgroundColor: favoriteBackgroundColor,
              borderRadius: 100,
              padding: size.sm,
            }}
            fill={color.white}
          />
        </View>

        <View style={styles.bottomTags}>
          <RatingTag usersVoted={30} rating={5} />
        </View>
        <View style={styles.information}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>{description}</Text>
        </View>
      </View>
    </Card>
  );
};
