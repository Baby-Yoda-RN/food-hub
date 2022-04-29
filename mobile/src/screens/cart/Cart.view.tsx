import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TCartScreenViewProps} from './Cart.type';
import {Header} from '../../components';
import {size} from '../../theme';

export const CartScreenView:FC<TCartScreenViewProps> = ({onPress, title}) => {
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
