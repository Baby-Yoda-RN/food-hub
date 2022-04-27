import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './card.style';
import {TCardProps} from './card.type';

export const Card: FC<TCardProps> = ({containerStyle, children}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};
