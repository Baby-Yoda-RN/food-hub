import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TFoodDetailsScreenViewProps} from './FoodDetails.type';
import {Header} from '../../components';
import {size} from '../../theme';
import {styles} from './FoodDetails.style';

export const FoodDetailsScreenView: FC<TFoodDetailsScreenViewProps> = ({
  title,
  description = 'food description',
}) => {
  const renderAddOn = () => {};

  return (
    <View>
      <Header
        title={title}
        leftIconName="ChevronLeft"
        iconHeight={size.rg}
        iconWidth={size.rg}
      />
      <Text>{title}</Text>
    </View>
  );
};
