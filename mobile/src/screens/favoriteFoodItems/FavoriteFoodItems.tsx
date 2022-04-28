import React, {FC} from 'react';
import { RootStackParams } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TFavoriteFoodItems } from "./FavoriteFoodItems.type";
import { FavoriteFoodItemsView } from './FavoriteFoodItems.view';

export const FavoriteFoodItems: FC<TFavoriteFoodItems> = () =>{
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const press = () => {
    navigation.navigate('Signup', {name: 'Signup'});
  };
  return (
    <FavoriteFoodItemsView
      press={press}
    />
  )
}