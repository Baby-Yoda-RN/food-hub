import React, {FC} from 'react';
import {Text, View, Image, ViewStyle} from 'react-native';
import {size, color} from '../../theme';
import {PriceTag, Icon, RatingTag} from '../index';
import {Card} from './card';
import {styles} from './card.style';
import {TFoodItemCardProps} from './card.type';

export const FoodCard: FC<TFoodItemCardProps> = ({foodItem}) => {
  const {name, description, rating, usersVoted, price, favorite, imageName} =
    foodItem;

  const favoriteBackgroundColor: ViewStyle = favorite
    ? {backgroundColor: color.primary}
    : {backgroundColor: color.transparent};

  return (
    <Card>
      <View>
        <Image
          style={styles.cardImage}
          source={{
            uri: imageName,
          }}
        />
      </View>

      <View style={styles.topLeftTag}>
        <PriceTag price={price} />
      </View>
      <View style={styles.topRightTag}>
        <Icon
          name="Heart"
          width={size.rg}
          height={size.rg}
          containerStyle={[styles.favoriteTag, favoriteBackgroundColor]}
          fill={color.white}
        />
      </View>

      <View style={styles.bottomTags}>
        <RatingTag usersVoted={usersVoted} rating={rating} />
      </View>
      <View style={styles.information}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.details}>{description}</Text>
      </View>
    </Card>
  );
};
