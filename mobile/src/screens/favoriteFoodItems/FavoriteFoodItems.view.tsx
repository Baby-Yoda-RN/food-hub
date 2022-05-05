import React, {FC} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Header, ToggleButton, Container} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import { TFavoriteFoodItemsScreenViewProps } from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {size,color} from '../../theme';



export const FavoriteFoodItemsScreenView: FC<TFavoriteFoodItemsScreenViewProps> = ({
  favoriteFoodItems,
  favoriteResturants,
  onPress,
  isLoading = false,
  showFavoriteFoods= true,
  setShowFavoriteFoods,
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

        <View style={styles.toggleButtonContainer}>
            <ToggleButton primaryText='Food Items' 
            secondaryText='Resturants' 
            buttonTheme={color.primary}
            option= {showFavoriteFoods}
            setOption={setShowFavoriteFoods}
            />
        </View>
        <ScrollView>
          <View>
          {(showFavoriteFoods ? favoriteFoodItems : favoriteResturants).map((food, index) => {
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