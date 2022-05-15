import React, {FC} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Header, Icon, TextInput} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {ImageButton} from '../../components/imageButton/ImageButton';
import {size} from '../../theme/size/size';
import {styles} from './Home.style';
import {THomeScreenView} from './Home.type';

export const HomeScreenView: FC<THomeScreenView> = ({
  isLoading,
  onPressViewAll,
  onPressRestaurantCard,
  onPressFoodCard,
  featuredRestaurants,
  popularItems,
  categories,
  categoryState,
  leftPress,
  rightPress,
  deliveryLocation,
  rightIconLocation,
}) => {
  const [category, setCategory] = categoryState;
  return (
    <Container
      isLoading={isLoading}
      header={
        <Header
          deliveryLocation={deliveryLocation}
          leftIconName="Hamburger"
          iconHeight={20}
          iconWidth={20}
          leftPress={leftPress}
          rightPress={rightPress}
          rightIconLocation={rightIconLocation}
          containerStyle={styles.headerContainer}
        />
      }
      isLoading={isLoading}>
      <Text style={styles.title}>What would you like to order</Text>
      <TextInput
        leftIcon="Magnify"
        type="search"
        placeholder="Find food by name"
        value={category!}
        onChangeText={setCategory}
        setText={() => {}}
        text={''}
      />
      <ScrollView horizontal>
        {categories?.map(item => {
          return (
            <ImageButton
              key={item.value}
              data={item}
              selected={category}
              onPressButton={setCategory}
            />
          );
        })}
      </ScrollView>
      <View style={styles.sectionContainer}>
        <View
          style={[
            styles.horizontalContainer,
            styles.featuredRestaurantsTitleContainer,
          ]}>
          <Text style={styles.subtitle}>Featured Restaurants</Text>
          <TouchableOpacity
            onPress={onPressViewAll}
            style={styles.viewAllContainer}>
            <Text style={styles.viewAll}>{'View All'}</Text>
            <Icon name="ChevronRightOrange" height={12} width={12} />
          </TouchableOpacity>
        </View>
        {featuredRestaurants?.length ? (
          <ScrollView
            nestedScrollEnabled
            horizontal
            contentContainerStyle={[styles.horizontalContainer]}>
            {featuredRestaurants?.map(restaurant => {
              return (
                <TouchableOpacity
                  onPress={() => onPressRestaurantCard(String(restaurant.uuid))}
                  style={styles.restaurantContainer}
                  key={String(restaurant.uuid)}>
                  <RestaurantCard restaurant={restaurant} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        ) : (
          <View style={{marginBottom: size.lg}}>
            <Text>
              No restaurants to show at the moment. Try to change the category.
            </Text>
          </View>
        )}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Popular Items</Text>
        <View style={[styles.horizontalContainer, styles.foodCardContainer]}>
          {popularItems?.length ? (
            popularItems?.map((food, index) => {
              return (
                <TouchableOpacity
                  onPress={() => onPressFoodCard(String(index))}
                  style={[styles.foodItemContainer, styles.shadow]}
                  key={String(index)}>
                  <View style={styles.shadow}>
                    <FoodCard foodItem={food} />
                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={{marginBottom: size.lg}}>
              <Text>
                No food to show at the moment. Try to change the category.
              </Text>
            </View>
          )}
        </View>
      </View>
    </Container>
  );
};
