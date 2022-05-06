import {View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {styles} from './BottomTabNavigator.styles';
import {TBottomTabNavigator} from './BottomTabNavigator.type';
import {Badge} from '../badge/Badge';
import {Icon} from '../icon/Icon';
import {color, size} from '../../theme';

// This file can be deleted. It's not being used right now but I am keeping it in case it can be used in the future.

export const BottomTabNavigator: FC<TBottomTabNavigator> = ({
  iconSize = size.lg,
  fillPin = color.grayDisabled,
}) => {
  return null;
};

export const HomeButton = (highlight: boolean) => {
  console.log(highlight ? color.primary : color.secondary);

  return (
    <View style={styles.tabContainer}>
      <Icon
        name="Compass"
        height={size.lg}
        width={size.lg}
        fill={highlight ? color.primary : color.secondary}
      />
    </View>
  );
};

export const PinButton = (highlight: any) => (
  <View style={styles.tabContainer}>
    <Icon
      name="Pin"
      height={size.lg}
      width={size.lg}
      fill={highlight ? color.primary : color.secondary}
    />
  </View>
);

export const BagButton = () => (
  <View style={styles.tabContainer}>
    <Icon name="Bag" height={size.lg} width={size.lg} />
  </View>
);

export const FavoritesButton = () => (
  <View style={styles.tabContainer}>
    <Icon name="Heart" height={size.lg} width={size.lg} />
  </View>
);

export const NotificationsButton = () => (
  <View style={styles.tabContainer}>
    <Icon name="Bell" height={size.lg} width={size.lg} />
    <Badge containerStyle={styles.badgeContainer} value={3} />
  </View>
);
