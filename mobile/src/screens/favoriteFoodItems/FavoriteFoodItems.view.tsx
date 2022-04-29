import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, FoodCard} from '../../components';
import { TFavoriteFoodItemsScreenViewProps } from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {size} from '../../theme';


export const FavoriteFoodItemsScreenView: FC<TFavoriteFoodItemsScreenViewProps> = ({press}) => {
   
    const foodItem = {
        name: "Chicken Hawaiian",
        description: "Chicken, Cheese, and pineapple",
        price: 12
    }
    return (
        <View style={styles.container}>
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          title='Favorites'
          rightIconName="QuestionMark"
          containerStyle={styles.header}
        />
        
        <View style={styles.buttonContainer}>
            <Button title="Food Items" containerStyle={styles.button} />
            <Button title="Resturants" containerStyle={styles.clearButton} titleStyle = {styles.primaryText} />
        </View>
        <FoodCard foodItem={foodItem} ></FoodCard>
      </View>
    );
  };