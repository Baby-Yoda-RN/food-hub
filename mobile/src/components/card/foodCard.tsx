import React, {FC, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {TFoodItem, TItem} from '../../types/data';
import {Card} from './card';
import {styles} from './card.style';
import {TFoodItemCardProps} from './card.type';
import {foodHubAPI} from '../../config';
import {PriceTag} from '../tag/PriceTag';
import {RatingTag} from '../tag/RatingTag';
import {Icon} from '../icon/Icon';
import {size} from '../../theme';

export const FoodCard: FC<TFoodItemCardProps> = ({
  foodItemId,
  isDetails = false,
}) => {
  const [foodItem, setFoodItem] = useState<TFoodItem>({} as TFoodItem);

  useEffect(() => {
    getFoodItem();
  }, []);

  const getFoodItem = async () => {
    const newFoodItem = await foodHubAPI.get(`/foodItem/${foodItemId}`);
    setFoodItem(newFoodItem.data);
  };

  const {name, description, rating, usersVoted, price, favorite, imageName} =
    foodItem;

  return (
    <Card>
      <View style={{borderColor: 'black', borderWidth: 1}}>
        <View>
          <Image
            style={styles.cardImage}
            source={{
              uri: imageName,
            }}
          />
        </View>
        <View style={styles.topTags}>
          <View style={styles.topLeftTag}>
            <PriceTag price={price} />
          </View>
          <View style={styles.topRightTag}>
            <Icon name="Heart" width={size.lg} height={size.lg} />
          </View>
        </View>
        <View style={styles.bottomTags}>
          <RatingTag usersVoted={usersVoted} rating={rating} />
        </View>
        <View style={styles.information}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>{description}</Text>
        </View>
      </View>
    </Card>
  );
};
