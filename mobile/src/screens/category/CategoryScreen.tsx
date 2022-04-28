import React, {FC} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>; //TODO Redirect for DetailScreen

export const CategoryScreen: FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const titleCategory1 = 'Fast';
  const titleCategory2 = 'Food';
  const typeOfFood = 'pizza';
  const countsOfType = 80;
  const dropDown = <Text>DropDown</Text>;

  return (
    <View>
      <View>
        <ImageBackground
          source={require('../../assets/images/category_pizza.png')}>
          <Text>Header</Text>
        </ImageBackground>
      </View>
      <View>
        <Text>Title</Text>
        <Text>
          {countsOfType} type of {typeOfFood}
        </Text>
      </View>
      <View>
        <Text>Sort by: {dropDown}</Text>
        <Text>List</Text>
      </View>
    </View>
  );
};
