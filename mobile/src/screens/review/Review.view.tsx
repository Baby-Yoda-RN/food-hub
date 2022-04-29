import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TReviewScreenViewProps} from './Review.type';
import {Header} from '../../components';
import { size } from '../../theme';

export const ReviewScreenView:FC<TReviewScreenViewProps> = ({title, onPress}) => {
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
