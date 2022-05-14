import {View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './BottomTabNavigator.styles';
import {TBottomTabNavigator} from './BottomTabNavigator.type';
import {Icon} from '../icon/Icon';
import {color, size} from 'theme';

export const BottomTabNavigator: FC<TBottomTabNavigator> = ({
  iconSize = size.lg,
  fillPin = color.grayDisabled,
  pressHome = () => console.log('Home'),
  pressCategory = () => console.log('Cat'),
  pressCart = () => console.log('Cart'),
  pressFavorites = () => console.log('Fav'),
  pressBell = () => console.log('Bell'),
  focusTab,
}) => {
  const displayIcon = (name: string, onPress: () => void) => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={onPress}>
          <Icon name={name} height={iconSize} width={iconSize} fill={fillPin} />
        </TouchableOpacity>
      </View>
    );
  };

  const iconArray = [
    displayIcon('Compass', pressHome),
    displayIcon('Pin', pressCategory),
    displayIcon('Bag', pressCart),
    displayIcon('Heart', pressFavorites),
    displayIcon('Bell', pressBell),
  ];

  return (
    <View style={styles.container}>
      {iconArray.map((item, key) => (
        <View style={styles.tabContainer} key={key}>
          {item}
        </View>
      ))}
    </View>
  );
};
