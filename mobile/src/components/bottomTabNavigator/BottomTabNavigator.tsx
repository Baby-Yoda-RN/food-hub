import {View, TouchableOpacity, Alert} from 'react-native';
import React, {FC} from 'react';
import {styles} from './BottomTabNavigator.styles';
import {BottomTabNavigatorProps} from './BottomTabNavigator.type';
import { Badge } from '../badge/Badge';
import {Icon} from '../icon/Icon';
import { color, size } from '../../theme';

const SIZE = size.lg;
const PRIMARY_COLOR = color.primary;

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = ({}) => {

  const handleOnPress = () => {
    Alert.alert('Pressed')
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Compass" height={SIZE} width={SIZE} fill={PRIMARY_COLOR} />
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={'2'} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Pin" height={SIZE} width={SIZE} />
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={20} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Bag" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={10} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Heart" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={1}/>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Bell" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={3}/>
      </View>
    </View>
  );
};
