import React, {FC} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, Header, Icon, TextInput} from '../../components';
import {BottomTabNavigator} from '../../components/bottomTabNavigator/BottomTabNavigator';
import {FoodCard} from '../../components/card/foodCard';
import {RestaurantCard} from '../../components/card/restaurantCard';
import {ImageButton} from '../../components/imageButton/ImageButton';
import {color} from '../../theme';
import {styles} from './Home.style';
import {THomeScreenView} from './Home.type';

export const HomeScreenView: FC<THomeScreenView> = ({
  onPressViewAll,
  onPressRestaurantCard,
  onPressFoodCard,
  featuredRestaurants,
  popularItems,
  categories,
  categoryState,
}) => {
  const [category, setCategory] = categoryState;
  return (
    <Container
      header={
        <Header
          deliveryLocation="4102 Pretty View Lane"
          leftIconName="Hamburger"
          iconHeight={20}
          iconWidth={20}
          rightIconLocation={
            'https://icons.veryicon.com/png/o/business/multi-color-financial-and-business-icons/user-139.png'
          }
          containerStyle={styles.headerContainer}
        />
      }>
      <Text style={styles.title}>What would you like to order</Text>
      <TextInput
        leftIcon="Magnify"
        type="search"
        placeholder="Find food by name"
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
        <ScrollView
          nestedScrollEnabled
          horizontal
          contentContainerStyle={[styles.horizontalContainer]}>
          {featuredRestaurants.map((restaurant, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressRestaurantCard(String(index))}
                style={styles.restaurantContainer}
                key={String(index)}>
                <RestaurantCard restaurant={restaurant} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.subtitle}>Popular Items</Text>
        <View style={[styles.horizontalContainer, styles.foodCardContainer]}>
          {popularItems.map((food, index) => {
            return (
              <TouchableOpacity
                onPress={() => onPressFoodCard(String(index))}
                style={styles.foodItemContainer}
                key={String(index)}>
                <FoodCard foodItem={food} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Container>
    // <SafeAreaView style={styles.container}>

    // <ScrollView
    //   style={styles.scrollViewStyle}
    //   nestedScrollEnabled
    //   contentContainerStyle={styles.scrollView}>
    //   <Container>
    //     <Text style={styles.title}>What would you like to order</Text>
    //     <TextInput
    //       leftIcon="Magnify"
    //       type="search"
    //       placeholder="Find food by name"
    //     />
    //     <ScrollView horizontal>
    //       {categories?.map((item) => {
    //         return <ImageButton key={item.value} data={item} selected={category} onPressButton={setCategory}/>
    //       })}
    //     </ScrollView>
    //     <View style={styles.sectionContainer}>
    //       <View
    //         style={[
    //           styles.horizontalContainer,
    //           styles.featuredRestaurantsTitleContainer,
    //         ]}>
    //         <Text style={styles.subtitle}>Featured Restaurants</Text>
    //         <TouchableOpacity
    //           onPress={onPressViewAll}
    //           style={styles.viewAllContainer}>
    //           <Text style={styles.viewAll}>{'View All'}</Text>
    //           <Icon name="ChevronRightOrange" height={12} width={12} />
    //         </TouchableOpacity>
    //       </View>
    //       <ScrollView
    //         nestedScrollEnabled
    //         horizontal
    //         contentContainerStyle={[styles.horizontalContainer]}>
    //         {featuredRestaurants.map((restaurant, index) => {
    //           return (
    //             <TouchableOpacity
    //               onPress={() => onPressRestaurantCard(String(index))}
    //               style={styles.restaurantContainer}
    //               key={String(index)}>
    //               <RestaurantCard restaurant={restaurant} />
    //             </TouchableOpacity>
    //           );
    //         })}
    //       </ScrollView>
    //     </View>
    //     <View style={styles.sectionContainer}>
    //       <Text style={styles.subtitle}>Popular Items</Text>
    //       <View
    //         style={[styles.horizontalContainer, styles.foodCardContainer]}>
    //         {popularItems.map((food, index) => {
    //           return (
    //             <TouchableOpacity
    //               onPress={() => onPressFoodCard(String(index))}
    //               style={styles.foodItemContainer}
    //               key={String(index)}>
    //               <FoodCard foodItem={food} />
    //             </TouchableOpacity>
    //           );
    //         })}
    //       </View>
    //     </View>
    //   </Container>
    // </ScrollView>
    // <BottomTabNavigator fillPin={color.primary} />
    // </SafeAreaView>
  );
};
