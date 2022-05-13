import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Header, ToggleButton} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import { TFavoriteFoodItemsScreenViewProps } from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {Container} from '../../components';
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
        <Container isLoading={isLoading} 
        isScrollViewDisabled = {false}
        header={
          <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
          title='Favorites'
          rightIconName="Profile"
          containerStyle={styles.header}
        />
        }>
        
        <View style={styles.toggleButtonContainer}>
            <ToggleButton primaryText='Food Items' 
            secondaryText='Resturants' 
            buttonTheme={color.primary}
            option= {showFavoriteFoods}
            setOption={setShowFavoriteFoods}
            />
        </View>
        
        <View>
        {favoriteFoodItems && (showFavoriteFoods ? favoriteFoodItems : favoriteResturants).map((food, index) => {
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

      </Container>
    );
  };