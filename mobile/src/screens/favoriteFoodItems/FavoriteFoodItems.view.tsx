import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Header, ToggleButton} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {TFavoriteFoodItemsScreenViewProps} from './FavoriteFoodItems.type';
import {styles} from './FavoriteFoodItems.styles';
import {Container} from '../../components';
import {size, color} from '../../theme';

export const FavoriteFoodItemsScreenView: FC<
  TFavoriteFoodItemsScreenViewProps
> = ({
  image,
  favoriteFoodItems,
  favoriteResturants,
  isLoading = false,
  showFavoriteFoods = true,
  setShowFavoriteFoods,
  leftPress,
}) => {
  return (
    <Container
      isLoading={isLoading}
      isScrollViewDisabled={false}
      header={
        <Header
          leftIconName="ChevronLeft"
          leftPress={leftPress}
          iconWidth={size.rg}
          iconHeight={size.rg}
          title="Favorites"
          rightIconLocation={image}
          containerStyle={styles.header}
        />
      }>
      <View style={styles.toggleButtonContainer}>
        <ToggleButton
          primaryText="Food Items"
          secondaryText="Resturants"
          buttonTheme={color.primary}
          option={showFavoriteFoods}
          setOption={setShowFavoriteFoods}
        />
      </View>

      <View>
        {(showFavoriteFoods ? favoriteFoodItems : favoriteResturants).map(
          (food, index) => {
            return (
              <TouchableOpacity key={String(index)}>
                <View>
                  <FoodCard foodItem={food} />
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </Container>
  );
};
