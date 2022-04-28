import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({containerStyle, renderDetails}) => {
  return (
    <View style={[styles.container, containerStyle]}>{renderDetails()}</View>
  );
};
