import React, {FC, useState} from 'react';
import {FlatList, ImageBackground, Text, View} from 'react-native';
import {Header, Icon, Dropdown, TextInput, Container} from '../../components';
import {FoodCard} from '../../components/card/foodCard';
import {size} from '../../theme';
import {TIdProps} from '../../types/data';
import {styles} from './Category.styles';
import {TCategoryViewProps} from './Category.type';

const foodTypeList: Array<TIdProps> = [
  {uuid: '1'},
  {uuid: '2'},
  {uuid: '3'},
  {uuid: '4'},
];

const DropdownList = [
  {label: 'Popular', value: 'popular'},
  {label: 'Price', value: 'price'},
];

export const CategoryScreenView: FC<TCategoryViewProps> = ({leftPress}) => {
  const titleCategory1 = 'Fast';
  const titleCategory2 = 'Food';
  const typeOfFood = 'pizza';
  const countsOfType = 80;

  return (
    <>
      <Container
        backgroundImage={require('../../assets/images/category_pizza.png')}
        backgroundImageStyle={styles.imageBackground}
        isScrollViewDisabled={true}
        header={
          <Header
            containerStyle={styles.header}
            leftIconName="ChevronLeft"
            iconWidth={size.rg}
            iconHeight={size.rg}
            leftPress={leftPress}
          />
        }>
        <View style={styles.topSection}>
          <View>
            <Text style={styles.title1}>{titleCategory1}</Text>
            <Text style={styles.title2}>{titleCategory2}</Text>
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
          renderItem={({item}) => <FoodCard foodItemId={item.uuid} />}
          keyExtractor={item => item.uuid}
        />
      </Container>
    </>
  );
};
