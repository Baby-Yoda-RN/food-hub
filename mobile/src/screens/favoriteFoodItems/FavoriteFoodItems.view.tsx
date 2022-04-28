import React, {FC} from 'react';
import {View, Button} from 'react-native';
import { TFavoriteFoodItemsView } from './FavoriteFoodItems.type';

export const FavoriteFoodItemsView: FC<TFavoriteFoodItemsView> = ({press}) => {
   
    return (
    <View>
        <Button 
            title="Favorite Foods"
            onPress={press}
        />
    </View>
    );
  };