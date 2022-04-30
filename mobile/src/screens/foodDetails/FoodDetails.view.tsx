import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TFoodDetailsScreenViewProps} from './FoodDetails.type';
import {Header} from '../../components';
import {size} from '../../theme';
import {styles} from './FoodDetails.style';

export const FoodDetailsScreenView: FC<TFoodDetailsScreenViewProps> = ({
  title,
}) => {
  return (
    <View>
      <Header
        title={title}
        leftIconName="ChevronLeft"
        iconHeight={size.rg}
        iconWidth={size.rg}
        leftPress={onPress}
      />
      <Text>{title} Screen</Text>
    </View>
  );
};
