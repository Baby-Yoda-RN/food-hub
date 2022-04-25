import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {FC} from 'react';
import {styles} from './BottomTabNavigator.styles';
import {BottomTabNavigatorProps} from './BottomTabNavigator.type';
import {Icon} from '../icon/Icon';
import { color, size } from '../../theme';

const SIZE = size.lg;
const PRIMARY_COLOR = color.primary;


//Temporal component until Badge Component is merged
type BadgeT = {
  value:string|Number,
}

const Badge: FC<BadgeT>= ({value}) => {

  let newValue: string = '';
  if(typeof value === 'number'){
    newValue = value>99?'+99':value+''
  }else if(typeof value === 'string'){
    newValue = value
  }

  return (
    <View
      style={{
        borderRadius:8,
        backgroundColor: color.yellow,
        paddingVertical:1,
        paddingHorizontal:6,
        position: 'absolute',
        right: 0,
        top: 0,
      }}
    >
      <Text style={{color:color.white}}>{newValue}</Text>
  </View>
  );
};

//End of Temporal Badge Component

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
        <Badge value={'2'} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Pin" height={SIZE} width={SIZE} />
        </TouchableOpacity>
        <Badge value={120} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Bag" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge value={30} />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Heart" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge value={1}/>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={handleOnPress}>
        <Icon name="Bell" height={SIZE} width={SIZE}/>
        </TouchableOpacity>
        <Badge value={3}/>
      </View>
    </View>
  );
};
