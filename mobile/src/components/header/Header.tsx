import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Icon} from '../icon/Icon';
import {THeaderProps} from './Header.type';
import {styles} from './Header.style';

export const Header: FC<THeaderProps> = ({
  title,
  deliveryLocation,
  containerStyle,
  leftPress,
  rightPress,
  leftIconName,
  rightIconName,
  rightIconLocation,
  leftIconStyle,
  rightIconStyle,
  iconWidth,
  iconHeight,
}) => {
  return (
    <SafeAreaView>
      <View style={[styles.container, containerStyle]}>
        {leftIconName && (
          <TouchableOpacity onPress={leftPress} style={leftIconStyle}>
            <Icon
              name={leftIconName}
              containerStyle={[styles.leftIcon, leftIconStyle]}
              width={iconWidth}
              height={iconHeight}
            />
          </TouchableOpacity>
        )}
        {title && <Text style={styles.title}>{title}</Text>}
        {!!deliveryLocation && (
          <View style={[styles.locationContainer]}>
            <View>
              <Text style={styles.deliverTo}>
                Deliver To
                <Icon name={'ChevronDown'} />
              </Text>
              <Text numberOfLines={1} style={styles.deliveryLocation}>
                {deliveryLocation}
              </Text>
            </View>
          </View>
        )}
        {rightIconLocation && (
          <TouchableOpacity onPress={rightPress} style={rightIconStyle}>
            <Image style={[styles.image]} source={{uri: rightIconLocation}} />
          </TouchableOpacity>
        )}
        {rightIconName && (
          <TouchableOpacity onPress={leftPress} style={rightIconStyle}>
            <Icon
              name={rightIconName}
              containerStyle={[styles.rightIcon, rightIconStyle]}
              width={iconWidth}
              height={iconHeight}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};
