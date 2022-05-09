import React, {FC, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {TFoodItem, TItem} from '../../types/data';
import {Card} from './card';
import {styles} from './card.style';
import {TFoodItemCardProps} from './card.type';
import {foodHubAPI} from '../../config';

export const FoodCard: FC<TFoodItemCardProps> = ({foodItemId}) => {
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
        <Text style={styles.details}>{description}</Text>
      </View>
    </Card>
  );
};
