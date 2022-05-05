import React, {FC} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Header, Button} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import { TFavoriteFoodItemsScreenViewProps } from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {Container} from '../../components';
import {size} from '../../theme';



export const FavoriteFoodItemsScreenView: FC<TFavoriteFoodItemsScreenViewProps> = ({
  favoriteFoodItems,
  onPress,
  isLoading = false,
}) => {
   
    
    return (
        <Container isLoading={isLoading}>
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          title='Favorites'
          rightIconName="Profile"
          containerStyle={styles.header}
        />
        
        <View style={styles.buttonContainer}>
            <Button title="Food Items" containerStyle={styles.button} />
            <Button title="Resturants" containerStyle={styles.clearButton} titleStyle = {styles.primaryText} />
        </View>
        <ScrollView>
          <View>
          {favoriteFoodItems.map((food, index) => {
            return (
              <TouchableOpacity
                key={String(index)}>
                <View>
                  <FoodCard foodItem={food} />
                </View>
              </TouchableOpacity>
            );
          })}
          </View>
        </ScrollView>
      </Container>
    );
  };