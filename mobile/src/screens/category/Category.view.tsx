import React, {FC} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {Header, Icon, Dropdown, TextInput} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {size} from '../../theme';
import {TFoodItem} from '../../types/data';
import {styles} from './Category.styles';
import {TCategoryViewProps} from './Category.type';

const foodTypeList: Array<TFoodItem> = [
  {
    uuid: '1',
    name: 'pineapple12',
    description: 'pineapple1 desc',
    rating: 1,
    usersVoted: 1,
    price: 1,
    favorite: true,
    imageName: 'pineapple1',
  },
  {
    uuid: '2',
    name: 'pineapple2',
    description: 'pineapple2 desc',
    rating: 2,
    usersVoted: 2,
    price: 2,
    favorite: true,
    imageName: 'pineapple2',
  },
  {
    uuid: '3',
    name: 'pineapple3',
    description: 'pineapple3 desc',
    rating: 3,
    usersVoted: 3,
    price: 3,
    favorite: true,
    imageName: 'pineapple3',
  },
  {
    uuid: '4',
    name: 'pineapple4',
    description: 'pineapple4 desc',
    rating: 4,
    usersVoted: 4,
    price: 4,
    favorite: true,
    imageName: 'pineapple4',
  },
];

const DropdownList = [
  {label: 'Popular', value: 'popular'},
  {label: 'Price', value: 'price'},
];

export const CategoryScreenView: FC<TCategoryViewProps> = () => {
  const titleCategory1 = 'Fast';
  const titleCategory2 = 'Food';
  const typeOfFood = 'pizza';
  const countsOfType = 80;

  const renderItem = (item: TFoodItem) => {
    <FoodCard foodItem={item} />;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/category_pizza.png')}>
        <View style={styles.header}>
          <Header
            leftIconName="ChevronLeft"
            iconWidth={size.rg}
            iconHeight={size.rg}
          />
          <View>
            <Text style={styles.headerText1}>{titleCategory1}</Text>
            <Text style={styles.headerText2}>{titleCategory2}</Text>
            <Text style={styles.subHeader}>
              {countsOfType} type of {typeOfFood}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.foodList}>
        <View style={styles.sort}>
          <View style={styles.aligner}>
            <Text style={styles.text}>Sort by: </Text>
          </View>
          <Dropdown data={DropdownList} />
          <View style={styles.aligner}>
            <Icon name="Slide" width={size.rg} height={size.rg} />
          </View>
        </View>
        <FlatList
          data={foodTypeList}
          renderItem={({item}) => <FoodCard foodItem={item} />}
          keyExtractor={item => item.uuid}
        />
      </View>
    </View>
  );
};
