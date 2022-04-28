import React, {FC} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, TextInput} from '../../components';
import {BottomTabNavigator} from '../../components/bottomTabNavigator/BottomTabNavigator';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {size, color} from '../../theme';
import {styles} from './Home.style';
import {THomeView} from './Home.type';

export const HomeView: FC<THomeView> = ({handleViewAll, featuredRestaurants, popularItems}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        deliveryLocation="4102 Pretty View Lane"
        leftIconName="Hamburger"
        iconHeight={20}
        iconWidth={20}
        rightIconName="Hamburger"
        containerStyle={{marginHorizontal: size.rg, paddingBottom: size.rg}}
      />
      <ScrollView
        style={{flex: 1, marginHorizontal: size.rg}}
        nestedScrollEnabled
        contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>What would you like to order</Text>
        <TextInput
          leftIcon="Magnify"
          type="search"
          placeholder="Find food by name"
        />
        <View style={styles.sectionContainer}>
          <View
            style={[
              styles.horizontalContainer,
              styles.featuredRestaurantsTitleContainer,
            ]}>
            <Text style={styles.subtitle}>Featured Restaurants</Text>
            <TouchableOpacity onPress={handleViewAll}>
              <Text style={styles.viewAll}>{'View All >'}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            nestedScrollEnabled
            horizontal
            contentContainerStyle={[styles.horizontalContainer]}>
            {
              featuredRestaurants.map(restaurant => {
                return <RestaurantCard restaurant={restaurant}/>
              })
            }
          </ScrollView>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.subtitle}>Popular Items</Text>
          <View style={[styles.horizontalContainer, styles.foodCardContainer]}>
            {
              popularItems.map(food => {
                return <FoodCard foodItem={food}/>
              })
            }
          </View>
        </View>
      </ScrollView>
      <BottomTabNavigator fillPin={color.primary} />
    </SafeAreaView>
  );
};
