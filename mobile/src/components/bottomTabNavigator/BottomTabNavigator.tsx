import {View, TouchableOpacity, Alert} from 'react-native';
import React, {FC} from 'react';
import {styles} from './BottomTabNavigator.styles';
import {TBottomTabNavigator} from './BottomTabNavigator.type';
import { Badge } from '../badge/Badge';
import {Icon} from '../icon/Icon';
import { color, size } from '../../theme';


export const BottomTabNavigator: FC<TBottomTabNavigator> = ({iconSize = size.lg, fillPin = color.grayDisabled}) => {

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
        <Icon name="Compass" height={iconSize} width={iconSize} fill={fillPin} />
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={'2'} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
        <Icon name="Pin" height={iconSize} width={iconSize} />
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={20} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
        <Icon name="Bag" height={iconSize} width={iconSize}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={10} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
        <Icon name="Heart" height={iconSize} width={iconSize}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={1}/>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity>
        <Icon name="Bell" height={iconSize} width={iconSize}/>
        </TouchableOpacity>
        <Badge containerStyle={styles.badgeContainer} value={3}/>
      </View>
    </View>
  );
};
