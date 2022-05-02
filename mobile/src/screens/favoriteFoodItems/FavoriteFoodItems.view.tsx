import React, {FC} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Header, Button, FoodCard} from '../../components';
import { TFavoriteFoodItemsScreenViewProps } from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {Container} from '../../components';
import {size} from '../../theme';
import { TFoodItem } from '../../types/data';



export const FavoriteFoodItemsScreenView: FC<TFavoriteFoodItemsScreenViewProps> = ({
  onPress,
  isLoading = false,
}) => {
   
    const items = {
        item1: {
          name: "Chicken Hawaiian",
          description: "Chicken, Cheese, and pineapple",
          price: 12,
          imageName: 'https://s23209.pcdn.co/wp-content/uploads/2015/08/IMG_2496edit.jpg',
        },
        item2: {
          name: "Chicken Hawaiian",
          description: "Chicken, Cheese, and pineapple",
          price: 12,
          imageName: 'https://s23209.pcdn.co/wp-content/uploads/2015/08/IMG_2496edit.jpg',
        },
        item3: {
          name: "Chicken Hawaiian",
          description: "Chicken, Cheese, and pineapple",
          price: 12,
          imageName: 'https://s23209.pcdn.co/wp-content/uploads/2015/08/IMG_2496edit.jpg',
        }
    }
    const item ={
     
      name: "Chicken Hawaiian",
      description: "Chicken, Cheese, and pineapple",
      price: 12,
      imageName: 'https://s23209.pcdn.co/wp-content/uploads/2015/08/IMG_2496edit.jpg',
    
    }
    
    return (
        <Container isLoading={isLoading}>
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
        <ScrollView>
          <FoodCard foodItem={item}/>
          <FoodCard foodItem={item}/>
          <FoodCard foodItem={item}/>
        </ScrollView>
      </Container>
    );
  };