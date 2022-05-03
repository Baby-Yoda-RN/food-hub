import React, {FC, useState} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {Header, Icon, Dropdown, TextInput, Container} from '../../components';
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
    imageName:
      'https://mysliceofitaly.com/images/hero-BG-Slice-of-Italy-Bakersfield-CA.jpg',
  },
  {
    uuid: '2',
    name: 'pineapple2',
    description: 'pineapple2 desc',
    rating: 2,
    usersVoted: 2,
    price: 2,
    favorite: true,
    imageName:
      'https://rustyspizza.com/images/default-source/default-album/rspechero.jpg?sfvrsn=79bcf8e0_2',
  },
  {
    uuid: '3',
    name: 'pineapple3',
    description: 'pineapple3 desc',
    rating: 3,
    usersVoted: 3,
    price: 3,
    favorite: true,
    imageName:
      'https://images.happycow.net/venues/1024/11/78/hcmp117849_388183.jpeg',
  },
  {
    uuid: '4',
    name: 'pineapple4',
    description: 'pineapple4 desc',
    rating: 4,
    usersVoted: 4,
    price: 4,
    favorite: true,
    imageName:
      'https://popmenucloud.com/pqkcorbf/ae2985ed-ae39-4377-8190-9c0ad9e0d06c.jpg',
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

  return (
    <>
      <Container
        backgroundImage={require('../../assets/images/category_pizza.png')}
        backgroundImageStyle={styles.imageBackground}
        isScrollViewDisabled={true}>
        <Header
          leftIconName="ChevronLeft"
          iconWidth={size.rg}
          iconHeight={size.rg}
        />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerText1}>{titleCategory1}</Text>
            <Text style={styles.headerText2}>{titleCategory2}</Text>
            <Text style={styles.subHeader}>
              {countsOfType} type of {typeOfFood}
            </Text>
          </View>
        </View>
        <View style={styles.foodList}>
          <View style={styles.sort}>
            <View style={styles.aligner}>
              <Text style={styles.text}>Sort by: </Text>
            </View>
            <View>
              <Dropdown data={DropdownList}></Dropdown>
            </View>
            <View style={styles.aligner}>
              <Icon name="Slide" width={size.rg} height={size.rg} />
            </View>
          </View>
        </View>

        <FlatList
          data={foodTypeList}
          renderItem={({item}) => <FoodCard foodItem={item} />}
          keyExtractor={item => item.uuid}
        />
      </Container>
    </>
  );
};
