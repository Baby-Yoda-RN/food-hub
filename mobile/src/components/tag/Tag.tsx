import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './Tag.style';
import {TTagProps} from './Tag.type';

export const Tag: FC<TTagProps> = ({renderTag, containerStyle}) => {
  return <View style={[styles.container, containerStyle]}>{renderTag()}</View>;
};
